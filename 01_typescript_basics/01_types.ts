/*
Types:

number
string
boolean
null
undefined
any
void - common function
array
object
Enum

*/

// // Implicit types:
// let age = 15;
// let name = 'John';
// let isHuman = true;

// age = 16; // OK
// age = 'foo' // ERROR

// // Explicit types:
// let age: number;
// age = 15; // OK
// age = 'foo'; // ERROR
// age = false; // ERROR

// // Functions and types
// function add(a, b) {
//   return a + b;
// }

// add(1, 2); // 3
// add('1', '2'); // 12, but Logical error

// function add(a: number, b: number) {
//   return a + b;
// }
// add('1', '2'); // Compilation error
// add(1, 2); // 3

// null and undefined
// let n: null = null; // it can only take null -> not realistic
// let u: undefined = undefined; // it can only take undefined -> not realistic

// function someFunction ( n: number ) {
//   if ( n % 2 === 0 ) {
//     return 'even';
//   }
//   return null;
// }

// const value = someFunction(3)!;
// value.substring(1);

// // function with void
// function hello(name: string) {
//   console.log(`Hello from ${name}`);
// }

// const msg: string = hello( 'Zura' ); // type 'void is no assignable to type 'string'


// Array
let fruits = ['orange', 'apple', 'banana']
// fruits = true; // Error
// fruits[1] = true; // Error
// fruits[1] = 15; // Error
// fruits.push( 18 ) // Error
fruits.push('mango') // OK