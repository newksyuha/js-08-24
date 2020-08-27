'use strict';

const goods = [
    {
        title: 'Shirt',
        price: 150,
    },
    {
        title: 'Socks',
        price: 50,
    },
    {
        title: 'Jacket',
        price: 350,
    },
    {
        title: 'Shoes',
        price: 250,
    },
];

const renderGoodsItem = (title, price) => {
    return (`<div class="goodsAndButton"><div class="goods-item"><h3>${title}</h3><p>${price} USD</p></div>
            <div><img src='https://placehold.it/150x100'><img></div>
           <div><button class="sale-button" type="button">В корзину</button></div></div>`)
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);
