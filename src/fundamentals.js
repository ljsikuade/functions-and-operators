function add(a, b) {
  // add the two arguments and return the sum
  return a + b;
}

// Rewrite function as multiline arrow function with return statement
const addArrow = (a, b) => {
  // add the two arguments and return the sum
  return a + b;
};

// Rewrite function as single line arrow function without a return statement
const addSingleLineArrow = (a, b) => a + b;
// add the two arguments and return the sum

// Rewrite function as arrow function
const remainder = (number, divisor) => number % divisor;

// Rewrite function as arrow function
const exponential = (number, exponent) => Math.pow(number, exponent);
// this function is passed 2 arguments
// return first argument to the power of second argument
// hint: you may need to look up the exponention operator

// Rewrite function as arrow function
const smaller = (a, b) => {
  if (a === b) {
    return false;
  } else if (a > b) {
    return b;
  }
  return a;
};
// function receives two numbers as arguments
// return smaller number
// if numbers are the same return `false`

// Rewrite function as arrow function
const circumference = diameter => (Math.PI * diameter).toFixed(3);
// function receives the diameter
// calculate the circumference of the circle
// return number as a string with 3 decimal places

// Rewrite function as arrow function
const countOnes = onesAndZeros => {
  let ones = 0;
  for (let i = 0; i < onesAndZeros.length; i++) {
    if (onesAndZeros.charAt(i) === "1") {
      ones++;
      console.log(onesAndZeros.charAt(i));
    }
  }
  return ones;
  // onesAndZeros is a string which contains only `1` and `0`
  // return the number of `1`s in the string
};

// Rewrite function as arrow function
const dateFormat = date => {
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };

  let dateArr = date.split("-");
  //"03","11","2018"
  let day = parseInt(dateArr[0]);
  let month = months[dateArr[1]];
  let year = dateArr[2];
  return `${day} ${month} ${year}`;

  // function receives a date as a string
  // in the format yyyy-mm-dd
  // return date in format d mmmm yyyy
  // for example '03-11-2018' becomes '3 November 2018'
  // hint: you may want to use the string method `split`.
};

// Rewrite function as arrow function
const mulitplyAll = numbers => {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  console.log(accumulator);
  return numbers.reduce(reducer);

  // numbers is an array of numbers
  // multiply all numbers in array
  // and return the product
};

// Rewrite function as arrow function
const largestArea = rectangles => {
  // rectangles is an array of arrays,
  // where the inner contains two numbers
  // the first number is the height of a rectangle and
  // the second number is the width of a rectangle
  // for example [[4,2], [7, 1], [5, 5]] return 25
  // return the area of the largest rectangle
  // let areas = rectangles
  //   .map(x => x[0] * x[1])
  //   .sort(function compareNumbers(a, b) {
  //     return b - a;
  //   });
  // return areas[0];

  rectangles.reduce(function(biggest, rec) {
    // find area of rec
    // if area > biggest
    // biggest = area
  }, 1); // initialise biggest as 1
};

module.exports = {
  add,
  addArrow,
  addSingleLineArrow,
  remainder,
  exponential,
  smaller,
  circumference,
  countOnes,
  dateFormat,
  mulitplyAll,
  largestArea
};
