// Longest substring with non-repeating characters
// O(n)

function longestUniqueSubstring(str) {
    var lastIndex = new Array(256);
    for (let k=0; k < 256; k++) {
        lastIndex[k] = -1;
    }
    let i=0; let res = 0;
    for (let j=0; j < str.length; j++) {
        i = Math.max(i, lastIndex[str.charCodeAt(j)] + 1);
        res = Math.max(res, j-i+1);
        lastIndex[str.charCodeAt(j)] = j;
    }
    return res;
}

console.log(longestUniqueSubstring("ABDEFGABEF"));