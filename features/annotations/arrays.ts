const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with `map`
const cm = carMakers.map((car: string): string => {
  return car.toUpperCase();
});

console.log(cm);

const carsByMake: string[][] = [ 
  ['f150'],
  ['corolla'],
  ['camaro']
];