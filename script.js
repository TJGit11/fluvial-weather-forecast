//put whole fetch inside event listener
//search button on click
// grab value from search button. not from input
// pull out string from button and use event delegation
// event.target.textContent => grab text of the city
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
