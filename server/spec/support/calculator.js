const methods = {
    plus: function (num1, num2) {
        return num1 + num2;
    },
    minus: function (num, minus) {
        return num - minus;
    },
    multiply: function (num, multi) {
        return num * multi;
    },
    divide: function (num, divider) {
        if (divider != 0) {
            return num / divider;
        } else return "Error - Invalid Divider";
    },
    power: function (num, power) {
        return num ** power;
    },
    modulus: function (num, mod) {
        return num % mod;
    },
    calcAny: function (expression) {
        return eval(expression);
    },
};

module.exports = methods;
