var runningSum = function(nums) {
    
    let temp = [];
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++){
       sum += nums[i];
        temp[i] = sum;
        
    }
    
    return temp;
    
};