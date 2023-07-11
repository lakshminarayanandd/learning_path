let obj1 = {
  city: "chennai",
  name: "person1",
  age: 5,
  address: "lake view street",
};

let obj2 = {
  age: 5,
  address: "lake view street",
  name: "person1",
  city: "chennai",
};

function compareJson() {
  let obj1Keys = Object.keys(obj1).sort();
  let obj2Keys = Object.keys(obj2).sort();

  if (obj1Keys.length === obj2Keys.length) {
    let isEqual = true;

    for (let i = 0; i < obj1Keys.length; i++) {
      let key = obj1Keys[i];

      if (obj1[key] !== obj2[key]) {
        isEqual = false;
        break;
      }
    }

    if (isEqual) {
      console.log("The given JSON objects are the same.");
    } else {
      console.log("The given JSON objects are not equal.");
    }
  } else {
    console.log("The given JSON objects have different lengths.");
  }
}

compareJson();
