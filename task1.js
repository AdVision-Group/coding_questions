// Write a function that removes duplicates from an array

function removeDuplicates(array) {}

function areArraysEqual(array1, array2) {
   array1.sort();
   array2.sort();
   return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
}

function runTests() {
   console.assert(
      areArraysEqual(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      "Test 1 failed"
   );
   console.assert(
      areArraysEqual(
         removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      ),
      "Test 2 failed"
   );
   console.assert(areArraysEqual(removeDuplicates([(1, 1, 1, 1, 1, 1, 2)]), [1, 2]), "Test 3 failed");
}

runTests();
