/**
 * getStringRepresentation
 * @param  {Number} input a valid decimal number (possibly negative)
 * @return {String} the string representation of the input decimal number.
 *
 * @example if the input is 2523.04, the output is 'Two thousand five hundred twenty-three and 04/100 dollars'
 * @example if the input is -2523.04, the output is 'Negative two thousand five hundred twenty-three and 04/100 dollars'
 */
var getWordsForThreeDigitNumber = require('./getWordsForThreeDigitNumber')
module.exports = function(input) {
  var output = ''
  if (input < 0) {
    output += 'Negative '
    input = Math.abs(input)
  }
  var fractionalString = getFractionalDollars(input)
  var integerPart = Math.floor(input)
  output += numberToWords(integerPart)
  if (fractionalString) {
    output += ' and ' + fractionalString
  }
  output += ' dollars'
  output = capitaliseFirstLetter(output)
  return output
};

/**
 * numberToWords
 *
 * The function works by splitting the number into groups of three digits. Each group is the converted to its string representation.
 * Then the function joins each group together, placing a magnitude word such as thousand, million, billion etc.
 * depending on the postion of the group in the original number
 *
 * @param  {Number} integer number number to convert such as 2532
 * @return {String} String representation of the integer number
 *
 * @example if the input is 2532 this function will return "two thousand fifty-two"
 */
function numberToWords(number) {
  var groups, index, output, digits
  if (number === 0) {
    return 'zero'
  }
  groups = splitNumberIntoThreeDigitGroups(number)
  index = groups.length - 1
  output = groups.reduce(function(a, group) {
    var part = getStringRepresentationOfGroupAtIndex(group, index)
    if (!part) {
      return a
    }
    index -= 1
    return a += part + ' '
  }, '')
  return output.trim()
}

/**
 * splitNumberIntoThreeDigitGroups
 *
 * breaks apart the integer number into its component three digit groups
 *
 * @param  {Number} number the integer number
 * @return {Array} all the three digit groups, biggest first and then desending down
 *
 * @example if the input number is 2532, the output would be [2, 532]
 */
function splitNumberIntoThreeDigitGroups(number) {
  var groups, digits
  groups = []
  while (number > 0) {
    digits = number % 1000
    // push to front so building string representation can go from biggest to smallest
    groups.unshift(digits)
    number = Math.floor(number / 1000);
  }
  return groups
}

/**
 * getStringRepresentationForGroupAtIndex
 *
 * After a number is split up into three digit groups, it needs to be reassambled as a string representation
 * where each three digit group as an appropriate magnitude modifier word such as "thousand", "million" etc.
 * The specific magnitude word depends on where the three digit group appears in the original integer number
 *
 * @param {Integer} group the three digit group
 * @param {Integer} the (descending) index of where the group appears in the original number
 * @return {String} the String representation for a three digit group at a given index.
 */
var getStringRepresentationOfGroupAtIndex = (function() {
  // close over magnitudeWords to limit the scope
  var magnitudeWords = ['', 'thousand', 'million', 'billion', 'trillion']
  return function(group, index) {
    var words, magnitude, stringRepForGroup
    words = getWordsForThreeDigitNumber(group)
    if (!words) {
      return ''
    }
    magnitude = magnitudeWords[index]
    stringRepForGroup = [words, magnitude].join(' ')
    return stringRepForGroup
  }
}())

/**
 * getFractionalDollars
 * @param  {Number} input a number with a possible decimal part
 * @return {String} the fractional part of the number as a string formatted as "nn/100" where nn is a value from
 * "00" to "99"
 *
 * @example if the input is 2532.04, this function will return "04/100".
 * @example if the input is 2532.00 or if the input is 2532, this function will return "00/100"
 */
function getFractionalDollars(input) {
  var scaled = input * 100
  var numerator = String(Math.floor(scaled % 100))
  numerator = formatNumerator(numerator)
  var fractionalString = [numerator, 100].join('/')
  return fractionalString
}

/**
 * formatNumberation
 * @param  {Integer} input a integer in the range [0,99]
 * @return {String}  the input integer as string padded out to two digits
 *
 * @example if the input is 0, this function will return "00"
 * @example if the input is 9, this function will retrun "9"
 * @example if the input is 99, this function will return "99"
 */
function formatNumerator(input) {
  if (input < 10) {
    return '0' + String(input)
  }
  return input
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
