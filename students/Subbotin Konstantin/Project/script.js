'use strict';
//
/* const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><div class="item-img">image</div><h3>${title}</h3><p>${price}</p><button>Добавить</button></div>`;
  };
  
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods); */

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><div class="item-img">image</div><h3>${this.title}</h3><p>${this.price}</p><button>Добавить</button></div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 50
            },
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml.join('');
    }
    //метод, определяющий суммарную стоимость всех товаров.
    getSumPriceGoods() {
        let sumPrice = 0;
        for (let good in this.goods) {
            sumPrice += good.price;
        }
        return sumPrice;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

//пустые классы для корзины товаров и элемента корзины товаров.
class Basket {
    constructor() {
        this.goods = [];
    }
    renderBasketItem() {}
    addBasketItem() {}
    removeBasketItem() {}
    renderBasketSumPrice() {}
}
class BasketItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {}
}