const repeatString = function(string, count) {
    if (count < 0) {
        return 'ERROR'
    }

    return new Array(count).fill(string).join('');
};

// Do not edit below this line
module.exports = repeatString;
