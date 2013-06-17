var smallWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tensWords = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
/**
 * getWordsForThreeDigitNumber
 * @param  {Number input a number between 0 and 999 inclusive
 * @return {String} the input number converted to its string representation
 */
module.exports = function (input) {
  var output = ''
  var hundreds = Math.floor(input/100)
  var tensUnits = input % 100
  var tens = Math.floor(tensUnits/10)
  var units = tensUnits % 10
  if (hundreds !== 0) {
    output += smallWords[hundreds] + ' hundred'
    if (tensUnits !== 0) {
      output += ' '
    }
  }
  if (tens >= 2) {
    output +=  tensWords[tens]
    if (units !== 0) {
      output += '-' + smallWords[units]
    }
  }
  else if (tensUnits !== 0) {
    output += smallWords[tensUnits]
  }
  return output
}
