export default function minMaxTemp(day, minMax) {
  const temp = [];
  day.hour.forEach((i) => temp.push(Math.round(i.temp_c)));
  if (minMax === "max") return Math.max(...temp);
  if (minMax === "min") return Math.min(...temp);
}
