var getSum = function(a, b) {
    
    let top;
    let bottom;
    let fin = [];
    let negative = false;
    let half = false;
    let temp = [];
    
    top =  a > b ? a : b;
    bottom = a > b ? b : a;
    
    if(top < 0 && bottom < 0){
        negative = true;
        top *= -1;
        bottom *= -1;
    }else if(bottom < 0 && top > 0){
        half = true;
        if(bottom*-1 === top){
            return 0
        }
    }
    
    for(let i = 0; i < top; i++){
        fin.push(i);
    }

    if(half){
        for(let i = bottom; i < 0; i++){
            temp.push(i);
        }

        return fin.slice(temp.length).length
    }else{
        for(let i = 0; i < bottom; i++){
            fin.push(i)
        }
    }
    //    return [top, bottom, fin, temp, half]
    return negative ? fin.length*-1 : fin.length
    

    
};

console.log(getSum(-14, 16))


// top = 1

// top > 0

// 0, 1
// push into fin 1


// bottom = -1

// bottom > 0

// fin.slice(bottom*-1)


// fin = [0,1]