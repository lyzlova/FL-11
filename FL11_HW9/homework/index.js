function getNumbers(str) {
  let rull = /\d/g;
  if (str.match(rull) === null) {
    return [];
  }
  return str.match(rull);
}
console.log(getNumbers('strin'));
console.log(getNumbers('n1um3ber95'));

function findTypes(...args) {
  let obj = {
    number: 0,
    string: 0,
    object: 0,
  };

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'object') {
      obj.object += 1;
    }
    if (typeof args[i] === 'number') {
      obj.number += 1;
    }
    if (typeof args[i] === 'string') {
      obj.string += 1;
    }
  }

  return obj;
}
console.log(findTypes('number'));
console.log(findTypes(null, 5, 'hello'));

function executeforEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
  return;
}
executeforEach([1, 2, 3], function el(el) {
  console.log(el);
});

function mapArray(arr, fn) {
  let newArr = [];

  executeforEach(arr, function(el) {
    newArr.push(fn(el));
  });

  return newArr;
}

function elPlus(el) {
  return el + 3;
}

console.log(mapArray([2, 5, 8], elPlus));

function filterArray(arr, fn) {
  let newArr = [];

  executeforEach(arr, function(el) {
    if (fn(el)) {
      newArr.push(el);
    }
  });
  return newArr;
}

function elMoreThree(el) {
  return el > 3;
}

console.log(filterArray([2, 5, 8], elMoreThree));

function showFormattedDate(date) {
  let manth = date.toLocaleString('en-us', {
    month: 'short',
  });
  let day = date.getDate();
  let year = date.getFullYear();

  let newDate = `Date: ${manth} ${day} ${year}`;
  return newDate;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate(date) {
  if (isNaN(Date.parse(date))) {
    return false;
  }
  return true;
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

function daysBetween() {
  let dateASeconds = arguments[0] / 1000;
  let dateBSeconds = arguments[1] / 1000;
  let difference = Math.abs(parseInt(dateASeconds - dateBSeconds));
  let day = Math.ceil(difference / 60 / 60 / 24);
  return day;
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

function keys(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty) {
      arr.push(key);
    }
  }
  return arr;
}

let objKeys = {
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3,
};
console.log(keys(objKeys));

function values(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
console.log(values(objKeys));

let code = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    'birthday ': '2016-03-18T00:00:00',
    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    'birthday ': '1991-02-11T00:00:00',
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    'birthday ': '1984-04-17T00:00:00',
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    'birthday ': '1994-04-17T00:00:00',
    eyeColor: 'green',
    name: 'George',
    favoriteFruit: 'banana',
  },
];

let data = [];

for (let obj of code) {
  for (let key in obj) {
    if (key === 'birthday ') {
      data.push(obj[key]);
    }
  }
}

function getAmountOfAdultPeople(data) {
  let dayNow = new Date();
  let result;
  let newArr = [];

  for (let i = 1; i < data.length; i++) {
    result = daysBetween(dayNow, new Date(data[i]));
    newArr.push(result);
  }
  return newArr.length;
}

console.log(getAmountOfAdultPeople(data));
