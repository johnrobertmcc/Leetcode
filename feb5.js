var getSum = function(a, b) {
    
    let top;
    let bottom;
    let fin = [];
    let negative = false;
    
    top =  a > b ? a : b;
    bottom = a > b ? b : a;
    
    if(top < 0){
        negative = true;
    }

    for(let i = top; i > 0; i--){
        fin.push(i);
     }
    
    if(bottom < 0 && !negative){
        fin.slice(bottom*-1)
    }else{
     for(let i = 0; i < bottom; i++){
        fin.push(i);
     }
    }
    
    
    return negative ? fin.length*-1 : fin.length

    
};

console.log(getSum(-1, -1))


// top = 1

// top > 0

// 0, 1
// push into fin 1


// bottom = -1

// bottom > 0

// fin.slice(bottom*-1)


// fin = [0,1]