function createFeeCollector() {
  let total = 0; // Private state via closure

  return function (amount) {
    total += amount;
    return total;
  };
}

// Test Run
const classA = createFeeCollector();
const classB = createFeeCollector();
console.log(classA(500));  // 500
console.log(classA(1000)); // 1500
console.log(classB(700));  // 700  (separate cash box!)