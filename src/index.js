module.exports = function reverse(n) {
    let str = Math.abs(n).toString().split("").reverse().join("");
    return Number(str);
};
