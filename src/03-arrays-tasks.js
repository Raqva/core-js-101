function findElement(arr, value) {
  return arr.indexOf(value);
}
function generateOdds(len) {
  const arr = [];
  let one = 1;
  for (let i = 0; i < len; i += 1) {
    arr.push(one);
    one += 2;
  }
  return arr;
}
function doubleArray(arr) {
  const arr1 = [];
  for (let i = 0; i < 2; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      arr1.push(arr[j]);
    }
  }
  return arr1;
}
function getArrayOfPositives(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) arr1.push(arr[i]);
  }
  return arr1;
}
function getArrayOfStrings(arr) {
  const fin = [];
  arr.forEach((element) => {
    if (typeof (element) === 'string') fin.push(element);
  });
  return fin;
}
function removeFalsyValues(arr) {
  const arr1 = [];
  arr.forEach((element) => {
    if (element !== 0) {
      if (element !== false) {
        if (element !== '') {
          if (element !== undefined) { if (element !== null) if (Number(element) || typeof (element) === 'string') arr1.push(element); }
        }
      }
    }
  });
  return arr1;
}
function getUpperCaseStrings(arr) {
  const arr1 = [];
  arr.forEach((element) => {
    arr1.push(element.toUpperCase());
  });
  return arr1;
}
function getStringsLength(arr) {
  const arr1 = [];
  arr.forEach((element) => {
    arr1.push(element.length);
  });
  return arr1;
}
function insertItem(arr, item, index) {
  arr.join();
  arr.splice(index, 0, item);
  return arr;
}
function getHead(arr, n) {
  const arr1 = [];
  for (let i = 0; i < n; i += 1) {
    arr1.push(arr[i]);
  }
  return arr1;
}
function getTail(arr, n) {
  const arr1 = [];
  for (let i = arr.length - n; i < arr.length; i += 1) {
    arr1.push(arr[i]);
  }
  return arr1;
}
function toCsvText(arr) {
  let lastArr = '';
  for (let i = 0; i < arr.length; i += 1) {
    lastArr += arr[i].join();
    if (i !== arr.length - 1) lastArr += '\n';
  }
  return lastArr;
}
function toArrayOfSquares(arr) {
  const arr1 = [];
  arr.forEach((element) => {
    arr1.push(element * element);
  });
  return arr1;
}
function getMovingSum(arr) {
  const arr1 = [];
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
    arr1.push(sum);
  });
  return arr1;
}
function getSecondItems(arr) {
  const arr1 = [];
  let count = 1;
  arr.forEach((element) => {
    if (count % 2 === 0) arr1.push(element);
    count += 1;
  });
  return arr1;
}
function propagateItemsByPositionIndex(arr) {
  const arr1 = [];
  let count = 1;
  arr.forEach((element) => {
    for (let i = 0; i < count; i += 1) {
      arr1.push(element);
    }
    count += 1;
  });
  return arr1;
}
function get3TopItems(arr) {
  const arr1 = [];
  arr.sort((a, b) => a - b);
  arr1.push(arr[arr.length - 1], arr[arr.length - 2], arr[arr.length - 3]);
  return arr1;
}
function getPositivesCount(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element > 0) sum += 1;
  });
  return sum;
}
function sortDigitNamesByNumericOrder() {
  throw new Error('Not implemented');
}
function getItemsSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}
function getFalsyValuesCount(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element === 0) sum += 1;
    else if (element === false) sum += 1;
    else if (element === '') sum += 1;
    else if (element === undefined) sum += 1;
    else if (element === null) sum += 1;
    else if (!Number(element) && typeof (element) !== 'string') sum += 1;
  });
  return sum;
}
function findAllOccurences(arr, item) {
  let sum = 0;
  arr.forEach((element) => {
    if (element === item) sum += 1;
  });
  return sum;
}
function toStringList(arr) {
  return arr.join();
}
function sortCitiesArray(arr) {
  const arr3 = arr;
  const arr2 = [];
  arr.forEach((element) => {
    arr2.push(element.country + element.city);
  });
  arr2.sort();
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 1; j < arr2[i].length; j += 1) {
      if (arr2[i].charCodeAt(j) < 97) {
        arr3[i].country = arr2[i].substr(0, j);
        arr3[i].city = arr2[i].substr(j, arr2[i].length - j);
        break;
      }
    }
  }
  return arr3;
}
function getIdentityMatrix(n) {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    const line = [];
    for (let j = 0; j < n; j += 1) {
      if (j === i) line.push(1);
      else line.push(0);
    }
    arr.push(line);
  }
  return arr;
}
function getIntervalArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr;
}
function distinct(arr) {
  const arr1 = [...new Set(arr)];
  return arr1;
}
function group() {
  throw new Error('Not implemented');
}
function selectMany() {
  throw new Error('Not implemented');
}
function getElementByIndexes() {
  throw new Error('Not implemented');
}
function swapHeadAndTail(arr) {
  const orig = arr.join('');
  let first = '';
  let middle = '';
  let second = '';
  if (orig.length % 2 === 0) {
    first = orig.substr(0, orig.length / 2);
    second = orig.substr(orig.length / 2, orig.length / 2 + 1);
  } else {
    first = orig.substr(0, orig.length / 2);
    second = orig.substr(orig.length / 2 + 1, orig.length / 2);
    middle = orig.charAt(orig.length / 2);
  }
  const arr1 = second + middle + first;
  return Array.from(arr1);
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,

  group,
  selectMany,
  getElementByIndexes,

  swapHeadAndTail,
};
