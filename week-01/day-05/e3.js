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

// 1. Usage with .then() / .catch()

getFeeStatus(7)
  .then((status) => console.log("Success (.then):", status))
  .catch((err) => console.log("Error (.catch):", err));

getFeeStatus(99)
  .then((status) => console.log("Success (.then):", status))
  .catch((err) => console.log("Error (.catch):", err));

// 2. Rewrite with async / await + try / catch

async function checkFees(rollNo) {
  try {
    const status = await getFeeStatus(rollNo);
    console.log("Success (await):", status);
  } catch (err) {
    console.log("Error (catch):", err);
  }
}

checkFees(7);
checkFees(99);
