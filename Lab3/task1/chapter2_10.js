
// Show the sign
let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


// Rewrite 'if' into '?'
let result = (a + b < 4) ? 'Below' : 'Over';


// Rewrite 'if..else' into '?'
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';