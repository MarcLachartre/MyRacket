// console.log("racket Search")
import {FetchDatabase} from "../fetch_database/fetch_database"

export class RacketSearch extends FetchDatabase{ //this class creates an object containing the checkboxes and the values of the racket search query so that we can later fetch the database
  constructor(checkboxInputs, searchbar, page_batch, brand, string_pattern, weight, headsize, balance, form_input, quick_search) {
    super();
    this.checkboxInputs = checkboxInputs;
    this.searchbar = searchbar;
    this.page_batch = page_batch;
    this.brand = [];
    this.string_pattern = [];
    this.weight = [];
    this.headsize = [];
    this.balance = [];
    this.search_bar_input = 1;
    this.quick_search = quick_search;
  }

  racketSearchInputs() { //we retrieve first the inputs from the user, these inputs will create the queryObject which will later be used to create the query string in order to fetch the database.
    // console.log("racketSearchInputs")
    this.quick_search = this.searchbar.value;

    this.checkboxInputs.forEach((input) => {
      if (input.checked === true && input.type === "checkbox") {
        switch (input.name) {
          case "brand[]":
          this.brand.push(input.value);
          break;

          case "string_pattern[]":
          this.string_pattern.push(input.value);
          break;

          case "weight[]":
          this.weight.push(input.value);
          break;

          case "headsize[]":
          this.headsize.push(input.value);
          break;

          case "balance[]":
          this.balance.push(input.value);
          break;
        };
      };
    });
  }

  racketFetch() {
    // console.log("racketFetch")
    this.racketSearchInputs();

    const queryObject = JSON.parse(JSON.stringify(this)); //clones "this" so that we can remove unecessary key/values from it and pass it to the Fetchdatabase class
    delete queryObject.searchbar;
    delete queryObject.checkboxInputs;
    delete queryObject.rackets;

    return super.queryAnswer(queryObject);
  }
}
