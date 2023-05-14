// Javascript filter

// Method 1
const ages = [15, 31, 11, 29, 41];
const filteredAges = ages.filter(filterCriteria);

function filterCriteria(age) {
    return age >= 18;
}
console.log(filteredAges);

// Method 2
const filteredAges2 = ages.filter((age) => age >= 18);
console.log(filteredAges2);

// Method 3
const filteredAges3 = ages.filter(function (age) { return age >= 18 });
console.log(filteredAges3);