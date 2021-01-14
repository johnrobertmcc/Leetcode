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

// console.log(sortColors([2,0,2,1,1,0]))

const find = function(arr, value){

    return arr.findIndex(num => {
        return num == value
    })
}

const check = function(a, b) {
    if(a == b){
        return true
    }

    return false
}

var intersect = function(nums1, nums2) {

    for(let i = 0;i < nums1.length; i++){

            let start = nums1[i];
            let second = find(nums2, start);
            let temp = nums2.slice(second)
            
            if(check(temp[1], nums1[i+1])){
                return [nums1[i], nums1[i+1]]
            }
    }
    
};

console.log(intersect([5,4,9,5], [9,4,9,8,4]))