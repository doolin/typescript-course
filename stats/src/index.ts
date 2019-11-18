import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// const reader = new MatchReader('football.csv');
// reader.read();

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(matchReader.matches);

console.log(`Man United won ${manUnitedWins} games`)