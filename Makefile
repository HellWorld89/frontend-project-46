.PHONY: test lint

install:
	npm ci

test:
	npm test

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage

test-yaml:
	npm test __tests__/genDiff.test.js