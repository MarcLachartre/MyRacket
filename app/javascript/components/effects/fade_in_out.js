export const fadeIn = (obj, interval, increment) => {
  let opacity = 0.00;
  const id5 = setInterval(opacityFrame, interval);
  function opacityFrame() {

    if (opacity >= 1.01) {
      clearInterval(id5);
      return "widthDone"
    } else {
      opacity += increment
      opacity.toFixed(1)
      obj.style.opacity = opacity;
    };
  };
};

export const fadeOut = (obj) => {
  let opacity = 1.00;
  const id5 = setInterval(opacityFrame, 1000);
  function opacityFrame() {

    if (opacity <= 0.00) {

      clearInterval(id5);
      // return
      obj.style.opacity = 0
      obj.remove()
      // resolve();
    } else {
      opacity -= 0.01
      opacity.toFixed(1)
      obj.style.opacity = opacity;
    };
  };
};
