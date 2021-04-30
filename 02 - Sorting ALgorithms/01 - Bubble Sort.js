/*
Bubble Sort: A Sorting Algorithm where the largest values bubble up to the top!
Pseudo Code: [With each outer loop the biggest unsorted value gets sorted]
1. Start looping from with a variable called i at the end of the array towards the beginning of the array. (As we need to shrink the size of the inner loop as the array gets sorted)
2. Start an inner loop with a variable called j from the beginning until i - 1. (As with each outer loop the biggest unsorted value gets sorted, we just need to sort the rest of the elements)
3. If arr[j] is greater than arr[j + 1], swap those two values.
*/

'use strict';

const bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swaping the values using array destructuring
      }
    }
  }
};

let arr = [29, 10, 14, 30, 37, 14, 18];
bubbleSort(arr);
console.log(arr);

// Time Complexity of Bubble Sort: Best: O(N); Average: O(N^2); Worst: O(N^2)
// Space Complexity: O(1)

/*
29 10 14 30 37 14 18

Size of the unsorted array is 7.

i = 7: [Need to sort 7 elements]
  j = 0: 10 29 14 30 37 14 18 (10 < 29 <- Don't swap)
  j = 1: 10 14 29 30 37 14 18 (29 > 14 <- Swap)
  j = 2: 10 14 29 30 37 14 18 (29 < 30 <- Don't swap)
  j = 3: 10 14 29 30 37 14 18 (30 < 37 <- Don't swap)
  j = 4: 10 14 29 30 14 37 18 (37 > 14 <- swap)
  j = 5: 10 14 29 30 14 18 37 (37 > 18 <- swap)

Now, 37 is sorted. So, we only need to sort 6 elements. The last element is sorted. So, we only need to sort before the last element. So, the size of the insorted array has shrunk by 1 and has become 6 from 7. Hence, with each outer loop the size of the unsorted array will shrink.

Sorting will continue similarly for:
i = 6: [Unsorted array size is 6]
i = 5: [Unsorted array size is 5]
i = 4: [Unsorted array size is 4]
i = 3: [Unsorted array size is 3]
i = 2: [Unsorted array size is 2]
i = 1: [Unsorted array size is 1]

n unsorted array size means n - 1 comparisons.
*/

// Optimize Bubble Sort for almost sorted arrays:
const bubbleSortOpt = arr => {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swaping the values using array destructuring
        noSwaps = false;
      }
    }
    if (noSwaps) break; // If no swaps were made, then the array is already sorted.
  }
};

let arr1 = [29, 10, 14, 30, 37, 14, 18];
bubbleSortOpt(arr1);
console.log(arr1);
