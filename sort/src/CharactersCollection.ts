export class CharactersCollection {
  constructor(public data:string) {}

  get length() {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }
}