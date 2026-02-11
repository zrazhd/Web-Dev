// Sum numbers from the visitor
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );



// Repeat until the input is a number
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);


// A random number from min to max
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );


// A random integer from min to max
function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );