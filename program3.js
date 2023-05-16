// Print all pairs with given sum
// Input: [8, 3, 5, 2, 7, 1]
// Target: 10
// Output: (8, 2), (7, 3)

// This is a solution with O(n) time complexity

function findPairsWithGivenSum(arr1, targetSum) {
    let s1 = new Set();
    for (let i=0; i < arr1.length; i++) {
        let temp = targetSum - arr1[i];
        if (s1.has(temp)) {
            console.log(`Sum of ${arr1[i]} and ${temp} = `+targetSum);
        }
        s1.add(arr1[i]);
    }
}

const arr = [8, 3, 5, 2, 5, 7, 1];
const n = 10;
findPairsWithGivenSum(arr, n)