
const fadeIn = (obj) => {
  let opacity = 0.00;
  const id5 = setInterval(opacityFrame, 11);
  function opacityFrame() {

    if (opacity >= 1.01) {
      clearInterval(id5);

    } else {
      opacity += 0.01
      opacity.toFixed(1)
      obj.style.opacity = opacity;
    };
  };
};

const fadeOut = (obj) => {
  let opacity = 1.00;
  const id5 = setInterval(opacityFrame, 11);
  function opacityFrame() {

    if (opacity <= 0.00) {
      clearInterval(id5);

    } else {
      opacity -= 0.01
      opacity.toFixed(1)
      obj.style.opacity = opacity;
    };
  };
};

const scrollDown = (obj, celerity, initialHeight, finalHeight, unit) => {
  let height = initialHeight;
  const id6 = setInterval(scrollDownFrame, celerity);
  function scrollDownFrame() {
    if (height >= finalHeight) {
      clearInterval(id6);

    } else {
      height++
      obj.style.height = height + unit;
    };
  };
};

const scrollUp = (obj, celerity, initialHeight, finalHeight, unit) => {
  let height = finalHeight;
  const id7 = setInterval(scrollUpFrame, celerity);
  function scrollUpFrame() {

    if (height <= initialHeight) {
      clearInterval(id7);

    } else {
      height --
      obj.style.height = height + unit;
    };
  };
};
