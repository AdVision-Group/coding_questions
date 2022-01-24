// Write a function that checks whether brackets 3 types of
// brackets - ()[]{} are balanced in a string.

function areBalanced(str) {
   const stack = [];
   const brackets = {
      "{": "}",
      "[": "]",
      "(": ")",
   };
   for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (brackets[char]) {
         stack.push(char);
      } else if (brackets[stack.pop()] !== char) {
         return false;
      }
   }
   return stack.length === 0;
}

console.assert(areBalanced("{[()]}"), "Test 1 failed");
console.assert(!areBalanced("{[(])}"), "Test 2 failed");
console.assert(areBalanced("{{[[(())]]}}"), "Test 3 failed");
console.assert(!areBalanced("{[()((]))])}"), "Test 4 failed");
console.assert(areBalanced("{[][]}()(([[[]]{}]))"), "Test 5 failed");
