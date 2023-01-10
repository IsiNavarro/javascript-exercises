const sumAll = function(a, b) {

    if (typeof a == "number" &&
        typeof b == "number" &&
        a >=0 && b >= 0){ // I don't get why this is needed. Negative numbers are still integers...
        let sum = 0;
        if (b>a){
            for (let i = a; i<=b; i++){
                sum += i;
            }
        } else {
            for (let i = b; i<=a; i++){
                sum += i;
            }
        }
        return sum;
    } else  {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
