class FetchDatabase {
  constructor(){}

  searchQuery(queryObject) { //accepts an object containing ONLY the values which will create the query string for the get request
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

    const response = fetch(patchRequest).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response
    }).then(response => {
      return response;
    })
    return response;
  }

  destroy(url) {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    let deleteInit =  {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        'X-CSRF-Token': csrf
      }
    };

    const deleteRequest = new Request(url, deleteInit);

    const response = fetch(deleteRequest).then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
    }).then(function(response) {
      console.log("ok");
      return response;
    }).catch(function(error) {
        console.log(error);
    });
  }
}
