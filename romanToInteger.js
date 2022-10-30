// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanDict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let output = 0;
    for(let i=0; i< s.length - 1; i++) {
      if(romanDict[s[i+1]] > romanDict[s[i]]) {
          output -= romanDict[s[i]];
      } else {
          output += romanDict[s[i]];
      }
    }
    output += romanDict[s[s.length-1]];
    return output;
};