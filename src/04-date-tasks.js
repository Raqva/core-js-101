function parseDataFromRfc2822(value) {
  return Date.parse(value);
}
function parseDataFromIso8601() {
  throw new Error('Not implemented');
}
function isLeapYear(date) {
  if (date % 400 === 0) return true;
  if (Date % 100 === 0) return false;
  return date % 4 === 0;
}
function timeSpanToString() {
  throw new Error('Not implemented');
}
function angleBetweenClockHands() {
  throw new Error('Not implemented');
}


module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
