import 'reflect-metadata';

const plane = {
  color: 'red'
}

Reflect.defineMetadata('note', 'note metadata', plane);

console.log(plane);

const note = Reflect.getMetadata('note', plane);
console.log(note);