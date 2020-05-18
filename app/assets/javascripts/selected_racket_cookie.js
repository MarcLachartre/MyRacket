const selectedRacketCookie = () => { //this function's role is to manage the selected racket cookie in order to ensure comparision persistency on page reload/navigation
  const allRackets = document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox'); // When a racket checkbox is checked we first retrieve all the cookies and search for the cookie that contains the ids of the rackets displayed in the comparator if it exists.
  allRackets.forEach((racket) => {
    racket.addEventListener('click', (thisRacket) => {
      const selectedRacket = "selected_racket" + "="; //We want to retrieve the selected_racket cookie

      if (cookieExists(selectedRacket) === false) { //If the selected_racket cookie doesnt exist, we have to create it and push the checked racket into it as an array
        createCookie(selectedRacket, thisRacket.target.id);

      } else { //If the selected_racket cookie already exists, we have to get its value, update its value, save it in a newly created selected_racket cookie
        const selectedRacketCookieValue = getCookieValue(selectedRacket).racket_id;
        const newCookieValue = updateCookieValue(selectedRacketCookieValue, thisRacket.target.value, thisRacket.target.checked);
        createCookie(selectedRacket, newCookieValue);
      };
    });
  });
};

const updateSelectedRacketCookie = (newValue, condition) => {
  const cookieValue = getCookieValue("selected_racket" + "=").racket_id;
  const newCookieValue = updateCookieValue(cookieValue, newValue, condition);
  createCookie("selected_racket" + "=", newCookieValue);
};
