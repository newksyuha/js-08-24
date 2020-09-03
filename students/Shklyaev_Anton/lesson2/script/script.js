'use strict';

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    
    render() {
        return `<div class="goods-item">
            <h2>${this.title}</h2>
            <p>${this.price}</p>
            <button class="buy-btn">В корзину</button>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Компьютер', price: 10000 },
            { title: 'Мышь', price: 500 },
            { title: 'Клавиатура', price: 1000 },
            { title: 'Монитор', price: 7000 },
            { title: 'Колонки', price: 600 },
        ];
    }

    render() {
        let goodsLayout = '';
        this.goods.forEach(({ title, price }) => {
            const item = new GoodsItem(title, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }
    priceSum() {
        const totalSum = this.goods.reduce(function (accum, currentValue){
            return accum + currentValue.price
        },0)
        return totalSum
    }// метод вывода общей суммы
}

const list = new GoodsList;
list.fetchGoods();
list.render();
console.log(list.priceSum());
class BasketItem extends GoodsItem{
    constructor( title, price, volume=1){ //объекты корзины должны наследоваться от классов GoodsItem, но с добавление свйства Volume - кол-во)
       
    }
    addVolume(){
       
    }
    delVolume(){
        // здесь предполагаю требуется или ничего не делать, или применить метод удаления объектра из корзины
    }
}
class BasketList extends GoodList{
    constructor(){
        this.goods = [];
    }
    delItem(){

    } //метод для удаления товара
    showItem(){

    }// метод для показа всех товаров
    addItem(){

    }// добавление товара
    clearAll(){

    }// очистка корзины
    buyItem(){

    }// оформление покупки

    
}
// идея в том ,чтобы наследовать предыдущие классы с добавлением новых методов

