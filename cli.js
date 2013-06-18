#!/usr/bin/env node

/**
 * make number-string-representation available as a command line binary tool
 * when the module is install globally using the "-g" or "--global" flag
 */
var numberStringRepresenation = require('./')
var usage, output, raw
var input = handleZero(process.argv)
if (input === undefined){
  usage = 'Convert a number to its string represenation.\nUsage: $0 --number="2523.04"\nOutputs: "Two thousand five hundred twenty-three and 04/100 dollars'
  input = require('optimist').usage(usage).describe('number', 'the decimal representation of a number to convert into a string representation').demand('number').argv.number
}
try {
  output = numberStringRepresenation(input)
  console.log(output)
}

catch (err) {
  // stack traces look better with newlines printed instead of escaped \n characters
  var stack = err.stack;
  delete err.stack
  console.error(err)
  console.error(stack)
  process.exit(1)
}

/**
 * handleZero
 *
 * Optimist has a bug where it cannot parse the value zero correctly.
 * Therefore the script manually handles the edge case of zero here
 *
 * @param  {String} argv the array of arguments passed to this script
 * @return {Integer} return the integer 0 if the script was called with the
 * number parameter set to zero. Otherwise return undefined and let Optimist
 * parse the number parameter
 *
 */
function handleZero(argv) {
  if (argv.length < 3 || argv.length > 4) {
    return undefined
  }
  var param = argv[argv.length-1]
  param = param.replace(/number/g, '')
  param = param.replace(/[="-]/g, '')
  if (param.length === 0) {
  return undefined
}
  var value = parseFloat(param)
  if (value === 0) {
    return 0
  }
  return undefined
}
