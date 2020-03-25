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
  console.log('Target:', target);
  console.log('Key: ', key);
}
