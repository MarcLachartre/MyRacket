// class RacketSearchDisplay extends RacketSearch {
//   constructor(checkboxInputs, searchbar, page, rackets) {
//     super(checkboxInputs, searchbar, page);
//     this.rackets = rackets;
//   }

//   async racketsUpdate() { //compares the rackets present with the racket fetched, stores the rackets to remove or to add or to leave, and then adds or remove them.
//     const racketIndexFetch = await super.racketFetch();
//     const racketFetched = racketIndexFetch.rackets;

//     const racketsToAdd = [];
//     const racketsToRemove = [];

//     const racketSearchIdsResult = [];
//     const racketIdsDisplayed = [];

//     const pagesNumber = racketIndexFetch.pages;
//     const racketIdsFetched = racketFetched.map(racket => racket = racket.id);
//     this.rackets.forEach(racket => racketIdsDisplayed.push(Number(racket.dataset.id)));

//     this.rackets.forEach(racket => { // rackets to remove = displayed rackets that are not in the fetched rackets
//       if (racketIdsFetched.includes(Number(racket.dataset.id)) === false) {
//         racketsToRemove.push(racket);
//       };
//     });

//     racketFetched.forEach(racket => { // rackets to add = fetched rackets that are not in the display rackets
//       if (racketIdsDisplayed.includes(racket.id) === false) {
//         racketsToAdd.push(racket);
//       };
//     });

//     this.removeRackets(racketsToRemove);
//     this.addRackets(racketsToAdd);

//     const pagination = new Pagination(this.page, pagesNumber)
//     pagination.initPagination()
//   }

//   addRackets(racketsToAdd) { //This method creates a Racket object and therefore the cards that are the result of the search. First it creates a racket object, then we create the card with the right style. We also add the event listener to each card for it to be properly working (cookie event listener)
//     const racketIdsAdded = [];
//     racketsToAdd.forEach(racketObj => {
//       const racket = new Racket(racketObj.id, racketObj.brand, racketObj.model, racketObj.weight, racketObj.string_pattern, racketObj.balance, racketObj.headsize, racketObj.length, racketObj.swingweight, racketObj.stiffness, racketObj.power, racketObj.manoeuvrability, racketObj.comfort, racketObj.control);
//       const card = racket.createCard(); //this creates the card and adds the listeners to the button (add comparision event listener)

//       if (racket.isAlreadyInComparator(card.querySelector('.racket-checkbox'))) {
//         racket.selectedCardStyle(card.querySelector('.racket-checkbox'));
//       };

//       if (document.querySelectorAll(".compared-racket-checkbox").length >= 10) {
//         racket.disableComparision(card.querySelector('.racket-checkbox'));
//       };
//       this.insertRackets(racketObj.brand, racketObj.model, card);
//     });
//   }

//   removeRackets(racketsToRemove) {
//     const racketIdsToRemove = racketsToRemove.map(racket => racket = racket.id);
//     this.rackets.forEach(racket =>{
//       if (racketIdsToRemove.includes(racket.id)) {
//         racket.closest('.racket-card').remove();
//       };
//     });
//   }

//   insertRackets(brandStr, modelStr, card) { //inserts rackets in the container at the right alphabetical position
//     const racketsInContainer = document.querySelectorAll(".racket-checkbox");
//     const container = document.querySelector(".select-racket");

//     if (racketsInContainer.length === 0) {
//       container.appendChild(card);
//     }

//     const brandModelStr = brandStr.concat(modelStr)
//     for (let i = 0; i < racketsInContainer.length; i++) {
//       const racketStr = racketsInContainer[i].dataset.brand.concat(racketsInContainer[i].dataset.model)
//       if (racketStr.localeCompare(brandModelStr) === 1 || racketStr.localeCompare(brandModelStr) === 0) {
//         container.insertBefore(card, racketsInContainer[i].closest(".racket-card"));
//         break
//       } else {
//         container.appendChild(card);
//       };
//     };
//   }
// }



// class PaginationStyle { //this class applies style to the elements in the pagination container
//   constructor(currentPageBatch, racketBatchAmount) {
//     this.currentPageBatch = currentPageBatch;
//     this.racketBatchAmount = racketBatchAmount;
//   }

//   initOnLoad() {
//     this.previousButton();
//     this.nextButton();
//     this.addStyleOnClick();
//   }

//   init() {
//     this.mouseOver();
//     this.addStyleOnClick();
//     this.nextButton();
//     this.previousButton();
//   }

//   nextButton() {
//     const nextBtn = document.querySelector(".next");
//     // console.log(document.querySelector(".pages").querySelectorAll(".pagination").length)
//     if (document.querySelector(".pages").querySelectorAll(".pagination").length !== 1 && document.querySelector(".pages").querySelectorAll(".pagination").length !== 0 && this.currentPageBatch !== `[${(this.racketBatchAmount-1)*40},40]` && this.racketBatchAmount !== 1) {
//       nextBtn.style.display = "flex";
//         if (this.currentPageBatch !== undefined && this.racketBatchAmount !== undefined ) {
//           nextBtn.dataset.page = `[${(Number(this.currentPageBatch.substring(1, this.currentPageBatch.length - 4))) + 40},40]`;
//         }
//     } else {
//       nextBtn.style.display = "none";
//     }
//   }

//   previousButton() {
//     const previousBtn = document.querySelector(".previous");
//     if (this.currentPageBatch !== "[0,40]" && this.currentPageBatch !== undefined) {
//       previousBtn.style.display = "flex";
//       previousBtn.dataset.page = `[${(Number(this.currentPageBatch.substring(1, this.currentPageBatch.length - 4))) - 40},40]`;
//     } else {
//       previousBtn.style.display = "none";
//     }
//   }

//   mouseOver() {
//     document.querySelectorAll(".pagination").forEach(page => {
//       page.addEventListener('mouseenter', () => {
//          page.style.cursor = "pointer";
//          page.style.textDecoration = "underline";
//       });
//       page.addEventListener('mouseout', () => {
//          page.style.cursor = "pointer";
//          page.style.textDecoration = "none";
//       });

//     });
//   }

//   addStyleOnClick() {
//     document.querySelector(".page-list-container").querySelectorAll('[data-page]').forEach(page => {
//       page.classList.remove("selected-page");
//       if (page.dataset.page === this.currentPageBatch) {
//         page.classList.add("selected-page");
//       } else if (this.currentPageBatch === undefined || this.currentPageBatch === []) {
//         document.querySelector(".page-list-container").querySelector('[data-page]').classList.add("selected-page");
//       };
//     });
//   }
// }


// class Pagination extends PaginationStyle { // this class manages the links to the next page of rackets.
//   constructor(currentPageBatch, racketBatchAmount) {
//     super(currentPageBatch, racketBatchAmount);
//   }

//   createPageLink(i) {
//     const link = document.createElement('a');
//     link.className = "pagination";
//     link.dataset.page = `[${(i-1)*40},40]`;
//     link.innerHTML = i;
//     link.addEventListener('click', () => {
//       event.preventDefault()
//       const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
//       const searchField = document.querySelector(".type-search");
//       const racketsInContainer = document.querySelectorAll('.racket-checkbox');

//       const search = new RacketSearchDisplay(searchbarCheckboxes, '', event.target.dataset.page, racketsInContainer);
//       search.racketsUpdate();
//     });
//     document.querySelector(".pages").appendChild(link);
//   }

//   addPaginationDots(element) {
//     const dots = document.createElement("div");
//     dots.className = 'pagination-dots';
//     dots.innerHTML = '...';
//     document.querySelector(".pages").appendChild(dots)
//   }

//   initPagination() {
//     let i = 1
//     document.querySelectorAll(".pagination").forEach(link => {
//       link.remove();
//     });
//     document.querySelectorAll('.pagination-dots').forEach(dots => {dots.remove()});
//     if (this.racketBatchAmount <= 9) {
//       while (i <= this.racketBatchAmount) {
//         this.createPageLink(i)
//         i++
//       };
//     } else {

//       for (let i = 1; i <= 2; i++) {
//         this.createPageLink(i)

//       };
//       switch (String(this.currentPageBatch)) {
//         case "[0,40]":
//         this.addPaginationDots();
//         break

//         case "[40,40]":
//           for (let i = 3; i <= 4; i++) {
//             this.createPageLink(i)
//           };
//           this.addPaginationDots();
//         break

//         case "[80,40]":
//           for (let i = 3; i <= 5; i++) {
//             this.createPageLink(i)
//           };
//           this.addPaginationDots();
//         break

//         case "[120,40]":
//           for (let i = 3; i <= 6; i++) {
//             this.createPageLink(i)
//           };
//           this.addPaginationDots();
//         break

//         case "[160,40]":
//           for (let i = 3; i <= 7; i++) {
//             this.createPageLink(i)
//           };
//           this.addPaginationDots();
//         break

//         case `[${(this.racketBatchAmount-4)*40},40]`:
//           this.addPaginationDots();
//           for (let i = (this.racketBatchAmount - 6); i <= this.racketBatchAmount-2; i++) {
//             this.createPageLink(i);
//           };
//         break

//         case `[${(this.racketBatchAmount-3)*40},40]`:
//           this.addPaginationDots();
//           for (let i = (this.racketBatchAmount - 5); i <= this.racketBatchAmount-2; i++) {
//             this.createPageLink(i);
//           };
//         break

//         case `[${(this.racketBatchAmount-2)*40},40]`:
//           this.addPaginationDots();
//           for (let i = (this.racketBatchAmount - 4); i <= this.racketBatchAmount-2; i++) {
//             this.createPageLink(i);
//           };
//         break

//         case `[${(this.racketBatchAmount-1)*40},40]`:
//           this.addPaginationDots();
//           for (let i = (this.racketBatchAmount - 3); i <= this.racketBatchAmount-2; i++) {
//             this.createPageLink(i);
//           };
//         break

//         case `[${(this.racketBatchAmount)*40},40]`:
//           this.addPaginationDots();
//         break

//         default:
//         if (this.currentPageBatch !== undefined) {
//         const currentPage = (Number(this.currentPageBatch.substring(1, this.currentPageBatch.length - 4))/40)+1;

//         2 !== (currentPage - 3) ? this.addPaginationDots() : false;
//           for (let i = currentPage - 2; i <= currentPage + 2; i++) {
//             this.createPageLink(i);
//           };
//           ((this.racketBatchAmount - 2) !== (currentPage + 2)) ? this.addPaginationDots() : false
//         } else {
//           this.addPaginationDots()
//         };

//         break
//       };

//       for (let i = (this.racketBatchAmount - 1); i <= this.racketBatchAmount; i++) {
//         this.createPageLink(i);
//       };
//     };
//     super.init()
//   }
// }



