const homepageFadein = () => {
   fadeIn(document.querySelector('.home-link-container'));
};

const tennisCourt = () => {
  const leftTennisCourt = document.querySelector('.left-tennis-court');
  const rightTennisCourt = document.querySelector('.right-tennis-court');

  const leftTopHalfLeft = document.querySelector('.left-top-half-left');
  const leftTopHalfRight = document.querySelector('.left-top-half-right');
  leftTopHalfLeft.style.borderLeft = 'solid 6px white';
  leftTopHalfRight.style.borderLeft = 'solid 6px white';

  const leftBottomHalfLeft = document.querySelector('.left-bottom-half-left');
  const leftBottomHalfRight = document.querySelector('.left-bottom-half-right');
  leftBottomHalfLeft.style.borderLeft = 'solid 6px white';
  leftBottomHalfRight.style.borderLeft = 'solid 6px white';

  const rightTopHalfLeft = document.querySelector('.right-top-half-left');
  const rightTopHalfRight = document.querySelector('.right-top-half-right');
  rightTopHalfLeft.style.borderRight = 'solid 6px white';
  rightTopHalfRight.style.borderRight = 'solid 6px white';

  const rightBottomHalfLeft = document.querySelector('.right-bottom-half-left');
  const rightBottomHalfRight = document.querySelector('.right-bottom-half-right');
  rightBottomHalfLeft.style.borderRight = 'solid 6px white';
  rightBottomHalfRight.style.borderRight = 'solid 6px white';

  const topLeftMidline = document.querySelector('.top-left-mid-line');
  const bottomLeftMidline = document.querySelector('.bottom-left-mid-line');
  const topRightMidline = document.querySelector('.top-right-mid-line');
  const bottomRightMidline = document.querySelector('.bottom-right-mid-line');
  topLeftMidline.style.borderBottom = 'solid 3px white';
  bottomLeftMidline.style.borderTop = 'solid 3px white';
  topRightMidline.style.borderBottom = 'solid 3px white';
  bottomRightMidline.style.borderTop = 'solid 3px white';

  topLeftMidline.style.borderBottom = 'solid 3px white';
  bottomLeftMidline.style.borderTop = 'solid 3px white';
  topRightMidline.style.borderBottom = 'solid 3px white';
  bottomRightMidline.style.borderTop = 'solid 3px white';

  topLeftMidline.style.borderRight = 'solid 3px white';
  bottomLeftMidline.style.borderRight = 'solid 3px white';
  topRightMidline.style.borderLeft = 'solid 3px white';
  bottomRightMidline.style.borderLeft = 'solid 3px white';

  let width = 0;
  let width2 = 0;
  let height = 0;
  let height2 = 0;
  let height3 = 0;


  const id = setInterval(horizontalFrame, 18);
  function horizontalFrame() {
    if (width == 50) {
      clearInterval(id);
    } else {
      width++;
      leftTennisCourt.style.width = width + "%";
      rightTennisCourt.style.width = width + "%";
    };
  };

  const id2 = setInterval(verticalFrame, 7);
  function verticalFrame() {
    if (height == 100) {
      clearInterval(id2);
    } else {
      height++;
      leftTopHalfLeft.style.height = height +"%";
      leftBottomHalfLeft.style.height = height +"%";
      rightTopHalfRight.style.height = height +"%";
      rightBottomHalfRight.style.height = height +"%";
    };
  };
  const id3 = setInterval(middleVerticalFrame, 5);
  function middleVerticalFrame() {
    if (height2 == 100) {
      clearInterval(id3);

    } else if (parseInt(rightTennisCourt.style.width) == 50){
      height2++;
      leftTopHalfRight.style.height = height2 +"%";
      leftBottomHalfRight.style.height = height2 +"%";
      rightTopHalfLeft.style.height = height2 +"%";
      rightBottomHalfLeft.style.height = height2 +"%";
    };
  };

  const id4 = setInterval(midlineFrame, 5);
  function midlineFrame() {
    if (width2 == 100 && height3 == 100) {
      clearInterval(id4);

    } else if (parseInt(topLeftMidline.style.width) == 100) {
      height3++
      topLeftMidline.style.height = height3 +"%";
      bottomLeftMidline.style.height = height3 +"%";
      topRightMidline.style.height = height3 +"%";
      bottomRightMidline.style.height = height3 +"%";

    } else if (parseInt(leftBottomHalfRight.style.height) == 100) {
      width2++;
      topLeftMidline.style.width = width2 +"%";
      bottomLeftMidline.style.width = width2 +"%";
      topRightMidline.style.width = width2 +"%";
      bottomRightMidline.style.width = width2 +"%";
    };
  };
};
