const httpReq = new XMLHttpRequest();

httpReq.onreadystatechange = (res) => {
  let data = [];
  if (httpReq.status === 200) {
    data = JSON.parse(httpReq.responseText);
  }
  data.forEach((country) => {
    console.log(country.name, country.region, country.subregion, country.flag);
  });
  //Get all the countries from Asia continent /region using Filter function
  console.log(data.filter((country) => country.region === "Asia"));

  // Get all the countries with a population of less than 2 lakhs using Filter function
  console.log(data.filter((country) => country.population < 200000));

  // Print the following details name, capital, flag using forEach function
  data.forEach((country) => {
    console.log(country.name, country.region, country.subregion, country.flag);
  });

  // Print the total population of countries using reduce function
  console.log(
    data.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0)
  );
  // Print the country which uses US Dollars as currency.
  console.log(data.filter((country) => country.currencies.code < "USD"));
};

httpReq.open("GET", "https://restcountries.com/v2/all");
httpReq.send();
