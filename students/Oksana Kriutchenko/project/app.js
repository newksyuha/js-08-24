"use strict";

const goods = [
    {
        //        title: 'Honda NC 750',
        img: 'img/honda_NC_750_XD_2018.jpg',
        price: 12000,
    },
    {
        title: 'Honda New CB500X',
        img: 'img/honda_CB500X.jpg',
        //        price: 8500
    },
    {
        title: 'NC 750 S-1',
        img: 'img/NC_750_S-1.jpg',
        price: 10500,
    },
    {
        title: 'NC 750 XD 2018',
        //        img: 'img/Honda_NC_750_XD_2018-4.jpg',
        price: 11000,
    },
];

class GoodsItem {
    constructor({
        title,
        img,
        price
    }) {
        this.title = title;
        this.img = img;
        this.price = price;
    }
    render() {
        return `
            <div class="goods-item">
                <h3>${this.title}</h3>
                <div><img src=${this.img} width="250px" height="200px"></div>
                <p>${this.price}USD</p>
                <button class="btn">Купить</button>
            </div>
        `;
    }
};

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods();
    }
    fetchGoods() {
        this.goods = [
            {
                title: 'Honda NC 750',
                img: 'img/honda_NC_750_XD_2018.jpg',
                price: 12000
    },
            {
                title: 'Honda New CB500X',
                img: 'img/honda_CB500X.jpg',
                price: 8500
    },
            {
                title: 'NC 750 S-1',
                img: 'img/NC_750_S-1.jpg',
                price: 10500
    },
            {
                title: 'NC 750 XD 2018',
                img: 'img/Honda_NC_750_XD_2018-4.jpg',
                price: 11000
    },
];
    }
    render() {
        const goodsList = this.goods.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }


//Метод подсчета суммарной стоимости продуктов

    getTotalSumProduct() {
        let totalSum = 0;
        for (let product of this.goods) {
            totalSum += product.price;
        }
        console.log(totalSum);
        return totalSum;
    }

    renderTotalSumProduct() {
        const blockSum =
            document.querySelector('.btn');
         blockSum.insertAdjacentHTML('afterend', `<br><p>Стоимость всех продуктов</p>${this.getTotalSumProduct()}`);
    }
}
const goodsList = new GoodsList();
goodsList.render();
goodsList.renderTotalSumProduct();



//Создаем пустые классы для Корзины товаров и Элемента корзины товаров

class cartButton {
    constructor(){
        
    }

    clearCartButton(){
        //метод, который производит очистку корзины
    }
    sumCartButton(){
        // метод, который считает сумму товаров в корзине
    }
    payCartButton(){
        //метод, который выбирает форму оплаты
    }
}
class elementCartButton {
    constructor(){
        //price     цена
        //quantity  количество
        //name      наименование
    }
    addElementCartButton(){
        //метод, который добавляет товар в корзину
    }

    deleteElementCartButton(){
        //метод удаляющий элемент с корзины
    }
}