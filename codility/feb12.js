function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let positive = N >= 0;
    let str = positive ? N.toString() : (N*-1).toString();
    let fin = [];

    for(let i = 0; i < str.length; i++){
        
        let temp = new Number(str.slice(0,i) + '5' + str.slice(i, str.length))
        fin.push(temp);
    }

    return positive ? Math.max(...fin) : Math.min(...fin)*-1
}

// console.log(solution(-999))

function helper(sub){

    let uppers = [];

    for(let i = 0; i < sub.length; i++){
        if(sub[i] === sub[i].toUpperCase()){
            uppers.push(sub[i])
        }
    }

    if(uppers.length === 0){return false}

    for(let i = 0; i < uppers.length;i++){
        if(!sub.includes(uppers[i].toLowerCase())){
            return false;
        }
    }

    for(let i = 0; i < sub.length; i++){
        if(!uppers.includes(sub[i].toUpperCase())){
            return false;
        }
    }

    return true;

}


function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let substrings = [];
    let fin = [];

    for(let i = 0; i <= S.length; i++){
        for(let j = 0; j <= S.length; j++){
            substrings.push(S.slice(i,j))

        }
    }

    for(let i = 0; i < substrings.length; i++){
        if(helper(substrings[i])){
            fin.push(substrings[i].length)
        }
    }

    return fin.length === 0 ? -1 : Math.max(...fin);
    // return substrings;
}


console.log(solution("azABaabza"))

function solution(S, K) {
    
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let idx = days.indexOf(S);
    
    for(let i = 0; i <= idx; i++){
        days.pop(days.unshift())
    }

    let newIdx = K % days.length;
    console.log(newIdx)
    
    return days[newIdx]
}
console.log(solution("Wed", 2))