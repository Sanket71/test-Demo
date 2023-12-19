const intro = {
  name: "Sanket Meshiya",
  age: 20,
};

const jsonObj = JSON.stringify(intro);
console.log(jsonObj);

// convert json string to js object
const jsObject = JSON.parse(jsonObj);
console.log(jsObject);
