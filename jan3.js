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

interpret("(al)G(al)()()G")
interpret("G()()()()(al)")
interpret("G()(al)")