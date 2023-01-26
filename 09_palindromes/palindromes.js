const palindromes = function (string) {

    let newString = string.toLowerCase()
    .replace(/[^\w\s\']|_/g, "") //found on StackOverflow: strips punctuation
    .replace(/\s+/g, "");        //strips whitespaces

    for(let i = 0; i < newString.length; i++){
        if(newString.charAt(i) != newString.charAt(newString.length -1 -i)){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
