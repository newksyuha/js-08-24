class goodsList {

    constructor(goods) {
        this.goods = [ //this.goods = goods;
            { title: 'Прозрачный шарики', price: 70, img: './images/rshar_proz.jpg' },
            { title: 'Шарики металик', price: 90, img: './images/rshar_metalic.jpg' },
            { title: 'Шарики хром', price: 120, img: './images/rshar_chrome.jpg' },
        ];
    }
    renderGoodsList(goods) {
        goods.forEach(elem => document.querySelector('.boxShops').innerHTML += `<div class="itemBox">
        <div class="thisInfoItem">
            <div class="imgBox">
                <div class="imgCard front"><img src="${elem.img}" alt="#"></div>
            </div>
            <div class='fixBox'>
                <h3 class="text">${elem.title}</h3>
                <button class="minus" type="button">-</button>
                <input class="countInput" type="number" step="1" min="1" value="1" title="Кол-во" size="4" style="display:inline-block;">
                <button class="plus" type="button" style="font-size: 15px;">+</button>
                <span class='quantity'><span>1</span> шт.</span>
                <span class='cost'><span>${elem.price}</span> р.</span>
            </div>
            <button type="button" class="inBasket btn">перейти в карзину</button>
            <button type="button" class="addInBasket btn">Добавить в корзину</button>
        </div>
    </div>`);
    }

    listSum(goods) {
        this.sum = 0;
        goods.forEach(elem => {
            this.sum += elem.price;
        });
        return this.sum;
    }
}

let goodsLoad = new goodsList;
goodsLoad.renderGoodsList(goodsLoad.goods);
alert("Сумма товаров - " + goodsLoad.listSum(goodsLoad.goods));

// здесь классы корзины и товара
class basket {
    sumQuantityInBasket() {} //Считает общее Кол-во товаров в корзине
    sumPriceInBasket() {} //Сумма товаров в корзине
    removeItemInBasketAll() {} // Удаляет все из корзины
    goToBasket() {} // Переход в корзину из Шапки сайта
    closeBasket() {} // Закрыть корзину
}
class elemBasket {
    clickOnPlus() {} // Добавляет кол-во позиций товара в корзине +1
    clickOnMinus() {} //тоже самое только с минусом -1
    changeInput() {} //основное предназначение вести подсчет когда пользователь вводит число непосредственно в поле ввода input
    addItems() {} //добавить товар в корзину
    delItems() {} //удалить товар из корзины
    loadBasketCards() {} // загрузка и генерация карточки товара в корзину
    goToBasket() {} // Переход в корзину из карточки
}