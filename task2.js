// Write a function that checks whether a number is prime

// Returns a boolean
function isPrime(n) {}

function runTests() {
   console.assert(!isPrime(1), "Number 1 is not prime");
   console.assert(isPrime(2), "Number 2 is prime");
   console.assert(isPrime(3), "Number 3 is prime");
   console.assert(!isPrime(4), "Number 4 is not prime");
   console.assert(isPrime(5), "Number 5 is prime");
   console.assert(isPrime(7), "Number 7 is prime");
   console.assert(isPrime(11), "Number 11 is prime");
   console.assert(!isPrime(12), "Number 12 is not prime");
   console.assert(isPrime(1321), "Number 1321 is prime");
   console.assert(!isPrime(832911), "Number 832911 is not prime");
}

runTests();
