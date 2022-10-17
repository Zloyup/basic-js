const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arraysData) {
  let count = 0;
  arraysData.forEach((array) => {
    array.forEach((data) => {
      if (data == '^^') { count++ };
    });
  });
  return count;
}

module.exports = {
  countCats
};
