const selectedRacketCookie = () => { //this function's role is to manage the selected racket cookie in order to ensure comparision persistency on page reload
  // console.log('- selectedRacketCookie')
    // Below, when a racket check box is checked we first retrieve all the cookies and search for the cookie that contains the ids of the rackets displayed in the comparator if it exists.
  let allRackets = document.querySelectorAll('.racket-checkbox');
  allRackets.forEach((racket) => {
    racket.addEventListener('click', (thisRacket) => {
      let decodedCookies = decodeURIComponent(document.cookie);// We get all the cookies and decode it into a string.
      let allDecodedCookies = decodedCookies.split(';'); // We split the different cookies and put them in an array
      const selectedRacket = "selected_racket" + "="; //We want to retrieve the selected_racket cookie

      let racketChecked = [];
      if (decodedCookies.includes(selectedRacket) === false) { //If the selected_racket cookie doesnt exist, we have to create it and push the checked racket into it as an array
        // console.log("-- selected_racket cookie doesn't exist yet");
        document.cookie = 'selected_racket=; expires=Thu, 2 Aug 2001 20:47:11 UTC'

        if (racket.checked == true) {
          racketChecked.push(thisRacket.target.value);
        };

        selectedRacketObj = {"racket_id":racketChecked};
        document.cookie = `selected_racket=${encodeURIComponent(JSON.stringify(selectedRacketObj))}; path=/rackets`;
        // console.log(`-- selected_racket cookie has been created and contains racket id: ${racketChecked}`);

      } else if (decodedCookies.includes(selectedRacket) === true) { //If the selected_racket cookie exists, we have to retrieve it, parse it, push the racket ids in the racketChecked array and add the newly checked rackets in the array. Then we can save the racketChecked array in cookies
        // console.log("-- selected_racket cookie already present");

        for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
          if (allDecodedCookies[i].includes(selectedRacket)) { //If the cookies array contains the selected_rackets cookie
          let selectedRacketCookie = allDecodedCookies[i].trim();
          let selectedRacketObj = JSON.parse(selectedRacketCookie.substring(selectedRacket.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
          document.cookie = 'selected_racket=; expires=Thu, 2 Aug 2001 20:47:11 UTC'; // We delete the selected_racket cookie in order to reassign it later with the new checked racket array
          let racketChecked = selectedRacketObj.racket_id; //We assign the array of racket ids that were in the selected_racket cookie to racketChecked

            if (thisRacket.target.checked == true) {//adding racket to racketChecked array
              // console.log('-- adding racket to racketChecked array');
              racketChecked.push(thisRacket.target.value);

            } else if (thisRacket.target.checked == false) {//removing racket from racketChecked array
              // console.log('-- removing racket from racketChecked array');

              let racketIndex = racketChecked.indexOf(thisRacket.target.value);
              if (racketIndex > -1) {
                racketChecked.splice(racketIndex, 1);
              };
            };
            racketChecked = racketChecked.flat();
            selectedRacketObj = {"racket_id":racketChecked};
            document.cookie = `selected_racket=${encodeURIComponent(JSON.stringify(selectedRacketObj))}; path=/rackets`;// Saving the new racketChecked array into the newly created selected_racket cookie
            // console.log(`-- selected_racket cookie updated with the new racketChecked array ${racketChecked}`);
          };
        };
      };
    });
  });
};

const removeRacketIdFromCookies = (event) => {
  // console.log('- removeRacketIdFromCookies')
  let decodedCookies = decodeURIComponent(document.cookie);// We get all the cookies and decode it into a string.
  let allDecodedCookies = decodedCookies.split(';'); // We split the different cookies and put them in an array
  const selectedRacket = "selected_racket" + "=";

  for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
    if (allDecodedCookies[i].includes(selectedRacket)) { //If the cookies array contains the selected_rackets cookie
      let selectedRacketCookie = allDecodedCookies[i].trim();
      let selectedRacketObj = JSON.parse(selectedRacketCookie.substring(selectedRacket.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
      document.cookie = 'selected_racket=; expires=Thu, 2 Aug 2001 20:47:11 UTC'; // We delete the selected_racket cookie in order to reassign it later with the new checked racket array
      let racketChecked = selectedRacketObj.racket_id; //We assign the array of racket ids that were in the selected_racket cookie to racketChecked

      //removing racket from racketChecked array
      let racketIndex = racketChecked.indexOf(event.target.value);
        if (racketIndex > -1) {
          racketChecked.splice(racketIndex, 1);
        };
      // console.log('-- racket removed from racketChecked array');
      racketChecked = racketChecked.flat();
      selectedRacketObj = {"racket_id":racketChecked};
      document.cookie = `selected_racket=${encodeURIComponent(JSON.stringify(selectedRacketObj))}; path=/rackets`;// Saving the new racketChecked array into the newly created selected_racket cookie
    };
  };
};
