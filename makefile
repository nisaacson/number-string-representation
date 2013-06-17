MOCHA=node_modules/.bin/mocha
REPORTER?=tap
FLAGS=--reporter $(REPORTER)

test:
	$(MOCHA) $(shell find test/* -prune -name "*test.js") $(FLAGS)

invalid-input:
	$(MOCHA) test/invalid-input-test.js $(FLAGS)
get-string-representation:
	$(MOCHA) test/get-string-representation-test.js $(FLAGS)

get-words-for-three-digit-numbers:
	$(MOCHA) test/get-words-for-three-digit-number-test.js $(FLAGS)

cli:
	$(MOCHA) test/cli-test.js $(FLAGS)
.PHONY: test

