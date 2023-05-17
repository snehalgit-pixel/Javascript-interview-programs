// Longest substring with non-repeating characters
// O(n^3)

function checkDistinct(str, i, j) {
    var visited = new Array(26);
    for (let k=0; k < 26; k++) {
        visited[k] = false;
    }

    for (let k=i; k <= j; k++) {
        if (visited[str.charCodeAt(k) - 65]) {
            return false;
        }
        visited[str.charCodeAt(k) - 65] = true;
    }
    return true;
}

function longestUniqueSubstring(str) {
    let result = 0;
    str = str.toUpperCase();
    for (let i=0; i < str.length; i++) {
        for (let j=i; j < str.length; j++) {
            if (checkDistinct(str, i, j)) {
                result = Math.max(result, j-i+1);
            }
        }
    }
    return result;
}

console.log(longestUniqueSubstring("ABDEFGABEF"));