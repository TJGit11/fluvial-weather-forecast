fetch(
  "http://api.openweathermap.org/geo/1.0/direct?q=New+Orleans&limit=5&appid=d6aac51f8f278c439b163e4e7767e456"
)
  .then((response) => response.json())
  .then((citiesFound) => {
    let firstCity = citiesFound[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon);

    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=d6aac51f8f278c439b163e4e7767e456`
    );
  })

  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
