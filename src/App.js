import React, { useState } from "react";
import './App.css';

function sumNumbers(sum, num) {
  return sum + num;
}
function sumEvenNumbers(array) {
  let newArray = array.filter(x => { return x % 2 == 0 })
  return newArray.reduce(sumNumbers)
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

function longWords(array) {
  return array.filter(x => x.length > 5)
}
console.log(longWords(["Ivor", "Hana", "Jasmin", "Enciklopedija"]));

function specificProperty(array) {
  return array.filter(x => "isActive" in x)
}
console.log(specificProperty([{ id: 1, isActive: true }, { id: 2, isActive: false }, { id: 3, name: "Ivor" }]));

function productNumbers(product, num) {
  return product * num;
}
function productAllNumbers(array) {
  return array.reduce(productNumbers)
}
console.log(productAllNumbers([1, 2, 3, 4, 5]));

function concatStrings(concat, string) {
  return concat + string
}
function concatAllStrings(array) {
  return array.reduce(concatStrings)
}
console.log(concatAllStrings(["Ivor", "Djerbez"]));

function propertyValue(array) {
  return array.map(x=> x.name)
}
console.log(propertyValue([{id:1, name:"Ivor"}, {id:2, name:"Jasmin"}, {id:3, name:"Hana"}]));

function maxNumber(prev,cur) {
  return prev > cur ? prev : cur;
}
function returnLargestNumber(array) {
  return array.reduce(maxNumber)
}
console.log(returnLargestNumber([1,2,3,4,5]));

function findKeys (array) {
  return array.map(x=> Object.keys(x))
}
console.log(findKeys([{id:1}, {id:2, name:"Jasmin"}, {id:3, name:"Hana"}, ]));

function minNumber(prev,cur) {
  return prev < cur ? prev : cur;
}
function returnSmallestNumber(array) {
  return array.reduce(minNumber)
}
console.log(returnSmallestNumber([1,2,3,4,5]));

function findFirst(array) {
  return array.find(x => "isActive" in x)
}
console.log(findFirst([{ id: 1, isActive: true }, { id: 2, isActive: false }, { id: 3, name: "Ivor" }]));
function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
