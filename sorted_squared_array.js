// O(n) time | O(n) space - n is the length of the input arr
function sortedSquaredArray(array) {
  // Write your code here.
  let sorted = [];

  array.forEach((num) => {
    sorted.push(num * num);
  });
  // Sorted at the end -> negative number in array [-10, -5, 0, 5, 10];
  return sorted.sort((a, b) => a - b);
}

