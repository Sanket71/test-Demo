// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); //false
  console.log("After hasOwnProperty():", hasProp);

  // this will merge two objects and add some new property
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// objectMethods(sampleObject);

let obj = {
  name: "sanket",
  age: 20,
};
// let newObj = Object.assign({}, obj);
let newObj = Object.assign({}, obj, { newProperty: "newValue" });
console.log("After Object.assign():", newObj);
