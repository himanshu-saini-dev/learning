console.log("1: start");
setTimeout(() => console.log("2: timeout"), 0);
Promise.resolve().then(() => console.log("3: promise"));
console.log("4: end");

// prediction - 1: start, 4: end, 3: promise, 2: timeout