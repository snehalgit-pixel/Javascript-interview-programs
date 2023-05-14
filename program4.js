// Javascript map function
let numberArray = [5, 3, 1, 9, 2, 8, 7];

// Method 1
numberArray = numberArray.map(function (element) {
    return element * 10
});
console.log(numberArray);

// Method 2
numberArray = numberArray.map((element) => element * 10);
console.log(numberArray);

// Method 3
numberArray = numberArray.map(multiplyFn);
function multiplyFn(element) {
    return element * 10
}
console.log(numberArray)