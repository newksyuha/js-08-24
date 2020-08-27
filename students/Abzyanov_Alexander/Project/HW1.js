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
    {
        title: 'Sneakers',
    },
];

// Здесь можно немного упростить запись: убрать фигурные скобки и убрать оператор return, если фукнция включает только один return/
// В следующей фукнции можно убрать скобки у единственного аргумента list. Других упрощений, наверное, нет.

const renderGoodsItem = (title = 'Наименование отсутствует', price = 'Цена не указана') => 
     `<div class="goodsAddButton"><div class="goods-item"><h3>${title}</h3><p>${price} USD</p></div>
            <div><img src='https://placehold.it/130x80'><img></div>
           <div><button class="sale-button" type="button">В корзину</button></div></div>`;

// Оператор join("") позволяет убрать "лишние" запятые в списке товаров.
const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join("");};

renderGoodsList(goods);