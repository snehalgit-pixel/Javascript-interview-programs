// Print all pairs with given sum
// Input: [8, 3, 5, 2, 7, 1]
// Target: 10
// Output: (8, 2), (7, 3)

// This is a solution with O(n^2) time complexity

function findPairsWithGivenSum(arr1, n) {
    for (let i=0; i < arr1.length; i++) {
        for (let j=i+1; j < arr1.length; j++) {
            if (arr1[i] + arr1[j] == n) {
                console.log(`Sum of ${arr1[i]} and ${arr1[j]} = `+(arr1[i]+arr1[j]));
            }
        }
    }
}
const arr = [8, 3, 5, 2, 5, 7, 1];
const n = 10;
findPairsWithGivenSum(arr, n);