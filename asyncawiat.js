const fs = require("fs");

// promise
function sanketReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

// console.log(sanketReadFile());
// sanketReadFile().then(onDone);

// console.log("Hi there....");

async function readasyncfile() {
  const value = await sanketReadFile();
  console.log(value);
  console.log("after promise resolve then this line will be executed...");
}

readasyncfile();

console.log("1stly thi line will execute ");
