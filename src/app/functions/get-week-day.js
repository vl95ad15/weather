export default function getWeekDay(item) {
  const date = new Date(item.date);
  let options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
