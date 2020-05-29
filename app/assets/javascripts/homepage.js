class HomepageTennisCourt{
  constructor(welcomeMessage) {
    this.welcomeMessage = fadeIn(document.querySelector('.home-link-container'));
  }

  init() {
    const courtElements = this.initCourtSquares();
    this.expandCourt(courtElements);
  }

  initCourtSquares() {
    const leftExteriorLines = new ExpandSquare(document.querySelector('.left-tennis-court'), 0, 50, 0, 0, 15);
    const rightExteriorLines = new ExpandSquare(document.querySelector('.right-tennis-court'), 0, 50, 0, 0, 15);
    const topLeftBaseline = new ExpandSquare(document.querySelector('.left-top-half-left'), 0, 0, 0, 100, 6);
    const bottomLeftBaseline = new ExpandSquare(document.querySelector('.left-bottom-half-left'), 0, 0, 0, 100, 6);
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
    for (let i = 0; i < elements.length; i++) {
      if (i == 0) {
        elements[i].forEach(element => {
          element.expand();
        });

      } else if (i == 1) {
        setTimeout(function(){elements[i].forEach(element => {element.expand()})}, 900);

      } else {
        setTimeout(function(){elements[i].forEach(element => {element.expandWidth()})}, 1400);
        setTimeout(function(){elements[i].forEach(element => {element.expandHeight()})}, 1900);
      }
    }
  }
}


//document.addEventListener("turbolinks:load", () => {

  // const leftTennisCourt = document.querySelector('.left-tennis-court');
  // const rightTennisCourt = document.querySelector('.right-tennis-court');
  // const leftExteriorLines = new ExpandSquare(leftTennisCourt, 0, 50, 0, 0, 18)
  // const rightExteriorLines = new ExpandSquare(rightTennisCourt, 0, 50, 0, 0, 18)

  // const leftTopHalfLeft = document.querySelector('.left-top-half-left');
  // const leftBottomHalfLeft = document.querySelector('.left-bottom-half-left');
  // const rightTopHalfRight = document.querySelector('.right-top-half-right');
  // const rightBottomHalfRight = document.querySelector('.right-bottom-half-right');

  // const topLeftBaseline = new ExpandSquare(leftTopHalfLeft, 0, 0, 0, 100, 10);
  // const bottomLeftBaseline = new ExpandSquare(leftBottomHalfLeft, 0, 0, 0, 100, 10);
  // const topRightBaseline = new ExpandSquare(rightTopHalfRight, 0, 0, 0, 100, 10);
  // const bottomRightBaseline = new ExpandSquare(rightBottomHalfRight, 0, 0, 0, 100, 10);
  // topLeftBaseline.expand();
  // bottomLeftBaseline.expand();
  // topRightBaseline.expand();
  // bottomRightBaseline.expand();

  // const leftTopHalfRight = document.querySelector('.left-top-half-right');
  // const leftBottomHalfRight = document.querySelector('.left-bottom-half-right');
  // const rightTopHalfLeft = document.querySelector('.right-top-half-left');
  // const rightBottomHalfLeft = document.querySelector('.right-bottom-half-left');

  // const topLeftMidsquare = new ExpandSquare(leftTopHalfRight, 0, 0, 0, 100, 6);
  // const bottomLeftMidsquare = new ExpandSquare(leftBottomHalfRight, 0, 0, 0, 100, 6);
  // const topRightMidsquare = new ExpandSquare(rightTopHalfLeft, 0, 0, 0, 100, 6);
  // const bottomRightMidsquare = new ExpandSquare(rightBottomHalfLeft, 0, 0, 0, 100, 6);


  // const bottomLeftCenterline = document.querySelector('.bottom-left-mid-line');
  // const topLeftCenterline = document.querySelector('.top-left-mid-line');
  // const topRightCenterline = document.querySelector('.top-right-mid-line');
  // const bottomRightCenterline = document.querySelector('.bottom-right-mid-line');
  // //const leftTopHalfRight = document.querySelector('.left-top-half-right');
  // const bottomLeftCenter = new ExpandSquare(bottomLeftCenterline, 0, 100, 0, 100, 6);
  // const topLeftCenter = new ExpandSquare(topLeftCenterline, 0, 100, 0, 100, 6);
  // const topRightCenter = new ExpandSquare(topRightCenterline, 0, 100, 0, 100, 6);
  // const bottomRightCenter = new ExpandSquare(bottomRightCenterline, 0, 100, 0, 100, 6);


  // const mid()

  //fadeIn(document.querySelector('.home-link-container'));
   //console.log(function(){topLefttMidline.expand()}, 1000)
//});
// createSideLines(createInnerLines)
  // const cul1 = new ExpandSquare(leftTopHalfRight, 0, 0, 0, 50, 10);
  // const cul2 = new ExpandSquare(leftBottomHalfRight, 0, 0, 0, 50, 10);
  // const cul3 = new ExpandSquare(rightTopHalfLeft, 0, 0, 0, 50, 10);
  // const cul4 = new ExpandSquare(rightBottomHalfLeft, 0, 0, 0, 50, 10);

  // if (parseInt(rightTennisCourt.style.width) == 50) {
  // cul1.expand();
  // cul2.expand();
  // cul3.expand();
  // cul4.expand();
  //console.log(ExpandSquare.prototype.expandHeight)

  //   ExpandSquare.prototype.expandHeight = function(callback) {
  //     //console.log(this.expandWidth())
  //     callback.call(this)
  //   }

  //   function foo() {
  //     console.log(this.expandWidth())
  //     console.log(this.isDone)
  // }

  // var t = new ExpandSquare(leftTennisCourt, 0, 50, 0, 0, 18);
  //   t.expandWidth(foo);

//   function foo() {
//      console.log(this.element);
//  }



//  cul1.expandHeight(foo);  // Alerts "Joe" via `foo`
// cul2.expandHeight(foo)



// function Thing(name) {
//     this.name = name;
// }
// Thing.prototype.doSomething = function(callback) {
//     // Call our callback, but using our own instance as the context
//     callback.call(this);
// }

// function foo() {
//     alert(this.name);
// }

// var t = new Thing('Joe');
// t.doSomething(foo);  // Alerts "Joe" via `foo`


// const homepageFadein = () => {
//    fadeIn(document.querySelector('.home-link-container'));
// };

// const tennisCourt = () => {
  // const leftTennisCourt = document.querySelector('.left-tennis-court');
  // const rightTennisCourt = document.querySelector('.right-tennis-court');

  // const leftTopHalfLeft = document.querySelector('.left-top-half-left');
  // const leftTopHalfRight = document.querySelector('.left-top-half-right');
  // //leftTopHalfLeft.style.borderLeft = 'solid 6px white';
  // //leftTopHalfRight.style.borderLeft = 'solid 6px white';

  // const leftBottomHalfLeft = document.querySelector('.left-bottom-half-left');
  // const leftBottomHalfRight = document.querySelector('.left-bottom-half-right');
  // // leftBottomHalfLeft.style.borderLeft = 'solid 6px white';
  // // leftBottomHalfRight.style.borderLeft = 'solid 6px white';

  // const rightTopHalfLeft = document.querySelector('.right-top-half-left');
  // // const rightTopHalfRight = document.querySelector('.right-top-half-right');
  // rightTopHalfLeft.style.borderRight = 'solid 6px white';
  // rightTopHalfRight.style.borderRight = 'solid 6px white';

  // const rightBottomHalfLeft = document.querySelector('.right-bottom-half-left');
  //const rightBottomHalfRight = document.querySelector('.right-bottom-half-right');
  // rightBottomHalfLeft.style.borderRight = 'solid 6px white';
  // rightBottomHalfRight.style.borderRight = 'solid 6px white';

  // const topLeftMidline = document.querySelector('.top-left-mid-line');
  // const bottomLeftMidline = document.querySelector('.bottom-left-mid-line');
  // const topRightMidline = document.querySelector('.top-right-mid-line');
  // const bottomRightMidline = document.querySelector('.bottom-right-mid-line');
  // topLeftMidline.style.borderBottom = 'solid 3px white';
  // bottomLeftMidline.style.borderTop = 'solid 3px white';
  // topRightMidline.style.borderBottom = 'solid 3px white';
  // bottomRightMidline.style.borderTop = 'solid 3px white';

  // topLeftMidline.style.borderRight = 'solid 3px white';
  // bottomLeftMidline.style.borderRight = 'solid 3px white';
  // topRightMidline.style.borderLeft = 'solid 3px white';
  // bottomRightMidline.style.borderLeft = 'solid 3px white';

  // let width = 0;
  // let width2 = 0;
  // let height = 0;
  // let height2 = 0;
  // let height3 = 0;


  // const id = setInterval(horizontalFrame, 18);
  // function horizontalFrame() {
  //   if (width == 50) {
  //     clearInterval(id);
  //   } else {
  //     width++;
  //     leftTennisCourt.style.width = width + "%";
  //     rightTennisCourt.style.width = width + "%";
  //   };
  // };

  // const id2 = setInterval(verticalFrame, 7);
  // function verticalFrame() {
  //   if (height == 100) {
  //     clearInterval(id2);
  //   } else {
  //     height++;
  //     leftTopHalfLeft.style.height = height +"%";
  //     leftBottomHalfLeft.style.height = height +"%";
  //     rightTopHalfRight.style.height = height +"%";
  //     rightBottomHalfRight.style.height = height +"%";
  //   };
  // };
  // const id3 = setInterval(middleVerticalFrame, 5);
  // function middleVerticalFrame() {
  //   if (height2 == 100) {
  //     clearInterval(id3);

  //   } else if (parseInt(rightTennisCourt.style.width) == 50){
  //     height2++;
  //     leftTopHalfRight.style.height = height2 +"%";
  //     leftBottomHalfRight.style.height = height2 +"%";
  //     rightTopHalfLeft.style.height = height2 +"%";
  //     rightBottomHalfLeft.style.height = height2 +"%";
  //   };
  // };

//   const id4 = setInterval(midlineFrame, 5);
//   function midlineFrame() {
//     if (width2 == 100 && height3 == 100) {
//       clearInterval(id4);

//     } else if (parseInt(topLeftMidline.style.width) == 100) {
//       height3++
//       topLeftMidline.style.height = height3 +"%";
//       bottomLeftMidline.style.height = height3 +"%";
//       topRightMidline.style.height = height3 +"%";
//       bottomRightMidline.style.height = height3 +"%";

//     } else if (parseInt(leftBottomHalfRight.style.height) == 100) {
//       width2++;
//       topLeftMidline.style.width = width2 +"%";
//       bottomLeftMidline.style.width = width2 +"%";
//       topRightMidline.style.width = width2 +"%";
//       bottomRightMidline.style.width = width2 +"%";
//     };
//   };
// };
