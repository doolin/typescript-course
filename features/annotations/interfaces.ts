const oldCivic = {
  name: 'civiv',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);