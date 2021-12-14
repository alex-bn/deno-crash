// Object types

// const user = {
//   name: 'Zura',
//   age: 28
// }

// user.surname = ''; // Error
// user.age = 29 // OK

// let user: {
//   name: string,
//   age: number
//   [key: string]: any
// };

// user = {
//   name: 'Zura',
//   age: 18,
//   surname: ''
// }

// function getId(object: { id: number }): number {
//   return object.id
// }

// let object: { id: number }

// const user = { id: 1, name: 'Zura', age: 28 }
// console.log(getId(user)); // 1

// // Interfaces
// interface Person {
//   name: string;
//   readonly age: number;
//   [key: string]: any;
//   hello(): string
// }

// let user: Person = {
//   name: 'Zura',
//   age: 28,
//   surname: '',
//   hello() {
//     return `Hello from ${this.name}`
//   }
// }

// user.age = 20 // Error

