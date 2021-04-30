/*
Selection Sort: Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
Pseudo Code:
1. Store the first element as the smallest value you've seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
4. If the 'minimum' is not the value (index) you initially began with, swap the two values.
5. Repeat this with the next element until the array is sorted.
*/

const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[index] > arr[j]) index = j;
    }
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
};

let arr = [29, 10, 14, 30, 37, 14, 18];
selectionSort(arr);
console.log(arr);

// Time Complexity of Selection Sort: Best: O(N^2); Average: O(N^2); Worst: O(N^2)
// Space Complexity: O(1)

/*
Basically we traverse the array and find the smallest element and then swap that element with the first element. In this way, the smallest element of the array is sorted.
Now again find the second smallest element from the rest of the unsorted elements and swap it with the second element in the array. Now, the first two elements of the array is sorted.
Keep doing this until the whole array is sorted.
*/
