'use strict';
const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
];

const getGoodsItem = (title = 'name', price = 0) => {
    return `<div class="goods-item">
        <h2>${title}</h2>
        <p>${price}</p>
        <button class="buy-btn">В корзину</button>
    </div>`;
}

const renderGoodsList = (list) => {   
    document.querySelector('.goods-list').innerHTML =list.map(listItem => getGoodsItem(listItem.title, listItem.price)).join('');
}

renderGoodsList(goods);