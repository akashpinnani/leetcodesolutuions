/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestString = "";
  const mid = Math.floor((s.length - 1) / 2);
  for (let i = 0; i < s.length; i++) {
    const longestWordOdd = getLongestPalidrome(i, i, s);
    const longestWordEven = getLongestPalidrome(i, i + 1, s);
    const longestAmongEvenOrOdd =
      longestWordOdd.length > longestWordEven.length
        ? longestWordOdd
        : longestWordEven;
    if (longestAmongEvenOrOdd.length > longestString.length) {
      longestString = longestAmongEvenOrOdd;
    }
  }
  return longestString;
};

function getLongestPalidrome(i, j, word) {
  while (i >= 0 && j < word.length && word[i] === word[j]) {
    i--;
    j++;
  }
  return word.slice(i + 1, j);
}
