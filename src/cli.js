#!/usr/bin/env node

const path = require('path');
const quotes = require(path.join(__dirname, 'data.json'));

function returnQuote() {
  return quotes[Math.floor((Math.random() * quotes.length))];
}

console.log(returnQuote());