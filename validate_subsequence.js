// Time = O(N) -> traverse trough main arr;
// Space = O(1); is constant -> no storing anything extra (var, big data)

// I cannot use .includes for repetitive values in the sequence
// sequence[seqIdx] doesn't change until value found in main
function isValidSubsequence(array, sequence) {
  if (array.length < sequence.length) return false;
  let seqIdx = 0;

  // array[0] === sequence[0] 5vs1; array[1] === sequence[0] 1vs1 hurray!
  for (let i = 0; i < array.length; i++) {
    // stop the programme when seqIdx is on the last element/idx (all found)
    if (seqIdx === sequence.length) break;  // or return true
    if (array[i] === sequence[seqIdx]) seqIdx ++;
  }
  // after main iteration
  // seqArr stacks/hasn't finished -> some of element is not in main
  if (seqIdx < sequence.length) {
    return false;
  } else {
    return true;
  }
}

function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  let arrIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx ++;  // when containing the el, move to next one to compare
    }
    arrIdx += 1;  // increment
  }
  return seqIdx === sequence.length // true or false
}




// I cannot sorted the arrays first and say the result is true for
// identical arrays, but it matters the order!

// Example:
// array =    [5, 1, 22, 25, 6, -1, 8, 10];
// sequence = [5, 1, 25, 22, 6, -1, 8, 10];
// array =    [1, 1, 6, 1];
// sequence = [1, 1, 1, 6];

// array = [5, 1, 22, 25, 6, -1, 8, 10];
// sequence = [5, 26, 22, 8]; -> seqIdx = 1 doesn't change stays on 26 element

