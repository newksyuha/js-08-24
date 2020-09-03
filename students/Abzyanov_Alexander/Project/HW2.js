'use strict';

// Создание пустых классов корзины и элемента корзины (товара в корзине)
class Cart {
    // Здесь могут быть такие методы:
    // 1. Конструктор корзины (с указанием основных свойств, типа места размещения изображения корзины)
    // 2. Кнопка вызова отображения корзины (может быть, тут должно быть несколько методов: формирование кнопки, отображение кнопки, обработка события нажатия на кнопку, и пр.)
    // 3. Метод отображения корзины (renderOfCart)
    // 4. Метод подсчета общей стоимости корзины
    // 5. Метод оформления покупки (заказа)
}

class cartItem {
    // Этот класс может быть создан путем наследования класса ProductItem
    // Дополнительно здесь могут быть такие методы:
    // 1. Обработки сигнала нажатия кнопки "купить" для ProductItem
    // 2. Увеличения или уменьшения количества приобретаемого товара, с пересчетом стоимости товаров данной товарной позиции (с вызовом пересчета общей стоимости корзины в классе Cart) 
}

class GoodsItem {
    constructor (title, price) {
        this .title = title;
        this .price = price;
    }
    render() {
    return `<div
    class="goods-item"><h3> ${ this .title} </h3><p> ${ this .price} USD </p></div>` ;
    };
}

class GoodsList {   
    constructor () {
        this .goods = [];
    }
    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }
    render() {
        let list = '' ;
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            list += goodItem.render();
        });
        document.querySelector('.goods-list' ).innerHTML = list;
    }
    
    // Здесь добавлен метод подсчета суммарной стоимости продуктов каталога
    getTotalCostOfProductList () {
        let totalCost = 0;
        for (let product of this.goods) {
            totalCost += product.price;
        }
        console.log (totalCost);
        return totalCost;
    }
    // Здесь добавлен метод вывода суммарной стоимости продуктов каталога на экран
    renderTotalCost () {
        const block = document.querySelector('.totalCost');
        block.insertAdjacentHTML('beforeend',  `  Общая стоимость каталога: <br>  -     ${this.getTotalCostOfProductList ()} USD.`);
    
    }
}    

const list = new GoodsList();
list.fetchGoods();
list.render();
list.renderTotalCost();

