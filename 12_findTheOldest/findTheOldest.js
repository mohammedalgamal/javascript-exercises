const findTheOldest = function(people) {
    const d = new Date();
    curr =  d.getFullYear();

    const old = people.reduce((oldest, person) => {
        let age1 = 0;
        let age2 = 0;
        if (person['yearOfDeath'] === undefined) {
            age1 = curr - person['yearOfBirth'];
        }
        else {
            age1 = person['yearOfDeath'] - person['yearOfBirth'];
        };

        if (oldest['yearOfDeath'] === undefined) {
            age2 = curr - oldest['yearOfBirth'];
        }
        else {
            age2 = oldest['yearOfDeath'] - oldest['yearOfBirth'];
        };

        if (age1 > age2) {
            oldest = person;
        };

        return oldest;

    }, people[0]);

    return old;
};

// Do not edit below this line
module.exports = findTheOldest;
