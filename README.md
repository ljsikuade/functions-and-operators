# functions-and-operators

Functions and operators exercises. To run

1. Fork repo
2. Clone forked repo to local machine
4. Solve the exercises one at a time and do a git commit and push after each one
5. Aim to use the right array method where possible instead of for/while loops
6. Submit a `Pull Request` after first push this will run tests on the server and let you know if the tests are passing.

Exercises can be debugged in browser by opening `index.html`.

To run tests locally, make sure you have `node` and `npm` installed. You can install it from [https://nodejs.org/en/](https://nodejs.org/en/)

1. Run `npm install` - you only need to run this once after cloning to fetch the external libraries used for testing
2. Run `npm test` - this will run the actual tests

The tests are located in `test/index.test.js`. To run a test for only single function, you can change the test function name from `test` to `test.only`. This will limit the amount of output you receive from each test run and make it easier to focus on the function you are working on.

for example change
```
test('Add', () => {
  const result = add( 2, 3 );

  expect( result ).toEqual( 5 );
});
```

to

```
test.only('Add', () => {
  const result = add( 2, 3 );

  expect( result ).toEqual( 5 );
});
```
