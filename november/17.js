// Input: x = 123
// Output: 321


var reverse = function(x) {
  let ans = parseInt(x.toString().split('').reverse().join('').toString());

  if (x < 0) { ans *= -1; }

  if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};

// console.log(reverse(-123))



var subtractProductAndSum = function(n) {

    let value = n;
    let sum = 0;
    let product = 1;

    while(n){
        sum += n % 10;
        n = Math.floor(n/10)
    }
    
    while(value){
        product *= value % 10;
        value = Math.floor(value/10)
    }

    return product - sum;
    
};

// console.log(subtractProductAndSum(123))

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.


var findNumbers = function(nums) {
    temp = [];
    sum = 0;
    for(let i = 0; i < nums.length; i++){
        temp.push(nums[i].toString());
    }    
    for(let i = 0; i < nums.length; i++){
        sum += temp[i].length % 2 == 0 ? 1 : 0;
    }    

    return sum;
};

console.log(findNumbers([555,901,482,1771]))

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

var countGoodTriplets = function(arr, a, b, c) {
    
}