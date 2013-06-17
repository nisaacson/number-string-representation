var should = require('should')
var getStringRepresentation = require('../lib/getStringRepresentation')
describe('Get String Represenation', function () {
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

  it('should get string representation for negative inputs', function () {
    var input = -2523.14
    var desiredOutput = 'Negative two thousand five hundred twenty-three and 14/100 dollars'
    var output = getStringRepresentation(input)
    output.should.eql(desiredOutput)
  })
})
