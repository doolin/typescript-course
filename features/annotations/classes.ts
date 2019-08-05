class Vehicle {
  drive(): void {
    console.log('driving');
  }

  honk(): void {
    console.log('honking');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();