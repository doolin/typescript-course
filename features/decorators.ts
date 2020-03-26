class Boat {
  //color: string = 'red';
  color = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError
  pilot(): void {
    console.log('swish');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function() {
    try {
      method();
    } catch(e) {
      console.log('boat was sunk');
    }
  }
}

new Boat().pilot();
