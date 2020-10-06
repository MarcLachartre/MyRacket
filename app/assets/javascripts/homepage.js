class HomepageTennisCourt{
  constructor(welcomeMessage) {
    this.welcomeMessage = fadeIn(document.querySelector('.home-link-container'), 10, 0.01);
  }

  init() {
    const courtElements = this.initCourtSquares();
    this.expandCourt(courtElements);
  }

  initCourtSquares() {
    const leftExteriorLines = new ExpandSquare(document.querySelector('.left-tennis-court'), 0, 50, 0, 0, 15); //15
    const rightExteriorLines = new ExpandSquare(document.querySelector('.right-tennis-court'), 0, 50, 0, 0, 15); //15
    const topLeftBaseline = new ExpandSquare(document.querySelector('.left-top-half-left'), 0, 0, 0, 100, 6); //6
    const bottomLeftBaseline = new ExpandSquare(document.querySelector('.left-bottom-half-left'), 0, 0, 0, 100,6);
    const topRightBaseline = new ExpandSquare(document.querySelector('.right-top-half-right'), 0, 0, 0, 100, 6);
    const bottomRightBaseline = new ExpandSquare(document.querySelector('.right-bottom-half-right'), 0, 0, 0, 100, 6);

    const topLeftVerticalMidline = new ExpandSquare(document.querySelector('.left-top-half-right'), 0, 0, 0, 100, 4);
    const bottomLeftVerticalMidline = new ExpandSquare(document.querySelector('.left-bottom-half-right'), 0, 0, 0, 100, 4);
    const topRightVerticalMidline = new ExpandSquare(document.querySelector('.right-top-half-left'), 0, 0, 0, 100, 4);
    const bottomRightVerticalMidline = new ExpandSquare(document.querySelector('.right-bottom-half-left'), 0, 0, 0, 100, 4);

    const bottomLeftCenterLine = new ExpandSquare(document.querySelector('.bottom-left-mid-line'), 0, 100, 0, 100, 4);
    const topLeftCenterLine = new ExpandSquare(document.querySelector('.top-left-mid-line'), 0, 100, 0, 100, 4);
    const topRightCenterLine = new ExpandSquare(document.querySelector('.top-right-mid-line'), 0, 100, 0, 100, 4);
    const bottomRightCenterLine = new ExpandSquare(document.querySelector('.bottom-right-mid-line'), 0, 100, 0, 100, 4);

    const exteriorLines = [leftExteriorLines, rightExteriorLines, topLeftBaseline, bottomLeftBaseline, topRightBaseline, bottomRightBaseline];
    const midLines = [topLeftVerticalMidline, bottomLeftVerticalMidline, topRightVerticalMidline, bottomRightVerticalMidline];
    const centerLines = [bottomLeftCenterLine, topLeftCenterLine, topRightCenterLine, bottomRightCenterLine];
    const tennisCourtLines = [exteriorLines, midLines, centerLines];

    return tennisCourtLines
  }

  expandCourt(elements) {
    const exteriorLinesPromise = new Promise((resolve) => {
      elements[0].forEach(element => {
        element.expand(resolve, "width");
        });
      })

    const midLinesPromise = new Promise((resolve) => {
      exteriorLinesPromise.then(() => {
        elements[1].forEach(element => {
          element.expand(resolve, "height");
        });
      });
    });

    const netLinesPromise = new Promise((resolve) => {
    midLinesPromise.then(() => {
      elements[2].forEach(element => {
          element.expandWidth(resolve, "width");
        });
      });
    });

    netLinesPromise.then(() => {
      elements[2].forEach(element => {
        element.expandHeight();
      });
    });
  }
}

