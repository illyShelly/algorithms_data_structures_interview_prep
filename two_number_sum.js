function twoNumberSum(array, targetSum) {
  // Write your code here.
  let result = [];
  for (let i=0; i<array.length-1; i++) {
    // console.log(`i=${i}`);
    const firstN = array[i];
    // cannot write just 1, it will repeat the number for 'i' as well as 'j'
    for (let j=i+1; j<array.length; j++) {
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

// Write whatever you want here.
//   [1, 2, 3] -> 3 length;
//   i=0 -> j=1; j=2; j=3...;
//   i=1 -> j=2; j=3; j=4...

// i and j for loop local variable cannot repeat itself -
// always the number next to it

// result = [];
// result.push(firstN);
// result.push(secondN);

// or return [firstN, secondN]
