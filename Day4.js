// Object property comparison
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 2" };

for (let key in obj1) {
  console.log(obj1[key]);
  if (!obj2.hasOwnProperty(key)) {
    console.log("Object property does not match");
  }
  console.log(obj2[key]);
}

// API request for country flags
const httpReq = new XMLHttpRequest();

httpReq.onreadystatechange = (res) => {
  let data = [];
  if (httpReq.status === 200) {
    data = JSON.parse(httpReq.responseText);
  }
  data.forEach((country) => {
    console.log(country.flag);
  });
};

httpReq.open("GET", "https://restcountries.com/v2/all");
httpReq.send();
