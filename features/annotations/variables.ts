// let is used for demonstration of how types work,
// one would normally use const here.
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

// name is same as type
let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {
};
lat car: Car = new Car();

// Object literal
let point: { x:number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber = (i: number) => {
  console.log(i)
}