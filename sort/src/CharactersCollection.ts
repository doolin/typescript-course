import { Sorter } from './sorter';

export class CharactersCollection extends Sorter {
  constructor(public data:string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const characters = this.data.split('');

    const leftChar = characters[left];
    characters[left] = characters[right];
    characters[right] = leftChar;

    this.data = characters.join('');
  }
}