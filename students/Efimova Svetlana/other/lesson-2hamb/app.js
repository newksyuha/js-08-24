const sizeParam = {
    big: { 
        price: 100,
        calories: 40,
    },
    small: { 
        price: 50,
        calories: 20,
    },
}

const stuffingParam = {
    cheese: { 
        price: 10,
        calories: 20,
    },
    salad: { 
        price: 20,
        calories: 5,
    },
    potato: { 
        price: 15,
        calories: 10,
    },
}

class Hamburger {
    constructor(size, stuffing) {
       this.size = size;
       this.stuffing = stuffing; 
    }
    addTopping(topping) {    // Добавить добавку 
    
    }
    removeTopping(topping) { // Убрать добавку 
    
    }
    getToppings(topping) {   // Получить список добавок 
    
    }
    getSize() {              // Узнать размер гамбургера 
    
    }
    getStuffing() {          // Узнать начинку гамбургера 
    
    }
    calculatePrice() {       // Узнать цену 
    
    }
    calculateCalories() {    // Узнать калорийность 
    
    }
}