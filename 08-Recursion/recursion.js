function factorialIterative(num) {
  let result = 1;

  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

function fib(num) {
  if (num === 0 || num === 1) return 1;
  else return fib(num - 1) + fib(num - 2);
}

function type(val) {
  let typ = Object.prototype.toString.call(val).slice(8, -1);
  if (typ === "Undefined") return "Undefined";
  if (typ === "Null") return 'Null';
  if (typ === 'Boolean') return 'Boolean';
  if (typ === 'Number') return 'Number';
  if (typ === 'String') return 'String';
  if (typ === 'Function') return 'Function';
  if (typ === 'Array') return 'Array';
  if (typ === 'Object') return 'Object';
}

function stringify(val) {
  let typ = type(val);

  if (typ === 'String') return '"' + val + '"';
  else if (typ === 'Array') {
    let arr = val.map(elem => stringify(elem));
    return '[' + arr.join(',') + ']';
  } else if (typ === 'Object') {
    let arr2 = Object.keys(val).map(key => '"' + key + '": ' + stringify(val[key]));
    return '{' + arr2.join(',') + '}';
  }
  else return '' + val;
}