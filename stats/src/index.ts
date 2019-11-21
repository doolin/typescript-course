import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
// import { MatchResult } from './MatchResult';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// const reader = new MatchReader('football.csv');
// reader.read();

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// console.log(matchReader.matches);
// console.log(`Man United won ${manUnitedWins} games`)

const summary = new Summary(
  new WinsAnalysis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);