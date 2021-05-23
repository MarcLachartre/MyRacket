import React from "react"
import {FetchDatabase} from "../fetch_database/fetch_database"

export class AccountSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {user: JSON.parse(document.querySelector('.user-account-app').dataset.user)}
  }

  handleFormSubmit() {
    document.querySelector(".user-edit-restration").addEventListener("click", (e) => {
      e.preventDefault();
      const url = new URL("http://localhost:3000/users");
      const body = JSON.stringify({authenticity_token: this.csrfToken(),
                                  utf8: document.querySelector(".utf8").value,
                                  user: {
                                    name: document.querySelector("#user_name").value, 
                                    lastname: document.querySelector("#user_lastname").value,
                                    username: document.querySelector("#user_username").value, 
                                    password: document.querySelector("#user_password").value, 
                                    password_confirmation: document.querySelector("#user_password_confirmation").value, 
                                    email: document.querySelector("#user_email").value, 
                                    current_password: document.querySelector("#user_current_password").value,
                                    },
                                    commit: "Update"
                                  });

      const editRegistration = new FetchDatabase();
      editRegistration.patch(url, body).then(response => {
        return response.json()
      }).then(response => {
        this.setState({
          user: response.resource
        })
      });
    });
  }

  handleAccountDeletion() {
    document.querySelector(".delete-account-btn").addEventListener('click', (e)=> {
      e.preventDefault();
      console.log(this.props)
      console.log(window.location.origin)
      // const url = new URL(window.location.origin + "/users/" + String());
      console.log(url)

      // const deleteAccount = new FetchDatabase();
      // deleteAccount.destroy(url)
    })
  }

  csrfToken() {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    return csrf
  }

  componentDidMount() {
    this.handleFormSubmit();
    this.handleAccountDeletion();
  }

  render() {
    return (
      <div className= "account-settings">
        <h2> Settings </h2>
        <form className="edit_user" id="edit_user" acceptCharset="UTF-8">
          <input name="utf8" className="utf8" type="hidden" value="✓"></input>
          <input type="hidden" name="_method" value="put"></input>
          <input type="hidden" className= "auth-token" name="authenticity_token" value={this.csrfToken()}></input>
          <div className= "modify-credentials">
            <div className="field">
              <label htmlFor= "user_name">Name*</label>
              <input type="text" name="user[name]" id= "user_name" autoComplete= "name" defaultValue= {this.state.user.name}/>
            </div>

            <div className="field">
              <label htmlFor= "user_lastname">Lastname*</label>
              <input type="text" name="user[lastname]" id= "user_lastname" autoComplete= "lastname" defaultValue= {this.state.user.lastname}/>
            </div>

            <div className="field">
              <label htmlFor= "user_username">User name*</label>
              <input type="text" name="user[username]" id= "user_username" autoComplete= "username" defaultValue= {this.state.user.username} />
            </div>

            <div className="field">
              <label htmlFor= "user_email">Email*</label>
              <input type="text" name="user[email]" id= "user_email" autoComplete= "email" defaultValue= {this.state.user.email} />
            </div>
          </div>
          <div className= "modify-password">
            <div className="field">
              <label htmlFor= "_current">Password</label>
              {/* <i>(leave blank if you don't want to change it)</i> */}
              <input type="text" name="user[password]" id= "user_password" />
            </div>

            <div className="field">
              <label htmlFor= "user_password_confirmation">Password confirmation</label>
              <input type="text" name="user[password_confirmation]" id= "user_password_confirmation" />
            </div>
          </div>
          <div className= "delete-account">
          <a className= "delete-account-btn button-up" data-confirm="Are you sure" rel="nofollow" data-method="delete">delete</a>
          </div>
          <div className= "validate-modifications">
            <div className="field">
              <label htmlFor= "user_current_password">Password*</label>
              <input type="text" name="user[current_password]" id= "user_current_password" />
            </div>

            <input className= "user-edit-restration" type="submit" name="commit" value="Update" data-disable-with="Update" remote= "true"></input>
          </div>
        </form>
      </div>
    );
  };
}