function getFeeStatus(rollNo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rollNo >= 1 && rollNo <= 50) {
        resolve(`Roll ${rollNo}: fees paid`);
      } else {
        reject(`Roll ${rollNo}: not found`);
      }
    }, 1000);
  });
}

console.time("E4-Timer");

Promise.all([getFeeStatus(1), getFeeStatus(2), getFeeStatus(3)])
  .then((results) => {
    console.log("Results:", results);
    console.timeEnd("E4-Timer"); // Output: ~1000ms
  })
  .catch((err) => {
    console.log("Error:", err);
    console.timeEnd("E4-Timer");
  });