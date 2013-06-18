var getStringRepresentation = require('./lib/getStringRepresentation')
module.exports = numberStringRepresentation;

/**
 * number-string-represenation
 * @param  {Number} a decimal number for which the module should return a
 * string representation
 * @return {String} The string representation for the input number
 *
 * @example if the input is the number 2523.04, the module should return
 *   "Two thousand five hundred twenty-three and 04/100 dollars"
 */
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
    return validateSize(input)
  }
  error = {
    message: 'failed to get string representation of number',
    error: 'input parameter must be have typeof === number',
    stack: new Error().stack
  }
  return error
}

/**
 * validateSize
 *
 * Make sure that the input number is within the range supported by the module.
 *
 * @param  {Number} input the decimal number to convert to a string representation
 * @return {Error} if the input is within the supported range return null, otherwise
 *  return an error object otherwise
 */
function validateSize(input) {
  var error, absInput, maxSize;
  absInput = Math.abs(input)
  maxSize = Math.pow(10, 15)
  if (absInput >= maxSize) {
    var err = 'input parameter must be in range [-' + maxSize + ', ' + maxSize + ']'
    error = {
      message: 'failed to get string representation of number, range must be within negavtive to position trillions (10^15)',
      error: err,
      stack: new Error().stack
}
    return error
  }
  return null
}
