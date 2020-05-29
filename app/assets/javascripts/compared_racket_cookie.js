class ComparedRacketCookie extends CookieManager {
  constructor(cname, cvalue, options = {}) { // When a racket checkbox is checked we first retrieve all the cookies and search for the cookie that contains the ids of the rackets displayed in the comparator if it exists.
    super(cname, cvalue);
    this.allRackets = options.allRackets || document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox');
  }

  init() {
    this.allRackets.forEach((racket) => {
        racket.addEventListener('click', (thisRacketCheckbox) => {
        if (super.cookieExists() === false) { //If the selected_racket cookie doesnt exist, we have to create it
          this.cvalue = thisRacketCheckbox.target.value
          super.createCookie();

        } else { //If the selected_racket cookie already exists, we get its value, update its value, save it in a newly created selected_racket cookie
          this.update(thisRacketCheckbox.target.value, thisRacketCheckbox.target.checked)
        };
      });
    });
  }

  update(newValue, condition) {
    this.cvalue = super.getCookieValue().racket_id;
    super.updateCookieValue(newValue, condition);
    super.createCookie();
  }
}





// const selectedRacketCookie = () => { //this function's role is to manage the selected racket cookie in order to ensure comparision persistency on page reload/navigation
//   const allRackets = document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox'); // When a racket checkbox is checked we first retrieve all the cookies and search for the cookie that contains the ids of the rackets displayed in the comparator if it exists.
//   allRackets.forEach((racket) => {
//     racket.addEventListener('click', (thisRacket) => {
//       const selectedRacket = "selected_racket" + "="; //We want to retrieve the selected_racket cookie
//       const cookie = new CookieManager(selectedRacket)
//       if (cookie.cookieExists() === false) { //If the selected_racket cookie doesnt exist, we have to create it and push the checked racket into it as an array
//         cookie.createCookie();

//       } else { //If the selected_racket cookie already exists, we have to get its value, update its value, save it in a newly created selected_racket cookie

//         const selectedRacketCookieValue = cookie.getCookieValue().racket_id;
//         cookie.cvalue = selectedRacketCookieValue
//         //console.log(selectedRacketCookieValue)
//         const newCookieValue = cookie.updateCookieValue(thisRacket.target.value, thisRacket.target.checked);

//         cookie.createCookie();
//       };
//     });
//   });
// };

// const updateSelectedRacketCookie = (newValue, condition) => {
//   const cookieValue = getCookieValue("selected_racket" + "=").racket_id;
//   const newCookieValue = updateCookieValue(cookieValue, newValue, condition);
//   createCookie("selected_racket" + "=", newCookieValue);
// };
