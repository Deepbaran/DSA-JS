/*
Merging Arrays:
Pseudo Code:
1. Create an empty array, take a look at the smallest values in each input array.
2. While there are still values we haven't looked at...
  a. If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
  b. If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
  c. Once we exhaust one array, push in all remaining values from the other array.
*/

'use strict';

const merge = (arr1, arr2) => {
  let arr = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
    else arr.push(arr2[j++]);
  }
  while (i < arr1.length) arr.push(arr1[i++]);
  while (j < arr2.length) arr.push(arr2[j++]);
  return arr;
};

// Time Complexity of Merging Arrays: O(N + M) || N is the size of the first array and M is the size of the second array

/*
Merge Sort:
Pseudo Code:
1. Break up the array into halves until you have arrays that are empty or have one element
2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
3. Once the array has been merged back together, return the merged (and sorted!) array.
*/

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, mid));
  let arr2 = mergeSort(arr.slice(mid));
  return merge(arr1, arr2);
};

let arr = [29, 10, 14, 30, 37, 14, 18];
arr = mergeSort(arr);
console.log(arr);

// Time Complexity of Merge Sort: O(Nlog(N)) [Best, Average and Worst TC are same]
// Space Complexity: O(N)
