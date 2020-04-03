import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('flying');
  }
}

function get(path: string) {
  return function (target: Plane, key:string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);
    //router.get(path, target.prototype[key]);
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