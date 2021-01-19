var generate = function(numRows) {

    if(numRows === 0) return []
    if(numRows === 1) return [[1]]


    const result = [[1], [1,1]]
    while(result.length < numRows){
        let fin = [1];
        let above = result[result.length-1]

        for(i = 0; i < above.length-1; i++){
            fin.push(above[i] + above[i+1])
        }
        fin.push(1)

        result.push(fin);
    }

    return result
};

console.log(generate(5))