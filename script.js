fetch(
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=d6aac51f8f278c439b163e4e7767e456")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=d6aac51f8f278c439b163e4e7767e456"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
