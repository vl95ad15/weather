export default class Slider {
  constructor() {
    this.offset = 0;
  }

  prevBtnSliderHandler(todayForecastLine) {
    this.offset -= 8;
    if (this.offset < 0) {
      this.offset = 96;
    }
    todayForecastLine.style.left = -this.offset + "%";
  }

  nextBtnSliderHandler(todayForecastLine) {
    this.offset += 8;
    if (this.offset > 96) {
      this.offset = 0;
    }
    todayForecastLine.style.left = -this.offset + "%";
  }
}
