var maximumWealth = function(accounts) {
    
    let max= 0;
    
    for(let i=0; i< accounts.length; i++){
        let current = accounts[i];
        let temp = 0;
        for(let j=0; j<current.length; j++){
            temp += current[j];     
        }
        if(temp > max){
            max = temp;
        }
    }
    
    return max;
    
};


var interpret = function(command) {
    let temp = command.replace(/\(al\)/gi, 'al')
    let fin = temp.replace(/\(\)/gi, 'o');
    console.log(fin)
};

// interpret("(al)G(al)()()G")
// interpret("G()()()()(al)")
// interpret("G()(al)")


var countConsistentStrings = function(allowed, words) {

    let temp= [];
    allowed.split('').map(letter => {
        for(let i = 0; i < words.length; i++){
            temp[i] = words[i].replace(new RegExp(letter, 'gi'), "")
        }
    })
    temp = temp.filter(entry => /\S/.test(entry));

    console.log(temp)
    console.log(words)

    // console.log(temp.length)

    // console.log(words.length - temp.length);
};

countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"] )