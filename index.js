// Demonstrating JavaScript Promises and async/await.

// Function to create a Promise that resolves with a random number or rejects.
function createPromise() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation with setTimeout.
    setTimeout(() => {
      // Generate a random number.
      let num = Math.random();
      if (num < 0.5) {
        // If the number is less than 0.5, resolve the Promise.
        console.log('Promise resolved with number:', num);
        resolve(num);
      } else {
        // If the number is 0.5 or greater, reject the Promise.
        console.log('Promise rejected with number:', num);
        reject(new Error('Number too large: ' + num));
      }
    }, 1000); // Wait for 1 second before executing the function inside setTimeout.
  });
}

// Async function to test Promise usage with async/await.
async function testAsync() {
  try {
    let result = await createPromise();
    console.log("Result:", result);
    result += result;
    console.log("Result doubled:", result);
    result += result;
    console.log("Result quadrupled:", result);
  } catch (error) {
    console.error('Error occurred:', error.message);
  } finally {
    console.log("Finally block executed regardless of Promise resolution.");
  }
}

// Execute the async function when the window loads.
window.onload = () => {
  console.log('Async operation initiated...');
  testAsync();
  console.log('...after Async operation initiated');
};
