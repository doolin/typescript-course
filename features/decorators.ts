class Boat {
  //color: string = 'red';
  @testDecorator
  color = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('boat was sunk')
  pilot(): void {
    // This Error is just for demonstration purposes to illustrate
    // how the decorator works.
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
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

new Boat().pilot();
