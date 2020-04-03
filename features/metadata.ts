import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('secret info')
  fly(): void {
    console.log('flying');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key:string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}


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