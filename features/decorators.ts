@classDecorator
class Boat {
  //color: string = 'red';
  @testDecorator
  color = 'red';

   @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('boat was sunk')
  pilot(@parameterDecorator speed: string): void {
    // This Error is just for demonstration purposes to illustrate
    // how the decorator works.
    // throw new Error();
    if (speed === 'fast') {
    console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number ) {
  console.log(key, index);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  console.log(target);
  console.log(key);
  console.log(method);

  desc.value = function() {
    try {
      method();
    } catch(e) {
      console.log(errorMessage);
    }
  }
}
}

new Boat().pilot('fast');
