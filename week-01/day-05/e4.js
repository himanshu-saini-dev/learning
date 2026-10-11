function getFeeStatus(rollNo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rollNo >= 1 && rollNo <= 50) {
        resolve(`Roll ${rollNo}: fees paid`);
      } else {
        reject(`Roll ${rollNo}: not found`);
      }
    }, 500);
  });
}

Promise.all([getFeeStatus(1), getFeeStatus(2), getFeeStatus(3)])
  .then((data) => {
    console.log("All Results:", data);
   
  })
  .catch((err) => {
    console.log("Error:", err);
  });