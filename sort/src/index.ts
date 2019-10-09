// compile with tsc index.ts
// can run with tsc -w
import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1,5,3,6,]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('gsgsdb');
charactersCollection.sort();
console.log(charactersCollection.data);
 
const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);

linkedlist.sort();
linkedlist.print();