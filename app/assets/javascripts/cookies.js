

const cookieExists = (cname) => {
  const decodedCookies = decodeURIComponent(document.cookie);// We get all the cookies and decode it into a string.
  if (decodedCookies.includes(cname) === false) {
    return false;
  } else {
    return true;
  };
};


const createCookie = (cname, cvalue) => {
  let cookieArray = [];
  cookieArray.push(cvalue);
  cookieArray = cookieArray.flat();
  document.cookie = `${cname}${encodeURIComponent(JSON.stringify({"racket_id":cookieArray}))}; path=/`;
  // console.log(`-- cookie created and contains cookie array: ${cookieArray}`);
};


const getCookieValue = (cname) => {
  const decodedCookies = decodeURIComponent(document.cookie);
  const allDecodedCookies = decodedCookies.split(';');

  for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
    if (allDecodedCookies[i].includes(cname)) { //If the cookies array contains the selected_rackets cookie
    const selectedRacketCookie = allDecodedCookies[i].trim();
    const cvalue = JSON.parse(selectedRacketCookie.substring(cname.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
    return cvalue
    //console.log(`cookie value = ${cvalue}`)
    };
  };
};


const updateCookieValue = (cvalue, newvalue, condition) => {
  if (condition == true) {
    cvalue.push(newvalue);
  } else {
    const index = cvalue.indexOf(newvalue);
    if (index > -1) {
      cvalue.splice(index, 1);
    };
  };
  return cvalue;
  //console.log("cookie value updated")
};



// function removeRacketIdFromCookies(event) {
//    console.log('- removeRacketIdFromCookies')
//   let decodedCookies = decodeURIComponent(document.cookie);// We get all the cookies and decode it into a string.
//   let allDecodedCookies = decodedCookies.split(';'); // We split the different cookies and put them in an array
//   const selectedRacket = "selected_racket" + "=";

//   for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
//     if (allDecodedCookies[i].includes(selectedRacket)) { //If the cookies array contains the selected_rackets cookie
//       let selectedRacketCookie = allDecodedCookies[i].trim();
//       let selectedRacketObj = JSON.parse(selectedRacketCookie.substring(selectedRacket.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
//       document.cookie = 'selected_racket=; expires=Thu, 2 Aug 2001 20:47:11 UTC'; // We delete the selected_racket cookie in order to reassign it later with the new checked racket array
//       let racketChecked = selectedRacketObj.racket_id; //We assign the array of racket ids that were in the selected_racket cookie to racketChecked

//       //removing racket from racketChecked array
//       let racketIndex = racketChecked.indexOf(event.target.value);
//         if (racketIndex > -1) {
//           racketChecked.splice(racketIndex, 1);
//         };
//       // console.log('-- racket removed from racketChecked array');
//       racketChecked = racketChecked.flat();
//       selectedRacketObj = {"racket_id":racketChecked};
//       document.cookie = `selected_racket=${encodeURIComponent(JSON.stringify(selectedRacketObj))}; path=/`;// Saving the new racketChecked array into the newly created selected_racket cookie
//     };
//   };
// };


// if (thisRacket.target.checked == true) {//adding racket to racketChecked array
        //       // console.log('-- adding racket to racketChecked array');
        //   selectedRacketCookie.push(thisRacket.target.value);

        // } else {//removing racket from racketChecked array
        //   // console.log('-- removing racket from racketChecked array');
        //   const racketIndex = selectedRacketCookie.indexOf(thisRacket.target.value);
        //   if (racketIndex > -1) {
        //     selectedRacketCookie.splice(racketIndex, 1);
        //     };
        //     console.log(selectedRacketCookie)
        // };


        // for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
        //   if (allDecodedCookies[i].includes(selectedRacket)) { //If the cookies array contains the selected_rackets cookie
        //   let selectedRacketCookie = allDecodedCookies[i].trim();
        //   let selectedRacketObj = JSON.parse(selectedRacketCookie.substring(selectedRacket.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
        //   document.cookie = 'selected_racket=; expires=Thu, 2 Aug 2001 20:47:11 UTC'; // We delete the selected_racket cookie in order to reassign it later with the new checked racket array
        //   let racketChecked = selectedRacketObj.racket_id; //We assign the array of racket ids that were in the selected_racket cookie to racketChecked

        //     if (thisRacket.target.checked == true) {//adding racket to racketChecked array
        //       // console.log('-- adding racket to racketChecked array');
        //       racketChecked.push(thisRacket.target.value);

        //     } else if (thisRacket.target.checked == false) {//removing racket from racketChecked array
        //       // console.log('-- removing racket from racketChecked array');

        //       let racketIndex = racketChecked.indexOf(thisRacket.target.value);
        //       if (racketIndex > -1) {
        //         racketChecked.splice(racketIndex, 1);
        //       };
        //     };
        //     racketChecked = racketChecked.flat();
        //     selectedRacketObj = {"racket_id":racketChecked};
        //     document.cookie = `selected_racket=${encodeURIComponent(JSON.stringify(selectedRacketObj))}; path=/`;// Saving the new racketChecked array into the newly created selected_racket cookie
        //     console.log(`-- selected_racket cookie updated with the new racketChecked array ${racketChecked}`);
        //   };
        // };


//create cookie
//get cookie
//delete cookie
//update cookie









//on page load:
    // - serveur retrieves de cookie:  if cookie exists => displays the rackets
    // -if cookie doesn't exist => create it
  // - set cookie to be equal to the rackets in the comparator

// on clicks on the rackets the cookie has to be updated:
  // - if cookie contains the racket id => remove it
  // - if cookie doesn't contain the racket id => add it


// document.addEventListener("turbolinks:load", () => {

//   console.log("bite")
//     document.cookie = "selected_racket=; path=/rackets";


// })
// document.addEventListener("turbolinks:load",()=> {
// window.onload = function() {
//  document.cookie = "selected_racket=; path=/";
// }
// });


