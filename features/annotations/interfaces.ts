interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; 
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

// const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);