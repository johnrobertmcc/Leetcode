var reverseString = function(s) {

    let last = s.length-1;
    let even = s.length % 2 === 0 ? true : false

    for(let i=0; i < last; i++){
        if(!even){
           [ s[i], s[last]] = [s[last], s[i]];
            last-=1;
        }
    }

    return s;


};

console.log(reverseString(["h","e","l","l","o"]))