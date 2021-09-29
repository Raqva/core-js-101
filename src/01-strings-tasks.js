function concatenateStrings(value1, value2) {
  const conc = value1.concat(value2);
  return conc;
}
function getStringLength(value) {
  return value.length;
}
function getStringFromTemplate(firstName, lastName) {
  const fullName = `Hello, ${firstName} ${lastName}!`;
  return fullName;
}
function extractNameFromTemplate(value) {
  const la = value.indexOf('!');
  const na = value.substr(7, la - 7);
  return na;
}
function getFirstChar(value) {
  return value.charAt(0);
}
function removeLeadingAndTrailingWhitespaces(value) {
  return (value.trim());
}
function repeatString(value, count) {
  const last = value.repeat(count);
  return last;
}
function removeFirstOccurrences(str, value) {
  const ind1 = str.indexOf(value);
  const first = str.substr(0, ind1);
  const second = str.substr(ind1 + value.length, str.length - ind1 - value.length);
  const ful = first.concat(second);
  return ful;
}
function unbracketTag(str) {
  const index = str.indexOf('<');
  let first = str.substring(0, index);
  const second = str.substring(index + 1, str.length);
  first = first.concat(second);
  const ind = first.indexOf('>');
  let third = first.substring(0, ind);
  const fourth = first.substring(ind + 1, str.length);
  third = third.concat(fourth);
  return third;
}
function convertToUpperCase(str) {
  return str.toUpperCase();
}
function extractEmails(str) {
  const myArr = str.split(';');
  return myArr;
}
function getRectangleString(width, height) {
  let firstLine = '┌';
  let middleLine = '│';
  let lastLine = '└';
  for (let i = 0; i < width - 2; i += 1) {
    firstLine += '─';
    middleLine += ' ';
    lastLine += '─';
  }
  firstLine += '┐\n';
  middleLine += '│\n';
  lastLine += '┘\n';
  let final = firstLine;
  for (let b = 0; b < height - 2; b += 1) {
    final += middleLine;
  }
  final += lastLine;
  return final;
}
function encodeToRot13(str) {
  let final = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) >= 'a') {
      if (str.charAt(i) < 'n') final += String.fromCharCode(str.charCodeAt(i) + 13);
      else final += String.fromCharCode(str.charCodeAt(i) - 13);
    } else
    if (str.charAt(i) >= 'A' && str.charAt(i) < 'N') final += String.fromCharCode(str.charCodeAt(i) + 13);
    else if (str.charAt(i) >= 'A') final += String.fromCharCode(str.charCodeAt(i) - 13);
    else final += str.charAt(i);
  }
  return final;
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function getCardId(value) {
  const dec = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
  return dec.indexOf(value);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
