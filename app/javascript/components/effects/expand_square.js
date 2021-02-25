
export default class ExpandSquare {
  constructor(element, initialWidth, finalWidth, initialHeight, finalHeight, frameInterval) {
    this.element = element;
    this.initialWidth = 0;
    this.finalWidth = finalWidth;
    this.initialHeight = 0;
    this.finalHeight = finalHeight;
    this.frameInterval = frameInterval;
  }

  expand(resolve, growingSide) {
    this.expandWidth(resolve, growingSide);
    this.expandHeight(resolve, growingSide);
    return "done"
  }

  expandWidth(resolve, growingSide) {
    const widthId = setInterval(grow.bind(this), this.frameInterval);
      function grow() {
      if (this.initialWidth === this.finalWidth) {
        clearInterval(widthId);
          if (this.initialWidth !== 0 && growingSide === "width") {
          resolve();
        }
      } else {
        this.initialWidth++;
        this.element.style.width = this.initialWidth + "%";
      };
    };
  }

  expandHeight(resolve, growingSide) {
    const heightId = setInterval(grow.bind(this), this.frameInterval);
      function grow() {
      if (this.initialHeight === this.finalHeight) {
        clearInterval(heightId);
        if (this.initialHeight !== 0 && growingSide === "height") {
          resolve()
        }
      } else {
        this.initialHeight++;
        this.element.style.height = this.initialHeight + "%";
      };
    };
  }
}

