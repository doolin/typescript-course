"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// const reader = new MatchReader('football.csv');
// reader.read();
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// console.log(matchReader.matches);
// console.log(`Man United won ${manUnitedWins} games`)
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), 
//new ConsoleReport()
new HtmlReport_1.HtmlReport());
var summary2 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);
