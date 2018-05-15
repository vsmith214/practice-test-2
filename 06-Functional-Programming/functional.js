let doubler = num => num * 2;

let map = (arr, func) => {
  let result = [];
  for (let val = 0; val < arr.length; val++) {
    result.push(func(arr[val]));
  }
  return result;
}

let filter = (arr, func) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) result.push(arr[i]);
  }
  return result;
}

let contains = (collection, val) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (val === collection[i]) return true;
    }
    return false;
  } else {
    for (let key in collection) {
      if (key === val || collection[key] === val) return true;
    }
    return false;
  }
}

let countWords = sentence => {
  return sentence.split(' ').length;
}

let countWordsInReduce = (acc, val) => {
  return acc += countWords(val);
}

function reduce(collection, start, func) {

  for (let i = 0; i < collection.length; i++) {
    start = func(start, collection[i]);
  }
  return start;
}

let sum = arr => {
  return reduce(arr, 0, function (a, b) { return a + b });
}

let every = (arr, fn) => {
  let bool = true;

  let checkValue = (start, val) => {
    return fn(val) && start;
  }

  return reduce(arr, bool, checkValue);
}

let any = (arr, fn) => {
  let bool = false;

  let checkValue = (start, val) => {
    return fn(val) || start;
  }

  return reduce(arr, bool, checkValue);
}