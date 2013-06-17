var should = require('should')
var numberStringRepresentation = require('../')
describe('Invalid Input', function() {
  it('should throw error when invalid input is passed as a parameter', function() {
    var input = 'foo';
    (function() {
      numberStringRepresentation(input)
    }).should.throw ();
  })
});
