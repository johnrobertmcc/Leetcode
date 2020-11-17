// Input: x = 123
// Output: 321


var reverse = function(x) {
  let ans = parseInt(x.toString().split('').reverse().join('').toString());

  if (x < 0) { ans *= -1; }

  if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};

// console.log(reverse(-123))



var subtractProductAndSum = function(n) {

    let value = n;
    let sum = 0;
    let product = 1;

    while(n){
        sum += n % 10;
        n = Math.floor(n/10)
    }
    
    while(value){
        product *= value % 10;
        value = Math.floor(value/10)
    }

    return product - sum;
    
};

console.log(subtractProductAndSum(123))