// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */


// [0, 2, 1, 4, 5]
//  -> 3
// [0,1,2,4,5]

// [0, 1, 2, 3, 4, 6, 7, 8, 9]
//- >5

var missingNumber = function(nums) {

    // le/t length = nums.length;

    // let sorted = nums.sort();

    
    // for(i = 0; i < nums.length; i ++){
    //     // if(!nums.includes((length-1) - nums[i])){
    //     //     return nums[i]
    //     // }
    //     if(sorted[i] !== i){
    //         return i
    //     }
    // }

    let expected = 0;
    let actual = 0;

    for (let i = 0; i <= nums.length; i++) {
        expected += i;
    }

    for (let i = 0; i < nums.length; i++) {
        actual += nums[i];
    }

    return expected - actual
};

// console.log(missingNumber([6,2,3,4,0,5]))


// Input: s = "art", indices = [1,0,2]
// Output: "rat"

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// # @param {String} s
// # @param {Integer[]} indices
// # @return {String}

var restoreString = function(s, indicies) {
    let newStr = [];
    for (let i = 0; i < s.length; i++) {
        newStr.push('');
    }

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let newIdx = indicies[i];

        newStr[newIdx] = letter
    }

    return newStr.join('');
};

// ['','','','','c','o','d','']
//  0  1  2  3  4  5  6  7

// o
// 5

// function restoreString(s, indices) {
//   let str = s.split('');
//   let obj = {};

//   for (let i = 0; i < str.length; i++) {
//     obj[indices[i]] = str[i];
//   }

//   return Object.values((obj)).join('');
// }

// return(''.join(x for x, _ in sorted(zip(s, indices), key=lambda pair: pair[1])))


console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))
