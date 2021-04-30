/*
Insertion Sort: Build up the sort by gradually creating a larger left section which is always sorted.
Pseudo Code:
1. Start by picking the second element in the array
2. Now compare the second element with the one before it and swap if necessary
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
4. Repeat until the array is sorted.
*/

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    let j = i - 1;
    while (j >= 0 && arr[index] < arr[j]) {
      [arr[index], arr[j]] = [arr[j], arr[index]];
      index = j;
      j--;
    }
  }
};

let arr = [29, 10, 14, 30, 37, 14, 18];
insertionSort(arr);
console.log(arr);

// Time complexity of Insertion Sort: Best: O(N); Average: O(N^2); Worst: O(N^2)
// Space Complexity: O(1)
