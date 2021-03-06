class Vehicle {
  // color: string; // = 'red';

  // constructor(color: string) {
  //   this.color = color;
  // }
  
  constructor(public color: string) {
  }

  protected drive(): void {
    console.log('driving');
  }

  public honk(): void {
    console.log('honking');
  }
}

class Car extends Vehicle {

  constructor (public wheels: number, color: string) {
    super(color);
  }

   //private drive(): void {
   //  console.log('car driving');
   //}

   startDrivingProcess(): void {
     this.drive();
   }
}

const vehicle = new Vehicle('orange');
//vehicle.drive();
console.log(vehicle.color);
vehicle.honk();

const car = new Car(3, 'red');
car.startDrivingProcess();
car.honk();
