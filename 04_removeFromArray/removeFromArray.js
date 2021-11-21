const { promisify } = require("util");

const removeFromArray = function (array, ...items) {
  const forEach = promisify(items.forEach);

  let itemLength = array.length;

  while (itemLength--) {
    let arrayLength = array.length;

    while (arrayLength--) {
      if (array[arrayLength] === items[itemLength]) {
        array.splice(arrayLength, 1);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
