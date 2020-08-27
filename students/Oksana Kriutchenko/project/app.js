"use strict";

const goods = [
    {
        //        title: 'Honda NC 750',
        img: 'img/honda_NC_750_XD_2018.jpg',
        price: 250000,
    },
    {
        title: 'Honda New CB500X',
        img: 'img/honda_CB500X.jpg',
        //        price: 250000
    },
    {
        title: 'NC 750 S-1',
        img: 'img/NC_750_S-1.jpg',
        price: 280000,
    },
    {
        title: 'NC 750 XD 2018',
        //        img: 'img/Honda_NC_750_XD_2018-4.jpg',
        price: 350000,
    },
];

const renderGoodsItem = (title = "Что-то пошло не так c title!", img = "Что-то пошло не так c img!", price = "Что-то пошло не так c price!") => {
    return `<div class="goods-item"><h3>${title}</h3><div><img src=${img} width="250px" height="200px"></div><p>${price}</p><button class="btn">Купить</button></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.img, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);

//'use strict';
//
//const renderGoodsItem = (title, price) => {
//    return (`<div class="goodsAndButton"><div class="goods-item"><h3>${title}</h3><p>${price} USD</p></div>
//            <div><img src='https://placehold.it/150x100'><img></div>
//           <div><button class="sale-button" type="button">В корзину</button></div></div>`)
//};
//
//const renderGoodsList = (list) => {
//    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//    document.querySelector('.goods-list').innerHTML = goodsList;
//};
//
//renderGoodsList(goods);
