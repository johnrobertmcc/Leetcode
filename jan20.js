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

var findDuplicate = function(nums) {

    let fin = {};

    for(let i = 0; i < nums.length; i++){
        if(fin[nums[i]]){
            fin[nums[i]] += 1
        }else{
            fin[nums[i]] = 1
        }
    }
    
    return Object.keys(fin).find( key => fin[key] === Math.max(...Object.values(fin)))
};

console.log(findDuplicate([3,1,3,4,2]))