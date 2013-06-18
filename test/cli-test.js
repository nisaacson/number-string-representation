var should = require('should')
var exec = require('child_process').exec
var path = require('path')
describe('CLI test', function () {
  it('should convert number correctly', function (done) {
    var desiredOutput = 'Five thousand four hundred twenty-three and 04/100 dollars\n'
    var cliPath = path.join(__dirname,'../cli.js')
    var command = cliPath + ' --number="5423.04"'
    exec(command, function (err, stdout, stderr) {
      should.not.exist(err, 'error running cli tool: ' + JSON.stringify(err))
      stderr.should.eql('', 'nothing should be printed to stderr')
      stdout.should.eql(desiredOutput, 'wrong output printed to stdout')
      done()
    })
  })

  it('should convert max value correctly', function (done) {
    var desiredOutput = 'Nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine and 04/100 dollars\n'
    var cliPath = path.join(__dirname,'../cli.js')
    var command = cliPath + ' --number 999999999999999'
    exec(command, function (err, stdout, stderr) {
      should.not.exist(err, 'error running cli tool: ' + JSON.stringify(err))
      stderr.should.eql('', 'nothing should be printed to stderr')
      stdout.should.eql(desiredOutput, 'wrong output printed to stdout')
      done()
    })
  })

  it('should convert min value correctly', function (done) {
    var desiredOutput = 'Negative nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine and 04/100 dollars\n'
    var cliPath = path.join(__dirname,'../cli.js')
    var command = cliPath + ' --number="-999999999999999"'
    exec(command, function (err, stdout, stderr) {
      should.not.exist(err, 'error running cli tool: ' + JSON.stringify(err))
      stderr.should.eql('', 'nothing should be printed to stderr')
      stdout.should.eql(desiredOutput, 'wrong output printed to stdout')
      done()
    })
  })

  it('should give error when trying to convert values above max value', function (done) {
    var cliPath = path.join(__dirname,'../cli.js')
    var command = cliPath + ' --number 9999999999999999'
    exec(command, function (err, stdout, stderr) {
      should.exist(err, 'should get error when running cli tool')
      should.exist(stderr)
      stderr.should.match(/input parameter must be in range/)
      done()
    })
  })
  it('should give error when trying to convert values above below min value', function (done) {
    var cliPath = path.join(__dirname,'../cli.js')
    var command = cliPath + ' --number="-9999999999999999"'
    exec(command, function (err, stdout, stderr) {
      should.exist(err, 'should get error when running cli tool')
      should.exist(stderr)
      stderr.should.match(/input parameter must be in range/)
      done()
    })
  })
});
