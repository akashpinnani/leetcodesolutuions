// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let longest = '';
    const smallestCount = Math.min(...strs.map((str) => str.length));
    for(let i=0; i<smallestCount; i++) {
        let char = strs[0][i]
        if(strs.every((str)=> str[i] === char)) {
            longest += char;
        } else {
            break;
        }
    }                               
        return longest;
};