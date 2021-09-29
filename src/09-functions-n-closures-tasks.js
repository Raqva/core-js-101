function getComposition() {
  throw new Error('Not implemented');
}
function getPowerFunction(x) {
  return function getResult(y) { return y ** x; };
}
function getPolynom() {
  throw new Error('Not implemented');
}
function memoize() {
  throw new Error('Not implemented');
}
function retry() {
  throw new Error('Not implemented');
}
function logger() {
  throw new Error('Not implemented');
}
function partialUsingArguments() {
  throw new Error('Not implemented');
}
function getIdGeneratorFunction(startFrom) {
  return function counter(){
    let start = startFrom;
    startFrom +=1;
    return start;
  }
}
module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
