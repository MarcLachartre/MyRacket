class FetchDatabase {
  constructor(){}

  searchQuery(queryObject) { //accepts an object containing ONLY the values which will create the query string for the get request
    let queryString = [];
    // console.log(queryObject)
    for (let key in queryObject) {
      if (typeof queryObject[key] === "object" && queryObject[key] !== undefined) {
        // console.log(queryObject[key])
        queryObject[key].map(x => {
          x = encodeURIComponent(key + "[]") + "=" + x;
          queryString.push(x);
        });
      } else if (queryObject[key] !== undefined && queryObject[key] !== "" && typeof queryObject[key] !== "object") {
        const y = encodeURIComponent(key) + "=" + encodeURIComponent(queryObject[key]);
        queryString.push(y)
      };
    };
    queryString = queryString.join("&");
    return queryString
  }

  async queryAnswer(queryObject) { //digest the query object, does a fetch request by transforming the queryobject in a query string, and sends back a json response.
    const queryString = this.searchQuery(queryObject)
    const url = new URL(`${window.location.origin}` + `${window.location.pathname}`);
    url.search = new URLSearchParams(queryString);
    let myInit =  {
      method: 'GET',
      headers : {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      },
    };

    const myRequest = new Request(url, myInit);
    const response = await fetch(myRequest, myInit);
    const data = await response.json();
    return data
  }
}
