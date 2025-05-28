.PHONY: test lint

install:
	npm ci

test:
	npm test

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage