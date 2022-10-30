// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramDict = {};
  for (let str of strs) {
    const letter = [...str].sort().join("");
    anagramDict[letter]
      ? anagramDict[letter].push(str)
      : (anagramDict[letter] = [str]);
  }
  return Object.values(anagramDict);
};
