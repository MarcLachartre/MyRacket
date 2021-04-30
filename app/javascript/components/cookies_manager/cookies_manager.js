export class CookieManager {
  constructor(cname, cvalue, ckey) {
    this.cname = cname;
    this.cvalue = cvalue;
    this.ckey = ckey
  }

  cookieExists() {
    const decodedCookies = decodeURIComponent(document.cookie);// We get all the cookies and decode it into a string.
    if (decodedCookies.includes(this.cname) === false) {
      return false;
    } else {
      return true;
    };
  }

  createCookie() { //all cookies are created thanks to this function, please note that all values are stored in an array that will be stored in the cookie
    let cookieArray = [];
    cookieArray.push(this.cvalue);
    cookieArray = cookieArray.flat();
    const cookieObj = {"key":cookieArray};
    const keys = Object.keys(cookieObj);
    cookieObj[this.ckey] = cookieObj[keys[0]];
    delete cookieObj[keys[0]];

    document.cookie = `${this.cname}${encodeURIComponent(JSON.stringify(cookieObj))}; expires= 4 Jun 2091 07:45:00 GMT ;path=/`;
    console.log(`-- cookie created and contains cookie array: ${cookieArray}`);
  }

  getCookieValue() {
    const decodedCookies = decodeURIComponent(document.cookie);
    const allDecodedCookies = decodedCookies.split(';');
    console.log(document.cookie.name)
    for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
      if (allDecodedCookies[i].includes(this.cname)) { //If the cookies array contains the cname cookie
        const selectedRacketCookie = allDecodedCookies[i].trim();
      this.cvalue = JSON.parse(selectedRacketCookie.substring(this.cname.length)); //We parse the cname cookie into an object containing what interests us: the array of values saved in the cookie
      return this.cvalue
    };
  };
}

  updateCookieValue(newvalue, condition) { //this function, depending on truthy or falsy condition, will add or remove the value of the cookie
    if (condition == true) {
      this.cvalue.push(newvalue);
    } else {
      const index = this.cvalue.indexOf(newvalue);
      if (index > -1) {
        this.cvalue.splice(index, 1);
      };
    };
    console.log(`-- cookie value updated with: ${this.cvalue}`);
    return this.cvalue;
  }
}
