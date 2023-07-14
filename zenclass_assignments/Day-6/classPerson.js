class Person {
  constructor(name, age, email, address) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }

  getDetails() {
    return `Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.email}\nAddress: ${this.address}`;
  }
}

const person1 = new Person(
  "Lakshmi Narayanan",
  30,
  "lakshminarayanandd@gmail.com",
  "123 Main Street, Chennai, Tamil Nadu, 600097"
);
console.log(person1.getDetails());
