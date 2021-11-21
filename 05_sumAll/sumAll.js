const sumAll = function (min, max) {

    if (typeof min !== 'number' || typeof max !== 'number') {
        return 'ERROR'
    }

    if (min < 0 || max < 0) {
        return 'ERROR'
    }

    const data = [min, max].sort((a, b) => a - b)

    let length = 0;
    let sum = 0;

    while (length < data[1] - data[0] + 1) {
        sum += data[0] + length

        length++
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
