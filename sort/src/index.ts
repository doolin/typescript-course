// compile with tsc index.ts
// can run with tsc -w
class Sorter {
  constructor(public collection: number[] | string | LinkedList) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        if (this.collection instanceof LinkedList) {
          
        }


    // if collection is an array of numbers
    if (this.collection instanceof Array) {

        if (this.collection[j] > this.collection[j+1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = temp;
        }
      }
    }
  }
    // if collection is a string
    // need logic for comparing and swapping characters
    if (typeof this.collection === 'string') {
      
    }
  }
}

const sorter = new Sorter([1, 3, 2, 4]);
sorter.sort();
console.log(sorter.collection);