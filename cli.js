#!/usr/bin/env node
var numberStringRepresenation = require('./')
var inspect = require('eyespect').inspector({pretty: false})
var usage = 'Convert a number to its string represenation.\nUsage: $0 --number 2523.04\nOutputs: "Two thousand five hundred twenty-three and 04/100 dollars'
var argv = require('optimist').usage(usage).alias('n', 'number').describe('number', 'the decimal representation of a number to convert into a string representation').demand('number').argv
var input  = argv.number
try {
  var output = numberStringRepresenation(input)
  console.log(output)
}

catch (err) {
  // stack traces look better with newlines printed instead of escaped \n characters
  var stack = err.stack
  delete err.stack
  inspect(err, 'error converting input number to string representation')
  console.log(stack)
}
