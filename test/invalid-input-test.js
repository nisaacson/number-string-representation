var should = require('should')
var numberStringRepresentation = require('../')
describe('Input Validation', function() {
  it('should throw error when invalid input is passed as a parameter', function() {
    var input = 'foo';
    (function() {
      numberStringRepresentation(input)
    }).should.throw ();
  })

  it('should not throw error when valid input is passed as a parameter', function() {
    var input = 100;
    (function() {
      numberStringRepresentation(input)
    }).should.not.throw ();
  })

  it('should throw error when a number as a String is passed as a parameter', function() {
    var input = '100';
    (function() {
      numberStringRepresentation(input)
    }).should.throw ();
  })
});
