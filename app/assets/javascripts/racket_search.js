class RacketSearch extends FetchDatabase{ //this class creates an object containing the checkboxes and the values of the racket search query so that we can later fetch the database
  constructor(checkboxInputs, searchbar, brand, adult, kid, string_pattern, form_input, model) {
    super();
    this.checkboxInputs = checkboxInputs;
    this.searchbar = searchbar;
    this.brand = [];
    this.adult = adult;
    this.kid = kid;
    this.string_pattern = [];
    this.form_input = 1;
    this.model = model;
  }

  racketSearchInputs() { //we retrieve first the inputs from the user, these inputs will create the queryObject which will later be used to create the query string in order to fetch the database.
    if (this.searchbar.value !== undefined) {
      this.model = this.searchbar.value;
    }

    this.checkboxInputs.forEach((input) => {
      if (input.checked === true && input.type === "checkbox") {
        switch (input.name) {
          case "brand[]":
          this.brand.push(input.value);
          break;

          case "adult":
          this.adult = input.value;
          break;

          case "kid":
          this.kid = input.value;
          break;

          case "string_pattern[]":
          this.string_pattern.push(input.value);
          break;
        };
      };
    });
  }

  racketFetch() {
    this.racketSearchInputs();
    const queryObject = JSON.parse(JSON.stringify(this)); //clones "this" so that we can remove unecessary key/values from it and pass it to the Fetchdatabase class
    delete queryObject.searchbar;
    delete queryObject.checkboxInputs;
    delete queryObject.rackets;
    return super.queryAnswer(queryObject);
  }
}
