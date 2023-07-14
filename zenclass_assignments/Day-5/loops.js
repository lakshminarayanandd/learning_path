var obj = [
  { person: "Person1", age: 37, company: "Guvi", city: "Chennai" },
  { person: "Person2", age: 32, company: "Guvi Geek", city: "Mumbai" },
  { person: "Person3", age: 26, company: "Geek Network", city: "Bangalore" },
];

// for loop
for (let i = 0; i < obj.length; i++) {
  console.log(Object.entries(obj[i]));
}

// for..of loop
for (let detail of obj) {
  console.log(Object.entries(detail));
}

// for..in loop
for (let detail in obj) {
  console.log(Object.entries(obj[detail]));
}

// forEach - Array Method
obj.forEach((detail) => console.log(Object.entries(detail)));
