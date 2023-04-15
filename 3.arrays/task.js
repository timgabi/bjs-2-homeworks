function compareArrays(arr1, arr2) {
return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => gender === user.gender).map(user => user.age).reduce((acc, age, index, userAges) => acc + age / userAges.length, 0);
}
