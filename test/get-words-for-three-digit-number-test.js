var should = require('should')
var getWordsForThreeDigitNumber = require('../lib/getWordsForThreeDigitNumber')
describe('Get words for three digit number', function () {
    it('should get empty string for zero', function () {
    var input = 0
    var desiredOutput = ''
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })

  it('should get words for single digit', function () {
    var input = 7
    var desiredOutput = 'seven'
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })
  it('should get words for teens only', function () {
    var input = 17
    var desiredOutput = 'seventeen'
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })
  it('should get words for hundreds and teens', function () {
    var input = 218
    var desiredOutput = 'two hundred eighteen'
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })
  it('should get words for hundreds and tens and units', function () {
    var input = 263
    var desiredOutput = 'two hundred sixty-three'
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })
  it('should get words for hundreds, first tens and units', function () {
    var input = 223
    var desiredOutput = 'two hundred twenty-three'
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })
  it('should get words for hundreds and units', function () {
    var input = 405
    var desiredOutput = 'four hundred five'
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })

  it('should get words for hundreds only', function () {
    var input = 300
    var desiredOutput = 'three hundred'
    var output = getWordsForThreeDigitNumber(input)
    should.exist(output, 'no output returned')
    output.should.eql(desiredOutput)
  })
});
