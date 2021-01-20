var missingNumber = function(nums) {
    let max = Math.max(...nums);
    let sum = 0;
    let numsSum = 0;

    for(let i = 0; i <= max; i++){
        sum += i
    }

    for(let i = 0; i < nums.length; i++){
        numsSum += nums[i]
    }

    return sum - numsSum

    
};

// console.log(missingNumber([3,0,1]))