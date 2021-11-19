export default function renderTodayForecastLineData(
  todayForecastLine,
  sliderData
) {
  todayForecastLine.innerHTML = sliderData
    .map((item) => {
      const timeForecast = item.time.split(" ")[1];

      return `<div class="today-line-item">
                    <span>${timeForecast}</span>
                    <img src=${item.condition.icon} alt="">
                    <span>${Math.round(item.temp_c)}&deg;</span>
                 </div>`;
    })
    .join("");
}
