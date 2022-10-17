const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  array = email.split('@');
  if (array.length == 3) {
    return array[2];
  } else return array[1];
}

module.exports = {
  getEmailDomain
};
