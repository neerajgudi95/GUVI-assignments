var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 2" };

for (let key in obj1) {
  console.log(obj1[key]);
  if (!obj2.hasOwnProperty(key)) {
    console.log("Object property does not match");
  }
  console.log(obj2[key]);
}
