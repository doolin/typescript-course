"use strict";
exports.__esModule = true;
// compile with tsc index.ts
// can run with tsc -w
var sorter_1 = require("./sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([1, 5, 3, 6,]);
var sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
