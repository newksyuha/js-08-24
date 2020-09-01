'use strict';

class DogParameters {
    sizes = [];
    adds = [];
    topings = [];
    
    constructor(size, add, topings) {
        this.size = this.getSizeFromRadioButton();
        console.log(this.size);
        this.add = this.getAddFromRadioButton();
        console.log(this.add);
        this.topings = this.getTopingsFromRadioButton();
        console.log(this.topings);
    };
    // Получение размера бургера
    getSizeFromRadioButton() {
        let sizes = document.getElementsByName('itemSize');
        for (let i = 0; i < sizes.length; i++) {
            if (sizes[i].checked) {
                return sizes[i].value;
            }
        }
    };

    // Получение вида начинки бургера
    getAddFromRadioButton() {
        let adds = document.getElementsByName('filling');
        for (let i = 0; i < adds.length; i++) {
            if (adds[i].checked) {
                return adds[i].value;
            }
        }
    };
    // Получение видов добавок бургера
    getTopingsFromRadioButton() {
        let adds = document.querySelectorAll('.topings');
        return adds;
    }

    // Подсчет общей цены
    calcSumPrice() {
        let sumPrice = variants.dogSize[this.size].price + variants.dogAdd[this.add].price;
        console.log(sumPrice);
        let adds = document.querySelectorAll('.topings');
        for (let i = 0; i < adds.length; i++) {
            if (adds[i].checked) {
                sumPrice = sumPrice + variants.topings[adds[i].value].price;
                console.log(sumPrice);
            }
        }
        return sumPrice
    }

    // Подсчет общей калорийности
    calcSumCal() {
        let sumCal = variants.dogSize[this.size].cal + variants.dogAdd[this.add].cal;
        console.log(sumCal);
        let adds = document.querySelectorAll('.topings');
        for (let i = 0; i < adds.length; i++) {
            if (adds[i].checked) {
                sumCal = sumCal + variants.topings[adds[i].value].cal;
                console.log(sumCal);
            }
        }
        return sumCal

    }

    // Вывод сообщений об общей стоимости и калорийности
    sayToUser() {
        let priceMessage = '<br><br>Цена Вашего гамбургера составляет - ' + this.calcSumPrice() + ' руб.';
        let calorificMessage = '<br>Калорийность Вашего гамбургера составляет - ' + this.calcSumCal() + ' кал.<br>';

        let message = document.createElement('message');
        message.innerHTML = priceMessage;
        document.querySelector('.button').insertAdjacentHTML('beforeEnd', message.innerHTML);

        message = document.createElement('message');
        message.innerHTML = calorificMessage;
        document.querySelector('.button').insertAdjacentHTML('beforeEnd', message.innerHTML);

    }

}

// Справочные данные по бургеру
let variants = {
    dogSize: {
        big: {
            price: 100,
            cal: 40,
        },
        small: {
            price: 50,
            cal: 20,
        },
    },
    dogAdd: {
        cheese: {
            price: 10,
            cal: 20,
        },
        salad: {
            price: 20,
            cal: 5,
        },
        potato: {
            price: 15,
            cal: 10,
        },
    },
    topings: {
        seasoning: {
            price: 15,
            cal: 0,
        },
        mayonnaise: {
            price: 20,
            cal: 5,
        },
    },

}

// Запуск расчета параметров бургера
function func() {
    let a = new DogParameters();
    a.sayToUser();
}