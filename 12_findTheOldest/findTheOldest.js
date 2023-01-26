const findTheOldest = function(people) {
    let today = new Date();
    let year = today.getFullYear();
    people.forEach(person => person["yearOfDeath"] === undefined ? person["yearOfDeath"] = year: person["yearOfDeath"] = person["yearOfDeath"]);
    console.log(people[0]["yearOfDeath"]);
    let sortedPeople = people.sort((a, b) =>(a["yearOfDeath"]-a["yearOfBirth"]) > (b["yearOfDeath"]-b["yearOfBirth"]) ? -1:1);
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
