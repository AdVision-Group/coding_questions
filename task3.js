// Write a function that checks whether brackets 3 types of
// brackets - ()[]{} are balanced in a string.

// Returns a boolean
function areBalanced(str) {}

function runTests() {
   console.assert(areBalanced("{[()]}"), "Test 1 failed");
   console.assert(!areBalanced("{[(])}"), "Test 2 failed");
   console.assert(areBalanced("{{[[(())]]}}"), "Test 3 failed");
   console.assert(!areBalanced("{[()((]))])}"), "Test 4 failed");
   console.assert(areBalanced("{[][]}()(([[[]]{}]))"), "Test 5 failed");
}

runTests();
