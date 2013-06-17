# Number String Representation

Module to take an float amount and convert it to a string representation. For example if you have the number 2523.04, this module will convert 2523.04 to "Two thousand five hundred twenty-three and 04/100 dollars"

# Installation

```bash
npm install -g number-string-representation
```

# Usage

As a command line tool
```bash
number-string-representation 2523.04
# outputs "Two thousand five hundred twenty-three and 04/100 dollars"
```

As a module within your own code

```javascript
var numberStringRepresentation = require('number-string-representation')
var input = 2523.04
var output = numberStringRepresentation(input)
console.log('output: %s', output)

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
```

The following will not work:
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
