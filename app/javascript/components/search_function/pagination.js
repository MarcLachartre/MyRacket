import {PaginationStyle, RacketSearchDisplay} from "./search_function_file_manager"

export class Pagination extends PaginationStyle { // this class manages the links to the next page of rackets.
  constructor(currentPageBatch, racketBatchAmount) {
    super(currentPageBatch, racketBatchAmount);
  }

  createPageLink(i) {
    const link = document.createElement('a');
    link.className = "pagination";
    link.dataset.pageBatch = `[${(i-1)*40},40]`;
    link.innerHTML = i;
    link.addEventListener('click', (event) => {
      const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
      const searchField = document.querySelector(".type-search");
      const racketsInContainer = document.querySelectorAll('.racket-checkbox');
      console.log(event.target.dataset.pageBatch)
      const search = new RacketSearchDisplay(searchbarCheckboxes, '', event.target.dataset.pageBatch, racketsInContainer);
      search.racketsUpdate();
    });
    document.querySelector(".pages").appendChild(link);
  }

  addPaginationDots(element) {
    const dots = document.createElement("div");
    dots.className = 'pagination-dots';
    dots.innerHTML = '...';
    document.querySelector(".pages").appendChild(dots)
  }

  initPagination() {
    let i = 1
    document.querySelectorAll(".pagination").forEach(link => {
      link.remove();
    });
    document.querySelectorAll('.pagination-dots').forEach(dots => {dots.remove()});
    if (this.racketBatchAmount <= 9) {
      while (i <= this.racketBatchAmount) {
        this.createPageLink(i)
        i++
      };
    } else {

      for (let i = 1; i <= 2; i++) {
        this.createPageLink(i)

      };
      switch (String(this.currentPageBatch)) {
        case "[0,40]":
        this.addPaginationDots();
        break

        case "[40,40]":
          for (let i = 3; i <= 4; i++) {
            this.createPageLink(i)
          };
          this.addPaginationDots();
        break

        case "[80,40]":
          for (let i = 3; i <= 5; i++) {
            this.createPageLink(i)
          };
          this.addPaginationDots();
        break

        case "[120,40]":
          for (let i = 3; i <= 6; i++) {
            this.createPageLink(i)
          };
          this.addPaginationDots();
        break

        case "[160,40]":
          for (let i = 3; i <= 7; i++) {
            this.createPageLink(i)
          };
          this.addPaginationDots();
        break

        case `[${(this.racketBatchAmount-4)*40},40]`:
          this.addPaginationDots();
          for (let i = (this.racketBatchAmount - 6); i <= this.racketBatchAmount-2; i++) {
            this.createPageLink(i);
          };
        break

        case `[${(this.racketBatchAmount-3)*40},40]`:
          this.addPaginationDots();
          for (let i = (this.racketBatchAmount - 5); i <= this.racketBatchAmount-2; i++) {
            this.createPageLink(i);
          };
        break

        case `[${(this.racketBatchAmount-2)*40},40]`:
          this.addPaginationDots();
          for (let i = (this.racketBatchAmount - 4); i <= this.racketBatchAmount-2; i++) {
            this.createPageLink(i);
          };
        break

        case `[${(this.racketBatchAmount-1)*40},40]`:
          this.addPaginationDots();
          for (let i = (this.racketBatchAmount - 3); i <= this.racketBatchAmount-2; i++) {
            this.createPageLink(i);
          };
        break

        case `[${(this.racketBatchAmount)*40},40]`:
          this.addPaginationDots();
        break

        default:
        if (this.currentPageBatch !== undefined) {
        const currentPage = (Number(this.currentPageBatch.substring(1, this.currentPageBatch.length - 4))/40)+1;

        2 !== (currentPage - 3) ? this.addPaginationDots() : false;
          for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            this.createPageLink(i);
          };
          ((this.racketBatchAmount - 2) !== (currentPage + 2)) ? this.addPaginationDots() : false
        } else {
          this.addPaginationDots()
        };

        break
      };

      for (let i = (this.racketBatchAmount - 1); i <= this.racketBatchAmount; i++) {
        this.createPageLink(i);
      };
    };
    super.init()
  }
}



