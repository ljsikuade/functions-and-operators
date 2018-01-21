const {
  add,
  multiply,
  average,
  remainder,
  exponential,
  laxEquality,
  strictEqual,
  smaller,
  isDivisibleBy,
  evens
} = require('../src');

test('Add', () => {
  const result = add( 2, 3 );

  expect( result ).toEqual( 5 );
});

test('Multiply', () => {
  const result = multiply( 4, 5, 3, 7 );

  expect( result ).toEqual( 420 );
});

test('Average', () => {
  const result = average( 2.2, 1.68, 1.76, 1.54, 2 );

  expect( parseFloat( Number( result ).toFixed( 3 ) ) ).toEqual( 1.836 );
});

test('Remainder', () => {
  const result = remainder( 17, 5 );

  expect( result ).toEqual( 2 );
});

test('Exponential', () => {
  const result = exponential( 7, 4 );

  expect( result ).toEqual( 2401 );
});

test('Lax equality ', () => {
  const result = laxEquality( 10, "10" );
  expect( result ).toEqual( true );

  const result2 = laxEquality( 5, 5 );
  expect( result2 ).toEqual( false );
});

test('Strict equal ', () => {
  const result1 = strictEqual( 10, "10", 10 );
  expect( result1 ).toEqual( false );

  const result2 = strictEqual( 5, 5, 5 );
  expect( result2 ).toEqual( true );

  const result3 = strictEqual( true, true, 5 );
  expect( result3 ).toEqual( false );

  const result4 = strictEqual( 10, 'hello', 'hello' );
  expect( result4 ).toEqual( false );
});

test('Smaller', () => {
  const result1 = smaller( 7, 7 );
  expect( result1 ).toEqual( true );

  const result2 = smaller( -7, 7 );
  expect( result2 ).toEqual( true );

  const result3 = smaller( 8, 7 );
  expect( result3 ).toEqual( 'smaller' );
});


test('Is divisible by', () => {
  const result1 = isDivisibleBy( 9, 4, 36 );
  expect( result1 ).toEqual( true );

  const result2 = isDivisibleBy( 9, 4, 35 );
  expect( result2 ).toEqual( false );

  const result3 = isDivisibleBy( 9, 8, 32 );
  expect( result3 ).toEqual( true );

  const result4 = isDivisibleBy( 4, 7, 32 );
  expect( result4 ).toEqual( true );
});

test('Evens', () => {
  const result1 = evens( 7, 7, 7, 7 );
  expect( result1 ).toEqual( false );

  const result2 = evens( 1, 2, 3, 4 );
  expect( result2 ).toEqual( false );

  const result3 = evens( 10, 10, 10, 10 );
  expect( result3 ).toEqual( true );

  const result4 = evens( 10, 10, 10, 11 );
  expect( result4 ).toEqual( false );
});
