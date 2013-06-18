#!/usr/bin/env node

/**
 * make number-string-representation available as a command line binary tool
 * when the module is install globally using the "-g" or "--global" flag
 */
var numberStringRepresenation = require('./')
var usage = 'Convert a number to its string represenation.\nUsage: $0 --number 2523.04\nOutputs: "Two thousand five hundred twenty-three and 04/100 dollars'
var argv = require('optimist').usage(usage).describe('number', 'the decimal representation of a number to convert into a string representation').demand('number').argv
var input  = argv.number
try {
  var output = numberStringRepresenation(input)
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
