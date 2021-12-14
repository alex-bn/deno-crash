// class Person {
//   name: string;
//   readonly age: number;

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

class Person {
  constructor(
    public name: string,
    public readonly age: number,
  ) {
  }
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
}

// static properties: a static property is shared among all instances of a class

// class Employee {
//   static headcount: number = 0

//   constructor(
//     private firstName: string,
//     private lastName: string,
//     private jobTittle: string) {

//     Employee.headcount++
//   }
// }

// let john = new Employee('John', 'Doe', 'Developer')
// let jane = new Employee('Jane', 'Doe', 'Dev-Ops')
// console.log(Employee.headcount);

// static methods

class Employee {
  // the value cannot be changed outside of the class without creating a new Employee object
  private static headcount: number = 0

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTittle: string) {

    Employee.headcount++
  }

  public static getHeadcount() {
    return Employee.headcount
  }
}

let john = new Employee('John', 'Doe', 'Developer')
let jane = new Employee('Jane', 'Doe', 'Dev-Ops')
console.log(Employee.getHeadcount());

/////////////

// // Another example: static property

// class Circle {
//   static pi: number = 3.14;

//   static calculateArea(radius: number) {
//     return this.pi * radius * radius
//   }
// }

// // the above static property, pi, can be accessed using Circle.pi

// console.log(Circle.pi) // 3.14
// console.log(Circle.calculateArea(5)); // 78.5

// // Static and Non-Static Members
// class Circle {
//   static pi: number = 3.14

//   pi = 3
// }

// // static field will be accessed using dot notation
// console.log(Circle.pi); // returns 3.14

// // non-static filed will be accessed using an object
// let circleObject = new Circle;
// console.log(circleObject.pi); // returns 3

// Static and Non-Static Members, let's see another example:
class Circle {
  static pi = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  calculateCircumference(radius: number): number {
    return 2 * Circle.pi * radius
  }
}

console.log(Circle.calculateArea(5));

let circleObject = new Circle;
console.log(circleObject.calculateCircumference(5));
// circleObject.calculateArea(8) // Error