import setCurrentWeather from "./set-current-weather";

export async function getWeather(key, value) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${value}&days=3&aqi=no&alerts=no`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCurrentWeather(data);
  } catch (err) {
    console.error(err);
  }
}

async function getWeatherSearchResult(item, key) {
  const searchValue = item.split(",")[0];
  await getWeather(key, searchValue);
}

export function searchResult(key, value, list) {
  fetch(`https://api.weatherapi.com/v1/search.json?key=${key}&q=${value}`)
    .then((res) => res.json())
    .then((data) => {
      const returnedData = data.splice(0, 3);
      list.innerHTML = returnedData
        .map(
          (item) =>
            `<li id="${item.id}" class="result-item" onclick="${null}">${
              item.name
            }</li>`
        )
        .join("");
      console.log(returnedData);
    });
}
