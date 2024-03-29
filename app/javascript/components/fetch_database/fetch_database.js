// console.log("fetch database")
export class FetchDatabase {
  constructor(){}

  searchQuery(queryObject) { //accepts an object containing ONLY the values which will create the query string for the get request
    console.log('searchQuery')
    let queryString = [];
    for (let key in queryObject) {
      if (typeof queryObject[key] === "object" && queryObject[key] !== undefined) {
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
    // console.log("queryAnswer")
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
    const fetchResponse = await fetch(myRequest, myInit).then(function(res) {
      return res
    });

    const response = fetchResponse.clone()
    return response.json()
  }

  get(url) {
    const getInit = {
      method: "GET",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      }
    }
    const getRequest = new Request(url, getInit);

    const response = fetch(getRequest).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      };
      return response.json()
    });
    return response
  }


  create(url, body){
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    const createInit = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        'X-CSRF-Token': csrf
      },
      body: body
    };

    const createRequest = new Request(url, createInit);

    const response = fetch(createRequest).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response
    })
    return response
  }

  patch(url, body) {
    console.log(url)
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    const patchInit =  {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        'X-CSRF-Token': csrf
      },
      body: body
    };

    const patchRequest = new Request(url, patchInit)
    console.log(patchRequest)
    const response = fetch(patchRequest).then(response => {
      console.log(response)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response
    }).then(response => {
      return response;
    })
    return response;
  }

  destroy(url, body) {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    let deleteInit =  {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        'X-CSRF-Token': csrf
      },
      body: body
    };

    const deleteRequest = new Request(url, deleteInit);

    const response = fetch(deleteRequest).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response
    })
    return response
  }
}
