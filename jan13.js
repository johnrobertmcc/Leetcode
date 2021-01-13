var freqAlphabets = function(s) {

    let temp = [];
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let fin = [];

    for(let i = 0; i < s.length; i++ ){
        let j = i + 1;
        let k = i + 2;
        
        if(s[k] == '#'){
            temp.push(`${s[i] + s[j]}`)
            i = k;
        }else{
            temp.push(s[i])
        }
    }

    for(let i = 0; i < temp.length; i++){
        fin.push(alpha[temp[i]-1])
    }
    return fin.join('');
    
};

console.log(freqAlphabets("10#11#12"))
console.log(freqAlphabets("1326#"))