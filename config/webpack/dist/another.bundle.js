/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/components/search_function/searchbar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/components/fetch_database/fetch_database.js":
/*!********************************************************************!*\
  !*** ./app/javascript/components/fetch_database/fetch_database.js ***!
  \********************************************************************/
/*! exports provided: FetchDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchDatabase\", function() { return FetchDatabase; });\nclass FetchDatabase {\n  constructor(){}\n\n  searchQuery(queryObject) { //accepts an object containing ONLY the values which will create the query string for the get request\n    let queryString = [];\n    for (let key in queryObject) {\n      if (typeof queryObject[key] === \"object\" && queryObject[key] !== undefined) {\n        queryObject[key].map(x => {\n          x = encodeURIComponent(key + \"[]\") + \"=\" + x;\n          queryString.push(x);\n        });\n\n      } else if (queryObject[key] !== undefined && queryObject[key] !== \"\" && typeof queryObject[key] !== \"object\") {\n        const y = encodeURIComponent(key) + \"=\" + encodeURIComponent(queryObject[key]);\n        queryString.push(y)\n      };\n    };\n    queryString = queryString.join(\"&\");\n\n    return queryString\n  }\n\n  async queryAnswer(queryObject) { //digest the query object, does a fetch request by transforming the queryobject in a query string, and sends back a json response.\n    const queryString = this.searchQuery(queryObject)\n\n    const url = new URL(`${window.location.origin}` + `${window.location.pathname}`);\n    url.search = new URLSearchParams(queryString);\n    let myInit =  {\n      method: 'GET',\n      headers : {\n        \"Content-Type\": 'application/json',\n        \"Accept\": 'application/json',\n      },\n    };\n\n    const myRequest = new Request(url, myInit);\n    const fetchResponse = await fetch(myRequest, myInit).then(function(res) {\n      return res\n    });\n\n    const response = fetchResponse.clone()\n    return response.json()\n  }\n\n  get(url) {\n    const getInit = {\n      method: \"GET\",\n      headers: {\n        \"Content-Type\": 'application/json',\n        \"Accept\": 'application/json',\n      }\n    }\n    const getRequest = new Request(url, getInit);\n\n    const response = fetch(getRequest).then(response => {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      };\n      return response.json()\n    });\n    return response\n  }\n\n\n  create(url, body){\n    const csrf = document.querySelector(\"meta[name='csrf-token']\").getAttribute(\"content\");\n\n    const createInit = {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": 'application/json',\n        \"Accept\": 'application/json',\n        'X-CSRF-Token': csrf\n      },\n      body: body\n    };\n\n    const createRequest = new Request(url, createInit);\n\n    const response = fetch(createRequest).then(response => {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n      return response\n    })\n    return response\n  }\n\n  patch(url, body) {\n    console.log(url)\n    const csrf = document.querySelector(\"meta[name='csrf-token']\").getAttribute(\"content\");\n\n    const patchInit =  {\n      method: 'PATCH',\n      headers: {\n        \"Content-Type\": 'application/json',\n        \"Accept\": 'application/json',\n        'X-CSRF-Token': csrf\n      },\n      body: body\n    };\n\n    const patchRequest = new Request(url, patchInit)\n\n    const response = fetch(patchRequest).then(response => {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n      return response\n    }).then(response => {\n      return response;\n    })\n    return response;\n  }\n\n  destroy(url) {\n    const csrf = document.querySelector(\"meta[name='csrf-token']\").getAttribute(\"content\");\n    let deleteInit =  {\n      method: 'DELETE',\n      headers: {\n        \"Content-Type\": 'application/json',\n        \"Accept\": 'application/json',\n        'X-CSRF-Token': csrf\n      }\n    };\n\n    const deleteRequest = new Request(url, deleteInit);\n\n    const response = fetch(deleteRequest).then(function(response) {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n    }).then(function(response) {\n      console.log(\"ok\");\n      return response;\n    }).catch(function(error) {\n        console.log(error);\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./app/javascript/components/fetch_database/fetch_database.js?");

/***/ }),

/***/ "./app/javascript/components/search_function/racket_search.js":
/*!********************************************************************!*\
  !*** ./app/javascript/components/search_function/racket_search.js ***!
  \********************************************************************/
/*! exports provided: RacketSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RacketSearch\", function() { return RacketSearch; });\n/* harmony import */ var _fetch_database_fetch_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch_database/fetch_database */ \"./app/javascript/components/fetch_database/fetch_database.js\");\n\n\nclass RacketSearch extends _fetch_database_fetch_database__WEBPACK_IMPORTED_MODULE_0__[\"FetchDatabase\"]{ //this class creates an object containing the checkboxes and the values of the racket search query so that we can later fetch the database\n  constructor(checkboxInputs, searchbar, page, brand, string_pattern, weight, headsize, balance, form_input, model) {\n    super();\n    this.checkboxInputs = checkboxInputs;\n    this.searchbar = searchbar;\n    this.page = page;\n    this.brand = [];\n    this.string_pattern = [];\n    this.weight = [];\n    this.headsize = [];\n    this.balance = [];\n    this.search_bar_input = 1;\n    this.model = model;\n  }\n\n  racketSearchInputs() { //we retrieve first the inputs from the user, these inputs will create the queryObject which will later be used to create the query string in order to fetch the database.\n    this.model = this.searchbar.value;\n\n    this.checkboxInputs.forEach((input) => {\n      if (input.checked === true && input.type === \"checkbox\") {\n        switch (input.name) {\n          case \"brand[]\":\n          this.brand.push(input.value);\n          break;\n\n          case \"string_pattern[]\":\n          this.string_pattern.push(input.value);\n          break;\n\n          case \"weight[]\":\n          this.weight.push(input.value);\n          break;\n\n          case \"headsize[]\":\n          this.headsize.push(input.value);\n          break;\n\n          case \"balance[]\":\n          this.balance.push(input.value);\n          break;\n        };\n      };\n    });\n  }\n\n  racketFetch() {\n    this.racketSearchInputs();\n\n    const queryObject = JSON.parse(JSON.stringify(this)); //clones \"this\" so that we can remove unecessary key/values from it and pass it to the Fetchdatabase class\n    delete queryObject.searchbar;\n    delete queryObject.checkboxInputs;\n    delete queryObject.rackets;\n\n    return super.queryAnswer(queryObject);\n  }\n}\n\n\n//# sourceURL=webpack:///./app/javascript/components/search_function/racket_search.js?");

/***/ }),

/***/ "./app/javascript/components/search_function/racket_search_display.js":
/*!****************************************************************************!*\
  !*** ./app/javascript/components/search_function/racket_search_display.js ***!
  \****************************************************************************/
/*! exports provided: RacketSearchDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RacketSearchDisplay\", function() { return RacketSearchDisplay; });\n/* harmony import */ var _racket_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./racket_search */ \"./app/javascript/components/search_function/racket_search.js\");\nconsole.log(\"RacketSearckDisplay\")\n\n\nclass RacketSearchDisplay extends _racket_search__WEBPACK_IMPORTED_MODULE_0__[\"RacketSearch\"] {\n  constructor(checkboxInputs, searchbar, page, rackets) {\n    super(checkboxInputs, searchbar, page);\n    this.rackets = rackets;\n  }\n\n  async racketsUpdate() { //compares the rackets present with the racket fetched, stores the rackets to remove or to add or to leave, and then adds or remove them.\n    console.log(\"cul\")\n    const racketIndexFetch = await super.racketFetch();\n    const racketFetched = racketIndexFetch.rackets;\n\n    const racketsToAdd = [];\n    const racketsToRemove = [];\n\n    const racketSearchIdsResult = [];\n    const racketIdsDisplayed = [];\n\n    const pagesNumber = racketIndexFetch.pages;\n    const racketIdsFetched = racketFetched.map(racket => racket = racket.id);\n    this.rackets.forEach(racket => racketIdsDisplayed.push(Number(racket.dataset.id)));\n\n    this.rackets.forEach(racket => { // rackets to remove = displayed rackets that are not in the fetched rackets\n      if (racketIdsFetched.includes(Number(racket.dataset.id)) === false) {\n        racketsToRemove.push(racket);\n      };\n    });\n\n    racketFetched.forEach(racket => { // rackets to add = fetched rackets that are not in the display rackets\n      if (racketIdsDisplayed.includes(racket.id) === false) {\n        racketsToAdd.push(racket);\n      };\n    });\n\n    this.removeRackets(racketsToRemove);\n    this.addRackets(racketsToAdd);\n\n    const pagination = new Pagination(this.page, pagesNumber)\n    pagination.initPagination()\n  }\n\n  addRackets(racketsToAdd) { //This method creates a Racket object and therefore the cards that are the result of the search. First it creates a racket object, then we create the card with the right style. We also add the event listener to each card for it to be properly working (cookie event listener)\n    const racketIdsAdded = [];\n    racketsToAdd.forEach(racketObj => {\n      const racket = new Racket(racketObj.id, racketObj.brand, racketObj.model, racketObj.weight, racketObj.string_pattern, racketObj.balance, racketObj.headsize, racketObj.length, racketObj.swingweight, racketObj.stiffness, racketObj.power, racketObj.manoeuvrability, racketObj.comfort, racketObj.control);\n      const card = racket.createCard(); //this creates the card and adds the listeners to the button (add comparision event listener)\n\n      if (racket.isAlreadyInComparator(card.querySelector('.racket-checkbox'))) {\n        racket.selectedCardStyle(card.querySelector('.racket-checkbox'));\n      };\n\n      if (document.querySelectorAll(\".compared-racket-checkbox\").length >= 10) {\n        racket.disableComparision(card.querySelector('.racket-checkbox'));\n      };\n      this.insertRackets(racketObj.brand, racketObj.model, card);\n    });\n  }\n\n  removeRackets(racketsToRemove) {\n    const racketIdsToRemove = racketsToRemove.map(racket => racket = racket.id);\n    this.rackets.forEach(racket =>{\n      if (racketIdsToRemove.includes(racket.id)) {\n        racket.closest('.racket-card').remove();\n      };\n    });\n  }\n\n  insertRackets(brandStr, modelStr, card) { //inserts rackets in the container at the right alphabetical position\n    const racketsInContainer = document.querySelectorAll(\".racket-checkbox\");\n    const container = document.querySelector(\".select-racket\");\n\n    if (racketsInContainer.length === 0) {\n      container.appendChild(card);\n    }\n\n    const brandModelStr = brandStr.concat(modelStr)\n    for (let i = 0; i < racketsInContainer.length; i++) {\n      const racketStr = racketsInContainer[i].dataset.brand.concat(racketsInContainer[i].dataset.model)\n      if (racketStr.localeCompare(brandModelStr) === 1 || racketStr.localeCompare(brandModelStr) === 0) {\n        container.insertBefore(card, racketsInContainer[i].closest(\".racket-card\"));\n        break\n      } else {\n        container.appendChild(card);\n      };\n    };\n  }\n}\n\n\n\n//# sourceURL=webpack:///./app/javascript/components/search_function/racket_search_display.js?");

/***/ }),

/***/ "./app/javascript/components/search_function/searchbar.js":
/*!****************************************************************!*\
  !*** ./app/javascript/components/search_function/searchbar.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Searchbar; });\n/* harmony import */ var _racket_search_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./racket_search_display */ \"./app/javascript/components/search_function/racket_search_display.js\");\nconsole.log(\"SearchBar\")\n\n\n\nclass Searchbar { // This class's role is to manage the checkbox click event and to be the ochestrator of search through and filter rackets. It also initiates the pagination as the search function makes the amount of rackets vary.\n  constructor() {\n    this.searchField = document.querySelector(\".type-search\");\n  }\n\n  init() {\n    this.initSearchbar();\n    this.clearSearch();\n    this.initPagination();\n  }\n\n  async displaySearch(searchbarCheckboxes, searchField, page) {\n    const racketsInContainer = document.querySelectorAll('.racket-checkbox');\n    const search = await new _racket_search_display__WEBPACK_IMPORTED_MODULE_0__[\"RacketSearchDisplay\"](searchbarCheckboxes, searchField, page, racketsInContainer);\n    await search.racketsUpdate();\n    const pagination = new PaginationStyle();\n    pagination.initOnLoad();\n  }\n\n  initSearchbar() { //this inits the search function of the app. It creates a RacketSearchDisplay objects which will display the rackets the user is searching for. The racket search is async (fetch db).\n    const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');\n    this.searchField.addEventListener('keypress', (event) => {\n      if (event.key === 'Enter') {\n        this.displaySearch([], this.searchField, \"[0,40]\");\n      };\n    });\n\n    searchbarCheckboxes.forEach(checkbox => {\n      checkbox.addEventListener('change', () => {\n        this.displaySearch(searchbarCheckboxes, '',  \"[0,40]\");\n      });\n    });\n  }\n\n  clearSearch() { //this function removes all the checked checkboxes and reinitialize the racket search (racket container will contain all rackets)\n    document.querySelector('.clear-search').addEventListener('click', (event) => {\n      event.preventDefault();\n\n      const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');\n      searchbarCheckboxes.forEach(checkbox => {\n        checkbox.checked = false;\n      });\n      this.displaySearch(searchbarCheckboxes, \"\");\n    });\n  }\n\n  initPagination() { //this function allows the user to go to the next page (actually it removes the rackets in container and loads the 40 rackets corresponding)\n    const pagination = new PaginationStyle();\n    pagination.initOnLoad();\n\n    document.querySelectorAll('.pagination, .next, .previous').forEach(page => {\n      page.addEventListener('click', event => {\n        event.preventDefault();\n        const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');\n        const searchField = document.querySelector(\".type-search\");\n        const racketsInContainer = document.querySelectorAll('.racket-checkbox');\n\n        const search = new _racket_search_display__WEBPACK_IMPORTED_MODULE_0__[\"RacketSearchDisplay\"](searchbarCheckboxes, '', event.target.dataset.page, racketsInContainer);\n        search.racketsUpdate();\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./app/javascript/components/search_function/searchbar.js?");

/***/ })

/******/ });