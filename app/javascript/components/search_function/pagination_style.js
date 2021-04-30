// console.log("Pagination")

export class PaginationStyle { //this class applies style to the elements in the pagination container
  constructor(currentPageBatch, racketBatchAmount) {
    this.currentPageBatch = currentPageBatch;
    this.racketBatchAmount = racketBatchAmount;
  }

  initOnLoad() {
    this.previousButton();
    this.nextButton();
    this.addStyleOnClick();
  }

  init() {
    this.mouseOver();
    this.addStyleOnClick();
    this.nextButton();
    this.previousButton();
  }

  nextButton() {
    const nextBtn = document.querySelector(".next");
    // console.log(document.querySelector(".pages").querySelectorAll(".pagination").length)
    if (document.querySelector(".pages").querySelectorAll(".pagination").length !== 1 && document.querySelector(".pages").querySelectorAll(".pagination").length !== 0 && this.currentPageBatch !== `[${(this.racketBatchAmount-1)*40},40]` && this.racketBatchAmount !== 1) {
      nextBtn.style.display = "flex";
        if (this.currentPageBatch !== undefined && this.racketBatchAmount !== undefined ) {
          nextBtn.dataset.pageBatch = `[${(Number(this.currentPageBatch.substring(1, this.currentPageBatch.length - 4))) + 40},40]`;
        }
    } else {
      nextBtn.style.display = "none";
    }
  }

  previousButton() {
    const previousBtn = document.querySelector(".previous");
    if (this.currentPageBatch !== "[0,40]" && this.currentPageBatch !== undefined) {
      previousBtn.style.display = "flex";
      previousBtn.dataset.pageBatch = `[${(Number(this.currentPageBatch.substring(1, this.currentPageBatch.length - 4))) - 40},40]`;
    } else {
      previousBtn.style.display = "none";
    }
  }

  mouseOver() {
    document.querySelectorAll(".pagination").forEach(page => {
      page.addEventListener('mouseenter', () => {
         page.style.cursor = "pointer";
         page.style.textDecoration = "underline";
      });
      page.addEventListener('mouseout', () => {
         page.style.cursor = "pointer";
         page.style.textDecoration = "none";
      });

    });
  }

  addStyleOnClick() {
    document.querySelector(".page-list-container").querySelectorAll('[data-page-batch]').forEach(page => {
      // console.log(page.classList.contains("selected-page"))
      // console.log(page.dataset.pageBatch)
      // console.log(this.currentPageBatch)
      // if (page.classList.contains("selected-page")) {
      //   page.classList.remove("selected-page")
      // }
      
      // page.classList.remove("selected-page");
      // console.log(page.classList.remove("selected-page"))

      if (page.dataset.pageBatch === this.currentPageBatch) {
        page.classList.add("selected-page");
      } else if (this.currentPageBatch === undefined || this.currentPageBatch === []) {
        document.querySelector(".page-list-container").querySelector('[data-page-batch]').classList.add("selected-page");
      };
    });
  }
}

