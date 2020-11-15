var runningSum = function(nums) {
    
    let temp = [];
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++){
       sum += nums[i];
        temp[i] = sum;
        
    }
    
    return temp;
    
};

var kidsWithCandies = function(candies, extraCandies) {
    let fin = [];
    let max = Math.max(...candies);
    for(let i = 0; i < candies.length; i++){
        fin.push( candies[i] + extraCandies >= max ? true : false)
    }
    
    return fin;
    
};