const apiKey = '75496d48e783bfe8258fbc49f1dedffa';
const city = 'lucknow';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayForecast(data);
  })
  .catch(error => console.error('Error fetching the forecast:', error));

function displayForecast(data) {
    console.log(data)
  data.list.slice(0, 5).forEach(forecast => {
    console.log(`Time: ${forecast.dt_txt}`);
    console.log(`Temperature: ${forecast.main.temp}°C`);
    console.log(`Weather: ${forecast.weather[0].description}`);
  });
}
