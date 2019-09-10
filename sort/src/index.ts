// compile with tsc index.ts
// can run with tsc -w
class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {

  }
}

const sorter = new Sorter([1, 2, 3, 4]);
sorter.sort();
console.log(sorter.collection);