// var generate = function(numRows) {

//     if(numRows === 0) return []
//     if(numRows === 1) return [[1]]


//     const result = [[1], [1,1]]
//     while(result.length < numRows){
//         let fin = [1];
//         let above = result[result.length-1]

//         for(i = 0; i < above.length-1; i++){
//             fin.push(above[i] + above[i+1])
//         }
//         fin.push(1)

//         result.push(fin);
//     }

//     return result[3]
// };


// var getRow = function(rowIndex) {
//     let rows = generate(rowIndex)

//     return rows[rowIndex-1]

// };

// console.log(getRow(3))

// var checkStraightLine = function(coordinates) {

//     let base = coordinates[0];
//     let rest = coordinates.slice(1);
//     let x = base[0];
//     let y = base[1]

//     for(let i = 0; i < rest.length; i++){
//         if(rest[i][0] == x + 1 && rest[i][1] == y + 1){
//             x+=1; y += 1;
//         }else{
//             return false
//         }
//     }

//     return true
    
// };

var checkStraightLine = function(coordinates) {

        if(coordinates.length == 2) return true;
        
        let dx = coordinates[1][0] - coordinates[0][0];
        let dy = coordinates[1][1] - coordinates[0][1];
        
        for(let i = 2; i < coordinates.length; i++) {
            let dx1 = coordinates[i][0] - coordinates[0][0];
            let dy1 = coordinates[i][1] - coordinates[0][1];
            if(dx*dy1 != dy*dx1) return false;
        }
        return true;
    
};

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]))