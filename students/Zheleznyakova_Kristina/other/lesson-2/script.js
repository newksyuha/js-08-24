class Hamburger {
    constructor(size='small', stuffing='cheese', ...topping) {
        this.size     = size;
        this.stuffing = stuffing;
        this.topping  = topping;
        this.price    = null;
        this.calorie  = null;
    }

    /**
     * Убрать добавку
     */
    removeTopping() {
        return this.topping = null;
    }

    /**
     * Получить список добавок
     */
    getToppings() {
        return `Toppings are '${this.topping.join(', ')}'.`
    }

    /**
     * Узнать размер гамбургера 
     */
    getSize() {
        return `Size of Hamburger is '${this.size}'.`
    }

    /**
     * Узнать начинку гамбургера
     */
    getStuffing() {
        return `Stuffing of Hamburger is '${this.stuffing}'.`
    }

    /**
     * Узнать цену
     */
    calculatePrice() {
        if   (this.size === 'small') this.price += 50;
        else this.price += 100;

        if      (this.stuffing === 'cheese') this.price += 10;
        else if (this.stuffing === 'salad')  this.price += 20;
        else    this.price += 15;

        if (this.topping.includes('mayonnaise')) this.price += 20;
        if (this.topping.includes('condiment'))  this.price += 15;

        return `Price is ${this.price} rub.`;
    }

    /**
     * Узнать калорийность
     */
    calculateCalories() {
        if   (this.size === 'small') this.calorie += 20;
        else this.calorie += 40;

        if      (this.stuffing === 'cheese') this.calorie += 20;
        else if (this.stuffing === 'salad')  this.calorie += 5;
        else    this.calorie += 10;

        if (this.topping.includes('mayonnaise')) this.calorie += 5;

        return `Calories are ${this.calorie}.`;
    }
}
 
let food = new Hamburger('small', 'salad', 'mayonnaise', 'condiment');

console.log(food.calculatePrice(),'\n' + food.calculateCalories());
console.log(food.getStuffing(),'\n' + food.getToppings());



