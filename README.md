# Number String Representation

[![Build Status](https://travis-ci.org/nisaacson/number-string-representation.png)](https://travis-ci.org/nisaacson/number-string-representation)
[![Dependency Status](https://david-dm.org/nisaacson/number-string-representation.png)](https://david-dm.org/nisaacson/number-string-representation)

Module to take an float amount and convert it to a string representation. For example if you have the number `2523.04`, this module will convert `2523.04` to `"Two thousand five hundred twenty-three and 04/100 dollars"`

# Installation

```bash
npm install -g number-string-representation
```

# Usage

The module can be used either as a stand-alone command line tool or within other javascript code. The module has only been tested on node.js versions 0.8 & 0.10 but should work in the browser without issues


As a command line tool
```bash
number-string-representation --number="2523.04"
# outputs "Two thousand five hundred twenty-three and 04/100 dollars"
```

For usage of the command line tool execute the command with no option parameters specified

```bash
number-string-representation
# prints out usage information
```

As a module within your own code

```javascript
var numberStringRepresentation = require('number-string-representation')
var input = 2523.04
var output = numberStringRepresentation(input)
console.log('output: %s', output)
```

# Negative numbers
If you supply a negative number as an input, the output will be prepended with the text 'Negative '

```javascript
var numberStringRepresentation = require('number-string-representation')
var input = -2523.04

// output === 'Negative two thousand five hundred twenty-three and 04/100 dollars'
Ne output = numberStringRepresentation(input)
console.log('output: %s', output)
```

When using negative numbers with the command line tool, you must pass them using both the equals sign and quotation marks around your value

```bash
number-string-representation --number="-2523.04"
# outputs "Negative two thousand five hundred twenty-three and 04/100 dollars"
```

The following will not work and will instead through an error:
```bash
number-string-representation --number "-2523.04"
```

# Test

```bash
# install the development dependencies
npm install
# run the tests
npm test
```
