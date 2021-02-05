var getSum = function(a, b) {
    
    let top;
    let bottom;
    let fin = [];
    
    top =  a > b ? a : b;
    bottom = a > b ? b : a;
    
    if(top < 0){
     for(let i = top; i < 0; i++){
        fin.push(i);
     }
    }else{
     for(let i = 0; i < top; i++){
        fin.push(i);
     }
    }
    
    if(bottom < 0){
     for(let i = 0; i > bottom; i--){
        fin.push(i);
     }
    }else{
     for(let i = 0; i < bottom; i++){
        fin.push(i);
     }
    }
    
    
    return fin.length

    
};

console.log(getSum(1, -1))