import {CookieManager} from './cookies_manager'
// console.log("CookieManager")
export class ComparedRacketCookie extends CookieManager {
  constructor(cname, cvalue, ckey, allRackets) { // When a racket checkbox is checked we first retrieve all the cookies and search for the cookie that contains the ids of the rackets displayed in the comparator if it exists.
    super(cname, cvalue, ckey);
  }

  init(rackets) {
    rackets.forEach((racket) => {
      this.racketCookieEvent(racket)
    });
  }

  racketCookieEvent(racket) {
    racket.addEventListener('change', (thisRacketCheckbox) => {
      if (super.cookieExists() === false) { //If the selected_racket cookie doesnt exist, we have to create it
        this.ckey = "racket_id";
        this.cvalue = thisRacketCheckbox.target.value;
        super.createCookie();
      } else if (super.cookieExists() === true) { //If the selected_racket cookie already exists, we get its value, update its value, save it in a newly created selected_racket cookie
        this.update(thisRacketCheckbox.target.value, thisRacketCheckbox.target.checked);
      };
    });
  }

  update(newValue, condition) { // sets the compared racket cookie object to the cookie value, updates its value and save it
    this.ckey = "racket_id";
    this.cvalue = super.getCookieValue().racket_id;
    this.cvalue = super.updateCookieValue(newValue, condition);
    if (this.cvalue.length <= 5) { // this limites the size of the cookie, as we cannot have more than 5 rackets in the comparator, the cookie should'nt be updated with more than 5 racket ids
      super.createCookie();
    };
  }
}

