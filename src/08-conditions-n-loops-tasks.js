function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 5 === 0) return 'Buzz';
  if (num % 3 === 0) return 'Fizz';
  return num;
}
function getFactorial(n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  }
  for (let i = n; i >= 1; i -= 1) {
    answer *= i;
  }
  return answer;
}
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) return true;
  return false;
}
function doRectanglesOverlap(rect1, rect2) {
  const px = rect1.left;
  const py = rect1.top;
  const px1 = rect1.left + rect1.width;
  const py1 = rect1.top - rect1.height;
  const px2 = rect2.left;
  const py2 = rect2.top;
  const px3 = rect2.left + rect2.width;
  const py3 = rect2.top - rect2.height;
  if (px === px1 || py === py1
        || px2 === px3 || py2 === py3) {
    return false;
  }
  if (px >= px3 || px2 >= px1) {
    return false;
  }
  if (py1 >= py2 || py3 >= py) {
    return false;
  }
  return true;
}
function isInsideCircle(circle, point) {
  if (((circle.center.x - point.x) ** 2)
  + ((circle.center.y - point.y) ** 2) < (circle.radius ** 2)) return true;
  return false;
}
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const ad = str.lastIndexOf(str.charAt(i));
    const ac = str.indexOf(str.charAt(i));
    if (i === ad && i === ac) return str.charAt(i);
  }
  return null;
}
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let ax = 0;
  let bx = 0;
  if (a >= b) {
    bx = a;
    ax = b;
  } else { ax = a; bx = b; }
  let str = '';
  if (isStartIncluded === true) str += `[${ax}, ${bx}`;
  else str += `(${ax}, ${bx}`;
  if (isEndIncluded === true) str += ']';
  else str += ')';
  return str;
}
function reverseString(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    rev += str.charAt(i);
  }
  return rev;
}
function reverseInteger(num) {
  const str = num.toString();
  let rev = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    rev += str.charAt(i);
  }
  rev = Number(rev);
  return rev;
}
function isCreditCardNumber(ccn) {
  const check = ccn % 10;
  const ccn1 = parseInt(ccn / 10, 10);
  let sum = 0;
  const num = ccn1.toString().split('');
  for (let i = 0; i < num.length; i += 2) {
    num[num.length - i - 1] = num[num.length - i - 1] * 2;
    if (num[num.length - i - 1] > 9) {
      num[num.length - i - 1] = parseInt(num[num.length - i - 1] / 10, 10)
      + (num[num.length - i - 1] % 10);
    }
  }
  for (let j = 0; j < num.length; j += 1) {
    sum += parseInt(num[j], 10);
  }
  if (10 - (sum % 10) === check) return true;
  return false;
}
function getDigitalRoot(num) {
  let num1 = num;
  while (num1 > 9) {
    let sum = 0;
    while (num1 > 9) {
      sum += num1 % 10;
      num1 = parseInt(num1 / 10, 10);
    }
    sum += num1;
    num1 = sum;
  }
  return num1;
}
function isBracketsBalanced(str) {
  if (str.length % 2 === 1) return false;
  let i = 0;
  while (i < str.length / 2) {
    if (str[i] === '{' && str[str.length - i - 1] === '}') i += 1;
    else if (str[i] === '(' && str[str.length - i - 1] === ')') i += 1;
    else if (str[i] === '[' && str[str.length - i - 1] === ']') i += 1;
    else if (str[i] === '<' && str[str.length - i - 1] === '>') i += 1;
    else return false;
  }
  return true;
}
function toNaryString(num, n) {
  return num.toString(n);
}
function getCommonDirectoryPath() {
  throw new Error('Not implemented');
}
function getMatrixProduct() {
  throw new Error('Not implemented');
}
function evaluateTicTacToePosition(position) {
  const first = position[0][0];
  const second = position[0][1];
  const third = position[0][2];
  const fourth = position[1][0];
  const fifth = position[1][1];
  const six = position[1][2];
  const seven = position[2][0];
  const eight = position[2][1];
  const nine = position[2][2];
  if (first === second && second === third && first !== undefined) return first;
  if (fourth === fifth && fifth === six && fourth !== undefined) return fourth;
  if (seven === eight && eight === nine && seven !== undefined) return seven;
  if (first === fourth && first === seven && first !== undefined) return first;
  if (second === fifth && fifth === eight && second !== undefined) return second;
  if (third === six && six === nine && third !== undefined) return third;
  if (first === fifth && first === nine && first !== undefined) return first;
  if (seven === fifth && seven === third && seven !== undefined) return seven;
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,

  getCommonDirectoryPath,
  getMatrixProduct,

  evaluateTicTacToePosition,
};
