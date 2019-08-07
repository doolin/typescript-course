class Vehicle {
  private drive(): void {
    console.log('driving');
  }

  public honk(): void {
    console.log('honking');
  }
}

class Car extends Vehicle {
   private drive(): void {
     console.log('car driving');
   }

   startDrivingProcess(): void {
     this.drive();
   }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.startDrivingProcess();
car.honk();
