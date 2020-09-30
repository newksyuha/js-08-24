const sum = (x, y) => {
    let res;
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x + y;

} 

const subst = (x, y) => {
    let res;
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x - y;

} 

const multi = (x, y) => {
    let res;
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x * y;

} 

const dived = (x, y) => {
    let res;
    if (y === 0 || y === null) {return NaN}
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x/y;

} 



module.exports = { sum, subst, multi, dived };