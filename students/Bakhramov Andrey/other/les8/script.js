const sum = (x, y) => {
    let res;
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x + y;

} 

const minus = (x, y) => {
    let res;
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x - y;

} 

const mnojit = (x, y) => {
    let res;
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x * y;

} 

const dv = (x, y) => {
    let res;
    if (y === 0 || y === null) {return NaN}
    if ((typeof x) === "string" || (typeof y) === "string") {return NaN};
    if ((typeof x) === "undefined" || (typeof y) === "undefined") {return NaN};
    return res = x/y;

} 



module.exports = { sum, minus, mnojit, dv };
