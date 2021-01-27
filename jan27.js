function isValidSubsequence(array, sequence) {
    let seqIdx = 0;  
    for(let j = 0; j < array.length; j++){
      if(array[j] == sequence[seqIdx]) seqIdx++;
      if(seqIdx == sequence.length) return true;
    }
  return false;
}


// return results; 
// 0(n)
// array[i] = answer
// 0(1)

// Time: 0(n) - Optimal
// Space: 0(1) - Optimal 

// Do not edit the line below.
// exports.isValidSubsequence = isValidSubsequence;


// Examples 
// [5,1,22,25,6, -1, 8, 10]
// [1, 6, -1, 10]




// Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

// If it is impossible to form any triangle of non-zero area, return 0.

 

// Example 1:

// Input: [2,1,2]
// Output: 5

// Example 2:

// Input: [1,2,1] 
// Output: 0

// Example 3:
// Input: [3,2,3,4]
// Output: 10

// Example 4:
// Input: [3,6,2,3]
// Output: 8

// time = 0(nlog(n));
// space = 0(1);

var largestPerimeter = function(A) {   
  A.sort((a, b) => a - b);
  let lastIdx = A.length;
  while(lastIdx - 3 >= 0) {
    if(A[lastIdx - 3] + A[lastIdx - 2] > A[lastIdx - 1]) {
      return (A[lastIdx - 3] + A[lastIdx - 2] + A[lastIdx - 1]);
    }
    lastIdx--;
  }
  return 0;
};

console.log(largestPerimeter([3,2,3,6,6,7,8,9,2,3,5,4]))