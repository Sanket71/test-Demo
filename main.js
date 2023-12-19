console.log("Hello world");

// for (let i = 1; i < 1000000000000000000; i++) {}

// Callback

function calculateArithmatic(a, b, finalArithmaticFunction) {
  return finalArithmaticFunction(a, b);
}

function sum(a, b) {
  return a + b;
}

// console.log(calculateArithmatic(1, 2, sum));

// Calculate the time it takes between a setTimeout call and the inner function actually running

const startTime = performance.now();
setTimeout(function () {
  const endTime = performance.now();

  const elapsedTime = endTime - startTime;

  console.log(`Elapsed time: ${elapsedTime} milliseconds`);
}, 1000);

// 3. Create a terminal clock (HH:MM:SS)
function calculateClock() {
  const time = new Date();
  const hour = time.getHours().toString();
  const minute = time.getMinutes().toString();
  const second = time.getSeconds().toString();
  console.log(`${hour}:${minute}:${second}`);
}

setInterval(calculateClock, 1000);
