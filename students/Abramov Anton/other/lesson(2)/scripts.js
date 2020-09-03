// Бургеры 

class burger {
    constructor() {
        this.basket = [];
    }
    burgers() {
        let burgers = [{
            size: 'Маленький',
            price: 50,
            cal: 20
        }, {
            size: 'Большой',
            price: 100,
            cal: 40
        }];

        return burgers;
    }
    ingredients() {
        let ingredients = [{
                name: "Сыр",
                price: 10,
                cal: 20
            },
            {
                name: "Салат",
                price: 20,
                cal: 5
            },
            {
                name: "Картофель",
                price: 15,
                cal: 10
            }
        ]
        return ingredients;
    }

    topings() {
        let topings = [{
                name: "Специи",
                price: 15,
                cal: 0
            },
            {
                name: "Майонез",
                price: 20,
                cal: 5
            },
        ]
        return topings;
    }
    loadInfo(burgers, ingredients, topings) {
        let burgerIndex = +prompt("Выберите размер бургера: 1 - большой, 0 - маленький");
        if (burgerIndex && burgerIndex == 0 || burgerIndex == 1) {
            this.size = burgers[burgerIndex].size;
            this.price = burgers[burgerIndex].price;
            this.cal = burgers[burgerIndex].cal;
            let ingredientIndex = +prompt("Выберите начинку: 2 - картофель, 1 - салат , 0 - сыр");

            if (ingredientIndex && ingredientIndex >= 0 && ingredientIndex <= 2) {
                this.price += ingredients[ingredientIndex].price;
                this.cal += ingredients[ingredientIndex].cal;
                this.ingridient = ingredients[ingredientIndex].name;
                let topingIndex = +prompt("Добавьте топинг: 2 - Нет, спасибо , 1 - Майонез, 0 - Специи");

                if (topingIndex && topingIndex == 0 || topingIndex == 1) {
                    this.price += topings[topingIndex].price;
                    this.cal += topings[topingIndex].cal;
                    this.toping = topings[topingIndex].name;
                } else {
                    this.toping = "Не выбран";
                }
                return alert(`
                Ваш заказ!
                Бургер: ${this.size},
                Начинка: ${this.ingridient},
                Топпинг: ${this.toping}.
                Цена: ${this.price} рублей,
                Калории: ${this.cal} ккал`);
            }
        }
        alert('Некорректный ввод');
    }
}

let burgerShop = new burger;
burgerShop.loadInfo(burgerShop.burgers(), burgerShop.ingredients(), burgerShop.topings());