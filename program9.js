// Longest substring with non-repeating characters

// Needs revision and improvement
function longestUniqueSubstring(str) {
    let n = str.length;
    let res = 0;
    let lastIndex = new Array(256);
    for (let k=0; k < 256; k++) {
        lastIndex[k] = -1;
    }
    let i = 0;
    for (let j=0; j<n; j++) {
        i = Math.max(i, lastIndex[str.charAt(j)] + 1);
        res = Math.max(res, j-i+1);
        lastIndex[str.charAt(j)] = j;
    }
    return res;
}

console.log(longestUniqueSubstring("ABDEFGABEF"));