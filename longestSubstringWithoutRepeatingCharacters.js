/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let longestSubstring = 0;
    let i= 0,j =0;
    const setObj = new Set();
    while(j<s.length) {
        if(!setObj.has(s[j])) {
            setObj.add(s[j]);
            j++;
            longestSubstring = Math.max(setObj.size, longestSubstring);
        } else {
            setObj.delete(s[i]);
            i++;
        }
    }
    return longestSubstring;
};