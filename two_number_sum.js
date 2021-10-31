// O(n^2) | O(1)
function twoNumberSum(array, targetSum) {
  // Write your code here.
  // using 2 for loops -> time: O(n^2), space O(1);
  let result = [];
  // [1, 2, 3] -> 3 length; i=0 -> j=1; j=2; j=3...; i=1 -> j=2; j=3; j=4...
  for (let i = 0; i < array.length - 1; i++) {
    // console.log(`i=${i}`);
    const firstN = array[i];
    // cannot write just 1, it will repeat the number for 'i' as well as 'j'
    for (let j = i + 1; j < array.length; j++) {
      const secondN = array[j];

      if (firstN + secondN === targetSum) {
        result.push(firstN);
        result.push(secondN);
        return result;
      }
    }
  }
  return [];
}

let targetSum = 10;
let array = [3, 5, -4, 8, 11, 1, -1, 6];


// O(nlog(n)) | O(1)
function twoNumberSum(array, targetSum) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  array.sort((a, b) => a - b);

  let left = 0;  // starts from left first el
  let right = array.length - 1; // last el in arr

  // take another loop through -> until left is smaller than right index
  while (left < right) {
      // goal is target to be equal to sum of left and right number
    let currentSum = array[left] + array[right];

    if (currentSum === targetSum) {
      return [array[left], array[right]];
    // currentSum smaller -> no need to check lower number/sum from right site
    } else if (currentSum < targetSum) {
      // take bigger number from left to right direction
      left += 1;
    } else if (currentSum > targetSum) {
      // take smaller number from right to left direction
      right -= 1;
    }
  }
  // no solution found
  return [];
}

// My solution:
function twoNumberSum(array, targetSum) {
  const nums = {};
  // populate empty object/hash
  for (let i = 0; i < array.length; i++) {
    nums[array[i]] = true;
  }
  // console.log(nums); // { '4': true, '6': true }
  // let all_keys = Object.keys(nums); //[ '4','6']
  for (let i = 0; i < array.length - 1; i++) {
    let currentNum = array[i];  // 4
    let difference = targetSum - currentNum; // (10-4) = 6

    // check if difference is in object/hash as a key (without repetition)
    if ((difference in nums) && (difference !== currentNum)) {
      return [currentNum, difference]
    }
  }
  return [];
}
// console.log(typeof(difference));
// console.log(nums['1']);  // true
// console.log(nums.hasOwnProperty(difference));  //true or false



function twoNumberSum(array, targetSum) {
  // O(n) time, O(n) space using Hashtable
  // using hashtable, where I compare (targetSum - currentNumber) (y)
  // if that (y) number is in hashtable than it's a result
  // otherwise we put it into hashtable with some value e.x.: true
  const nums = {};

  for (let i = 0; i < array.length - 1; i++) {
      let currentNumber = array[i];

      // Look for another number in array different from currentNum (10-11) => -1
      if (array.includes(targetSum - currentNumber) && (currentNumber !== (targetSum - currentNumber))) {
          return [currentNumber, targetSum - currentNumber]
      } else {
          nums[currentNumber] = true;
      }
  }
  return [];
}

// Write whatever you want here.
//   [1, 2, 3] -> 3 length;
//   i=0 -> j=1; j=2; j=3...;
//   i=1 -> j=2; j=3; j=4...

// i and j for loop local variable cannot repeat itself -
// always the number next to it

// or return [firstN, secondN]
