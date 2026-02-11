// Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


// Filter range
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr1 = [5, 3, 8, 1];

let filtered = filterRange(arr1, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr1 ); // 5,3,8,1 (not modified)



// Filter range "in place"
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]



// Sort in decreasing order
let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

alert( arr3 );



// Copy and sort array
function copySorted(arr) {
  return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr4 );


// Sort users by age
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr5 = [ pete, john, mary ];

sortByAge(arr);

alert(arr5[0].name); // John
alert(arr5[1].name); // Mary
alert(arr5[2].name); // Pete

