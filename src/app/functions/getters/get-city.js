export default async function getCity(key, value) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${value}&days=3&aqi=no&alerts=no`;
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Error with status ${response.status}`);
    return;
  }
  console.log(`Ok with status ${response.status}`);
  const data = await response.json();
  console.log(data);

  return data;
}
