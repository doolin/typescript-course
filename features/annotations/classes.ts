class Vehicle {
  drive(): void {
    console.log('driving');
  }

  honk(): void {
    console.log('honking');
  }
}

class Car extends Vehicle {
   drive(): void {
     console.log('car driving');
   }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
