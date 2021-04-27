/*
Pseudo Code: [THE ARRAY MUST BE SORTED]
1. This function accepts a SORTED array and a value.
2. Create a left pointer at the start of the array, and a right pointer at the end of the array.
3. While the left pointer comes before or equal to the right pointer.
*/

'use strict';

// Recursive Approach:
const binarySearchRec = (arr, val, left, right) => {
  if (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] > val) return binarySearchRec(arr, val, left, mid - 1);
    else return binarySearchRec(arr, val, mid + 1, right);
  }
  return -1;
};

console.log(binarySearchRec([2, 3, 4, 5], 5, 0, 3));
console.log(binarySearchRec([2, 3, 4, 5], 1, 0, 3));

// Iterative Approach:
const binarySearchItr = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(left + (right - left) / 2);
  while (arr[mid] !== val && left <= right) {
    if (arr[mid] > val) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor(left + (right - left) / 2);
  }
  return arr[mid] === val ? mid : -1;
};

console.log(binarySearchItr([2, 3, 4, 5], 5));
console.log(binarySearchItr([2, 3, 4, 5], 7));

// Time Complexity of Binary Search: O(log(N))

/*
Notes:
* Binary Search is a much faster form of search
* Rather than eliminating one element at a time, you can eliminate half og th remaining elements at a time.
* Binary Search only works on sorted arrays!
*/
