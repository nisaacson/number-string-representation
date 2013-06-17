/**
 * number-string-represenation
 * @param  {String} a string version of a decimal number
 *   for which the function should get representation for
 * @return {String}       The string representation for the input number
 *
 * @example if input === 2523.04, the function should return
 *   "Two thousand five hundred and 04/100 dollars"
 */

var getStringRepresentation = require('./lib/getStringRepresentation')


module.exports = numberStringRepresentation;
function numberStringRepresentation(input) {
  var error = validateInput(input)
  if (error) {
    throw error
  }
  return getStringRepresentation(input)
}

/**
 * validateInput
 * @param  {Number} input the input to test.
 * @return {Error} if the type of the input is a valid number, return null,
 *   otherwise return an error object
 */

function validateInput(input) {
  var error, typeOfInput
    typeOfInput = typeof input
    if (typeOfInput === 'number') {
      return null
    }
  error = {
    message: 'failed to get string representation of number',
    error: 'input parameter must be have typeof === string',
    stack: new Error().stack
  }
  return error
}
