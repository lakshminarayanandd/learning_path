//For my best practice I am using promise and async, await function to this array methods
//a.Getting all the countries from Asia continent /region using Filter function
//using promise
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const asianCountries = data.filter((country) => country.region === "Asia");
    console.log(asianCountries);
  })
  .catch((error) => console.log(error));

//using async function
async function getCountriesFromAsia() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const asianCountries = data.filter((country) => country.region === "Asia");
    console.log(asianCountries);
  } catch (error) {
    console.log(error);
  }
}
getCountriesFromAsia();

//b.Get all the countries with a population of less than 2 lakhs using Filter function
//using promise
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countriesWithLessPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log(countriesWithLessPopulation);
  })
  .catch((error) => console.log(error));

//using async function
async function getCountriesWithLessPopulation() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const countriesWithLessPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log(countriesWithLessPopulation);
  } catch (error) {
    console.log(error);
  }
}
getCountriesWithLessPopulation();

//c.Printing the following details name, capital, flag using forEach function
//using promise
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("----------------------");
    });
  })
  .catch((error) => console.log(error));

//using async function
async function printCountryDetails() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("----------------------");
    });
  } catch (error) {
    console.log(error);
  }
}
printCountryDetails();

//d.Printing the total population of countries using reduce function
//using promise
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total Population:", totalPopulation);
  })
  .catch((error) => console.log(error));

//using async function
async function calculateTotalPopulation() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total Population:", totalPopulation);
  } catch (error) {
    console.log(error);
  }
}
calculateTotalPopulation();

//e.Print the country which uses US Dollars as currency.
//using promise
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countriesUsingUSD = data.filter((country) => {
      const currencies = Object.values(country.currencies);
      return currencies.includes("USD");
    });
    console.log("Countries using US Dollars:", countriesUsingUSD);
  })
  .catch((error) => console.log(error));

//using async
async function findCountriesUsingUSD() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const countriesUsingUSD = data.filter((country) => {
      const currencies = Object.values(country.currencies);
      return currencies.includes("USD");
    });
    console.log("Countries using US Dollars:", countriesUsingUSD);
  } catch (error) {
    console.log(error);
  }
}
findCountriesUsingUSD();
