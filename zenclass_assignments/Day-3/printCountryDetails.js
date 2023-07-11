var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var countries = JSON.parse(request.responseText);

    countries.forEach((country) => {
      console.log("Country: " + country.name.common);
      console.log("Region: " + country.region);
      console.log("Sub-region: " + country.subregion);
      console.log("Population: " + country.population);
      console.log("---------------------------");
    });
  } else {
    console.error("Error: " + request.status);
  }
};

request.send();
