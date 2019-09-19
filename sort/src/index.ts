// compile with tsc index.ts
// can run with tsc -w
import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1,5,3,6,]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);