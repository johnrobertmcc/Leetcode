var numberOfSteps  = function(num) {
    let temp = num;
    let steps = 0;
    while(temp !== 0){
        if(temp % 2 == 0){
            temp = temp/2;
            steps += 1;
        }else{
            temp = temp - 1;
            if(temp !== 0){
            temp = temp/2;
            steps += 1
            }
            steps += 1;
        }
        
    }
    
    return steps
};