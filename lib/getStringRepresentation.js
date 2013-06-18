/**
 * getStringRepresentation
 * @param  {Number} input a valid decimal number (possibly negative)
 * @return {String} the string representation of the input decimal number.
 *
 * @example
 *   if the input is 2523.04, the output is 'Two thousand five hundred twenty-three and 04/100 dollars'
 */
var inspect = require('eyespect').inspector()
var getWordsForThreeDigitNumber = require('./getWordsForThreeDigitNumber')
var magnitudeWords = ['', 'thousand', 'million', 'billion', 'trillion']
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
  var groups;
  if (number === 0) {
    return 'zero'
  }

  // split the input number into three digit groups
  groups = []
  while (number > 0) {
    var digits = number % 1000
    groups.push(digits)
    number = Math.floor(number / 1000);
  }
  groups.reverse()
  var index = groups.length - 1
  var output = groups.reduce(function(a, group) {
    var words = getWordsForThreeDigitNumber(group)
    // skip any empty group since ta magnitude word should not be added if the group is empty
    if (!words) {
      return a
    }
    var magnitude = magnitudeWords[index]
    var prefix = [words, magnitude].join(' ')
    index -= 1
    return a += prefix + ' '
  }, '')
  return output.trim()
}


function getFractionalDollars(input) {
  var scaled = input * 100
  var numerator = String(Math.floor(scaled % 100))
  numerator = formatNumerator(numerator)
  var fractionalString = [numerator, 100].join('/')
  return fractionalString
}

function formatNumerator(input) {
  if (input < 10) {
    return '0' + String(input)
  }
  return input
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
