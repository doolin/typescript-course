class Boat {
  color: 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  pilot(): void {
    console.log('swish');
  }
}
