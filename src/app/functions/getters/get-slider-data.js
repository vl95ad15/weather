export default function getSliderData(currentDay, nextDays) {
  const sliderData = [];
  const currentHour = new Date().getHours();
  currentDay.hour.forEach((item, index) =>
    index > currentHour ? sliderData.push(item) : null
  );
  nextDays[0].hour.forEach((item, index) =>
    index <= currentHour ? sliderData.push(item) : null
  );
  return sliderData;
}
