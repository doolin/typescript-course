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
let car: Car = new Car();

// Object literal
let point: { x:number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations
// 1) Function which returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and
// initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// better
// let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}