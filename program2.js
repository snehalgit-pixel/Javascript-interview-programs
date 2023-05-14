// Print all pairs with given sum
// Input: [8, 3, 5, 2, 7, 1]
// Target: 10
// Output: (8, 2), (7, 3)

// This is a solution with O(n*log(n)) time complexity

function findPairsWithGivenSum(arr1, n) {
    let lowerLimit = 0;
    let upperLimit = arr1.length - 1;
    arr1 = arr1.sort((a, b) => { return a-b });
    while (lowerLimit < upperLimit) {
        if (arr1[lowerLimit] + arr1[upperLimit] == n) {
            console.log(`Sum of ${arr1[lowerLimit]} and ${arr1[upperLimit]} = `+(arr1[lowerLimit]+arr1[upperLimit]));
            lowerLimit++;
        }
        else if (arr1[lowerLimit] + arr1[upperLimit] < n) {
            lowerLimit++;
        }
        else {
            upperLimit--;
        }
    }
}

const arr = [8, 3, 5, 2, 5, 7, 1];
const n = 10;
findPairsWithGivenSum(arr, n);