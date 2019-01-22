// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const squaredAndReturn = (num) => {
  let total = num;
  console.log(num);
  // debugger;

  const squared = () => {
    total = num * num;
    console.log(total);
    // debugger; // Closure num = 3 total = 9

    const originalValue = () => {
      total = total / num;
      console.log(total);
      // debugger; // Closure num = 3 total = 3
    }

    originalValue();
  }

  squared();
}

squaredAndReturn(3);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    debugger;
    return count += 1;
  }
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4
console.log(newCounter()); // 5
console.log(newCounter()); // 6
console.log(newCounter()); // 7
console.log(newCounter()); // 8
console.log(newCounter()); // 9


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
