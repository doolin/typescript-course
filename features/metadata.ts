import 'reflect-metadata';

class Plane {
  color: string = 'red';

  @markFunction
  fly(): void {
    console.log('flying');
  }
}

function markFunction(target: Plane, key:string) {
  Reflect.defineMetadata('secret', 123, target, key);
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

// const plane = {
//   color: 'red'
// }

// Reflect.defineMetadata('note', 'note for plane color metadata', plane, 'color');
// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);

// Reflect.defineMetadata('note', 'note metadata', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);