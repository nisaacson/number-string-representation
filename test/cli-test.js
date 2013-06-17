var should = require('should')
var exec = require('child_process').exec
var path = require('path')
describe('CLI test', function () {
  it('should convert number correctly', function (done) {
    var desiredOutput = 'Five thousand four hundred twenty-three and 04/100 dollars\n'
    var cliPath = path.join(__dirname,'../cli.js')
    var command = cliPath + ' --number 5423.04'
    exec(command, function (err, stdout, stderr) {
      should.not.exist(err, 'error running cli tool: ' + JSON.stringify(err))
      stderr.should.eql('', 'nothing should be printed to stderr')
      stdout.should.eql(desiredOutput, 'wrong output printed to stdout')
      done()
    })
  })
});
