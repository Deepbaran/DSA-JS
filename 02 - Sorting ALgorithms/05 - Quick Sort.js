/*
Quick Sort: 
1. Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted.
2. Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.

Pivot Helper:
1. In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
2. Given an array, this helper function should designate an elementas the pivot.
3. It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all the values greater than teh pivot are moved to the right of the pivot.
4. The order of the elements on the either side of the pivot doesn't matter!
5. The helper should do this in place, that is, it should not create a new array.
6. When complete, the helper should return index of the pivot.

Picking a pivot:
1. The runtime of quick sort depends in part on how one selects the pivot.
2. Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
3. For simplicity, we'll always choose the pivt to be the first element (Though there are some consequences to this approach).

Pivot Pseudocode:
1. It will help to accept three arguments: an array, a start index, and an index (these can default to 0 and the array length minus 1, respectively)
2. Grab the pivot from the start of the array
3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
4. Loop through the array from the start until the end
  a. If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the lement at the pivot index.
5. Swap the starting element (i.e. the pivot) with the pivot index.
6. Return the pivot index.
*/

'use strict';

const pivot = (arr, start, end) => {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  let pivotIndex = start;
  let pivotValue = arr[pivotIndex];
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

let arr = [29, 10, 14, 30, 37, 14, 18];
arr = quickSort(arr, 0, arr.length - 1);
console.log(arr);

// Time Complexity of Quick Sort: Best: O(Nlog(N)); Average: O(Nlog(N)), Worst: (O(N^2))
// Space Complexity: O(log(N))
