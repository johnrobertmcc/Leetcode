function solution(A) {

    let minHeight = Math.max(...A);
    let minWidth = Math.min(...A);

    if(minWidth !== minHeight){
        minWidth++;
        minHeight--;
    }

    return minWidth;

    
}

console.table(solution([6, 5, 5, 6, 2, 2]))
console.log('--4--')
console.log("_________________")
console.table(solution([1, 2, 5, 3, 1, 3]))
console.log('--2--')
console.log("_________________")
console.table(solution([3, 3, 3, 5, 4]))
console.log('--3--')

// 1. Given A = [1, 2, 5, 3, 1, 3], the function should return 2. 
// For example, the black square of side 2 contains the two lowest rows of the 1st and 2nd columns (counting from 0).