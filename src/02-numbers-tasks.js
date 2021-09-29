function getRectangleArea(width, height) {
  return width * height;
}
function getCicleCircumference(radius) {
  return 2 * radius * 3.141592653589793;
}
function getAverage(value1, value2) {
  const sum = value1 + value2;
  if (sum === 0) return 0;
  if (sum <= Number.MAX_VALUE) return sum / 2;
  return Number.MAX_VALUE;
}
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  if (x1 === x2 && y1 === y2) return 0;
  if (x1 === x2) return Math.abs(y1 - y2);
  if (y1 === y2) return Math.abs(x1 - x2);

  let one = Math.abs(x1 - x2);
  let two = Math.abs(y1 - y2);
  one *= one;
  two *= two;
  return Math.sqrt(one + two);
}
function getLinearEquationRoot(a, b) {
  if (b === 0) return 0;
  const b1 = b * (-1);
  return b1 / a;
}
function getAngleBetweenVectors(/* x1, y1, x2, y2 */) {
  throw new Error('Not implemented');
}
function getLastDigit(value) {
  return value % 10;
}
function parseNumberFromString(value) {
  return Number(value);
}
function getParallelipidedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}
function roundToPowerOfTen(num, pow) {
  const ten = 10 ** pow;
  const num1 = Math.round(num / ten);
  return num1 * ten;
}
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i += 1) { if (n % i === 0) return false; }
  return true;
}
function toNumber(value, def) {
  if ((Number(value))) return Number(value);
  return def;
}

module.exports = {
  getRectangleArea,
  getCicleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelipidedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
