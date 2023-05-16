// During migration from 1 array to another, Set does not change the order of array elements.

const arr1 = [9, 1, 3, 6, 5, 4, 4, 6, 1, 9, 5];
const arr2 = [...new Set(arr1)]
console.log(arr2)