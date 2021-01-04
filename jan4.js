var arrayStringsAreEqual = function(word1, word2) {

    return (word1.join('') == word2.join(''))
    
};

// arrayStringsAreEqual(["abcddefg"], ["abc", "d", "defg"])

var sumOddLengthSubarrays = function(arr) {
    
    let temp = [];
    let x = arr.length;
    let y = arr.length % 2 == 0 ? x-1 : x

    if(arr.length > 2){
        for(let i = 0; i <= x; i++){
            for(let j = 1; j <= y; j+= 1){
                let sliced = arr.slice(i, j)
                sliced.length % 2 == 0 ? null : temp.push(sliced)
            }
        }
    }else{
        temp = arr;
    }
    let fin = temp.flat().reduce((a, b) => a + b, 0)

    return fin;
    
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]))
console.log(sumOddLengthSubarrays([1,4]))