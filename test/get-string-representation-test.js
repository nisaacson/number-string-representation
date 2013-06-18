var should = require('should')
var getStringRepresentation = require('../lib/getStringRepresentation')
describe('Get String Representation', function () {
  it('should get string representation for example', function () {
    var input = 2523.04
    var desiredOutput = 'Two thousand five hundred twenty-three and 04/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation with no fractional part', function () {
    var input = 2523
    var desiredOutput = 'Two thousand five hundred twenty-three and 00/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation with where fractional part numerator does not need padding', function () {
    var input = 2523.14
    var desiredOutput = 'Two thousand five hundred twenty-three and 14/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation with where fractional part is zero', function () {
    var input = 2523.00
    var desiredOutput = 'Two thousand five hundred twenty-three and 00/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation where hundreds are not set', function () {
    var input = 1099
    var desiredOutput = 'One thousand ninety-nine and 00/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation for one million', function () {
    var input = 1000000
    var desiredOutput = 'One million and 00/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation for negative inputs', function () {
    var input = -2523.14
    var desiredOutput = 'Negative two thousand five hundred twenty-three and 14/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation for thousands', function () {
    var input = 1000
    var desiredOutput = 'One thousand and 00/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })

  it('should get string representation for value in hundreds', function () {
    var input = 954
    var desiredOutput = 'Nine hundred fifty-four and 00/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })
})
