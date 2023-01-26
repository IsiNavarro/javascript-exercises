const fibonacci = function(number) {

    let fibonacciSequence = [1, 1];

    if(number <= 0){
        return "OOPS";
    }
    for(let i = 2; i<number; i++ ){
        fibonacciSequence[i] = fibonacciSequence[i-1]+fibonacciSequence[i-2];
    }

    return fibonacciSequence[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
