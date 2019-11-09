const addOne = (a: number): number => {
  return a + 1;
};

const addTwo = (a: number): number => {
  return a + 2;
};

const add = (a: number, b: number): number => {
  return a + b;
}

console.log(`HERE IS THE ADD FUNCTION: $(add(10, 1)))`);

class HoldNumber {
  data: number;
}

const holdNumber = new HoldNumber();

holdNumber.data = 123;

class HoldString {
  data: string;
}

holdString = new HoldString();
HoldString.data = 'foo';

class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber1 = new HoldAnything<number>();
holdNumber1.data = 123;

const holdString1 = new HoldAnything<string>();
holdString1.data = '123';