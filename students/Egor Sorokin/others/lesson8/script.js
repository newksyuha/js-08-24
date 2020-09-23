const add = (x, y) => {
    //Add one number to another
    if (parseInt(x) == x && parseInt(y) == y) {
        return parseInt(x) + parseInt(y);
    } else {
        return('Error')
    }
}

const substract = (x, y) => {
    //Substract one number from another
    if (parseInt(x) == x && parseInt(y) == y) {
        return parseInt(x) - parseInt(y);
    } else {
        return('Error')
    }
}

const multiply = (x, y) => {
    //Multiply one number to another
    if (parseInt(x) == x && parseInt(y) == y) {
        return parseInt(x) * parseInt(y);
    } else {
        return('Error')
    }
}

const divide = (x, y) => {
    //Divide one number by another
    if (parseInt(x) == x && parseInt(y) == y && y != 0) {
        return parseInt(x) / parseInt(y);
    } else {
        return('Error')
    }
}

module.exports = { add, substract, multiply, divide }