const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString();
  let split = string.split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] < split[i + 1]) {
      split.splice(i, 1);
      break;
    } else if (split[i] > split[split.length - 1]) {
      split.splice(split.length - 1, 1);
      break;
    }
  }
  return (+split.join(''));
}

module.exports = {
  deleteDigit
};
