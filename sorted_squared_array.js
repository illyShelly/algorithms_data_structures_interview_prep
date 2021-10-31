// O(nlog(n)) time (sorting operations) | O(n) space - length of the input arr

function sortedSquaredArray(array) {
  let sorted = [];

  array.forEach((num) => {
    sorted.push(num * num);
  });
  // Sorted at the end -> negative number in array [-10, -5, 0, 5, 10];
  return sorted.sort((a, b) => a - b);
}


// Algoexpert solution
// O(n) time | O(n) space
function sortedSquaredArray(array) {
  // array is sorted! in ascending order e.x.: [-10, -5, 0, 6, 12]
  const sorted = [];
  // const sorted = new Array(array.length).fill(0);
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  // iterate from right to left -> higher number
  for (let i = array.length - 1; i >= 0; i--) {
    const leftValue = array[leftIdx];
    const rightValue = array[rightIdx];

    // compare left (-10) and right (10) values (their absolute value)
    // then add to the array to the left or right and increase/decrease its left/right idx
    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      sorted[i] = leftValue * leftValue;  // add to last position leftIdx value (0.)
      leftIdx ++;
    } else {
      sorted[i] = rightValue * rightValue;
      rightIdx --;
    }
}
  return sorted;
}
