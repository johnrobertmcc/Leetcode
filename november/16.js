// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]


var shuffle = function(nums, n) {

    let first = nums.slice(0, n);
    let second = nums.slice(n);

    let fin = [];

    for(let i = 0; i < n; i++){
        fin.push(first[i])
        fin.push(second[i])
    }

    return fin;
    
};

// console.log(shuffle([1,2,3,4,4,3,2,1], 4))

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

var defangIPaddr = function(address) {

    // const regex = /address/gi

    return address.replace(/\./g, "[.]")    
};

// console.log(defangIPaddr("1.1.1.1"))

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {

    let temp = [];
    let fin = 0;

    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+ 1; j < nums.length; j++){
            if(nums[i] == nums[j] && !temp.includes(i)){
                fin += 1;
            }
        }
    }

    return fin;

};

console.log(numIdenticalPairs([1,2,3,1,1,3]))


// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]


var smallerNumbersThanCurrent = function(nums) {
    
    let fin = [];

    for(let i = 0; i < nums.length; i++){
        let compare = nums[i];
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] < compare){
                count += 1
            }
            fin[i] = count;;
        }
    }

    return fin;
};

console.log(smallerNumbersThanCurrent([6,5,4,8]))

var toLowerCase = function (str) {
    let lowerCase = "";

    for (let letter of str) {
        const index = letter.charCodeAt(0);
        if (index >= 65 && index <= 90) {
            letter = String.fromCharCode(index + 32);
        }
        lowerCase += letter;
    }

    return lowerCase;

};

var reformatDate = function(date) {
    
    let temp = date.split(' ');
    
    let day = temp[0];
    let month = temp[1];
    let year = temp[2];
    
    
    
    let fin = [year, month, day];
    return fin.join('-')
};

var reformatDate = function(date) {
    
    const months = {
'Jan': '01', "Feb": '02', "Mar":'03', "Apr":'04', "May":'05', "Jun":'06', "Jul":'07',"Aug":'08',"Sep":'09',"Oct":10, "Nov":11, "Dec":12
    }
    
    let temp = date.split(' ');
    
    let day1 = temp[0];
    let month = months[temp[1]];
    let year = temp[2];
    
    let day = day1.replace(/[a-z]/g, '');
    
    day = day.length === 1 ? 0 + day : day
    
    let fin = [year, month, day];
    return fin.join('-')
};