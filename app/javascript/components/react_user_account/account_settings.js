import React from "react"
import {FetchDatabase} from "../fetch_database/fetch_database"

export class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: JSON.parse(document.querySelector('.user-account-app').dataset.user)};
  }

  handleAccountDeletion() {
    document.querySelector(".delete-account-btn").addEventListener('click', (e)=> {
      e.preventDefault();
      const prompt = window.prompt("Enter your password and press 'OK' to confirm that you want to delete your account.");
      
      if (prompt !== null && prompt !== "") {
        const url = new URL(String(window.location.origin) + "/users" );
        const body = JSON.stringify(prompt);
        const deleteAccount = new FetchDatabase();

        deleteAccount.destroy(url, body).then(response => {
          return response.json()
        })
        .then(response => {
          if (Object.entries(response.errors).length !== 0) {
            window.alert("The password you entered is not valid.");
          } else {
            window.alert("Your account and all its details have just been definitely deleted.");
            window.location.href = window.location.origin + "/pages/home";
          };
        });

      } else if (prompt === ''){

        window.alert("Please enter your password in order to delete your account.")
      };
    });  
  }

  componentDidMount() {
    this.props.handleAccountModification();
    this.handleAccountDeletion();
  }

  render() {
    return (
      <div className= "account-settings">
        <h1> Settings </h1>
        <form className="edit_user" id="edit_user" acceptCharset="UTF-8">
          <input name="utf8" className="utf8" type="hidden" value="✓"></input>
          <input type="hidden" name="_method" value="put"></input>
          <input type="hidden" className= "auth-token" name="authenticity_token" value={this.props.csrfToken}></input>
          <div className= "modify-credentials">
            <h4>Modify your details</h4>
            <div className="field">
              <label htmlFor= "user_name">Name*</label>
              <input type="text" name="user[name]" id= "user_name" autoComplete= "name" defaultValue= {this.props.user.name}/>
            </div>

            <div className="field">
              <label htmlFor= "user_lastname">Lastname*</label>
              <input type="text" name="user[lastname]" id= "user_lastname" autoComplete= "lastname" defaultValue= {this.props.user.lastname}/>
            </div>

            <div className="field">
              <label htmlFor= "user_username">User name*</label>
              <input type="text" name="user[username]" id= "user_username" autoComplete= "username" defaultValue= {this.props.user.username} />
            </div>
          </div>
          <div className= "modify-password">
          <h4>Change your password</h4>
          <div className= "password-modification-text">(Leave blank if you don't want to change it)</div>
            <div className="field">
              <label htmlFor= "_current">Password</label>
              <input type="password" autoComplete= "new-password" name="user[password]" id= "user_password" />
            </div>

            <div className="field">
              <label htmlFor= "user_password_confirmation">Password confirmation</label>
              <input type="password" autoComplete= "new-password-confirmation" name="user[password_confirmation]" id= "user_password_confirmation" />
            </div>
          </div>
          <div className= "delete-account">
          <h4>Delete account</h4>
          <div className= "delete-account-text"> Clicking on the "Delete my account" button bellow will delete your account from this website.</div>
          <div className= "delete-account-text"> Please be assured that, in this case, all your details and reviews left and saved on our website will be removed.</div>
          <div className= "delete-account-text"> Functionalities such as writing a review are not available for users without an account. However, you will still be able to compare rackets and to have a look at reviews left by other users. </div>
          <a className= "delete-account-btn button-up" rel="nofollow" >Delete my account</a>
          </div>
          <div className= "validate-modifications">
            <div className="field">
              <label htmlFor= "user_current_password">Current password*</label>
              <input type="password" autoComplete= "password" name="user[current_password]" id= "user_current_password" />
            </div>

            <input className= "user-edit-restration button-up" type="submit" name="commit" value="Update" data-disable-with="Update"></input>
          </div>
        </form>
      </div>
    );
  };
}