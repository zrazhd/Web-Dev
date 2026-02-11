// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}


// Replace "for" with "while"
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}


// Repeat until the input is correct
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


// Output prime numbers
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); // a prime
}