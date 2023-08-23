class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  getName() {
    return "${this.fName} ${this.lName}";
  }
}

const dude = new Person("Anirudh", "Karthikeya");
console.log(dude);
