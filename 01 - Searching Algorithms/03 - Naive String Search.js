/*
Pseudo Code: [Searching for a sbstring in a larger string]
1. Loop over the longer string
2. Loop over the shorter string
3. If the characters don't match, break out of the inner loop
4. If the characters do match, keep going
5. If you complete the inner loop and find a match, increment the count of matches
6. Return the count
*/

'use strict';

const naiveSearch = (str, pattern) => {
  let count = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str[i] === pattern[0]) {
      count++;
      for (let j = 0; j < pattern.length; j++) {
        if (str[i + j] !== pattern[j]) {
          count--;
          break;
        }
      }
    }
  }
  return count;
};

console.log(naiveSearch('Deepbaran', 'Deep'));

// Using Naive Search with array slice:
const naiveSearchSlice = (str, pattern) => {
  let count = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str[i] === pattern[0] && str.slice(i, pattern.length) == pattern) {
      count++;
    }
  }
  return count;
};

console.log(naiveSearchSlice('Deepbaran', 'Deep'));

// Time complexity of Naive Search: O(N * M) || N is the length of str and M is the length of pattern
