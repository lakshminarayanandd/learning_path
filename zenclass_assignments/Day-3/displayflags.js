var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var countries = JSON.parse(request.responseText);
    countries.forEach((country) => console.log(country.flags.svg));
  } else {
    console.error("Error: " + request.status);
  }
};

request.send();
