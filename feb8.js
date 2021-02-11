var reverseString = function(s) {

    let last = s.length-1;

    for(let i=0; i < last; i++){
           [ s[i], s[last]] = [s[last], s[i]];
            last-=1;
        }

    return s;


};

// console.log(reverseString(["h","e","l","l","o"]))



var reverseStr = function(s, k) {
    
};

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"