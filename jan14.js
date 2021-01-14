var sortColors = function(nums) {
    let sorted = false;
    
    while(!sorted){
        sorted = true;
        
        for(let i = 0; i < nums.length-1; i++){
            let j = i + 1;
            if(nums[i] > nums[j]){
                sorted = false;
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }

    return nums;
};

console.log(sortColors([2,0,2,1,1,0]))