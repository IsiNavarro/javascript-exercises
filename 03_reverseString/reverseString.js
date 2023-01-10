const reverseString = function(string) {
    let array = [];

    for (let i=0; i<string.length; i++){
        array.unshift(string.charAt(i));
    }

    let reversedString = array.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
