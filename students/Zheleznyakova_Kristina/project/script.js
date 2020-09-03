class GoodsItem {
    constructor({ title, price }) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `
            <div class="goods-item">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class='btn_inBasket'>В корзину</button>
            </div>
        `;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    render() {
        let listHtml = '';

        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml       += goodItem.render();
        });

        document.querySelector('.goods-list').innerHTML = listHtml;
    }        

    to_sum_prices() {
        let sum_prices = this.goods.reduce(function (a, b) {
           return a + b.price
        }, 0);

        return sum_prices;
    }

    /**
     * При нажатии кнопки 'В корзину' создается корзина.
     */
    create_basket() {
        let btn    = document.getElementsByClassName('btn_inBasket');
        let basket = new Basket()

        btn.addEventListener('click', () => basket.create());
    }
}


class Elem_basket {
    constructor({ title, price, index=1 }) {
        this.title = title;
        this.price = price;
        this.index = index;
    }

    /**
     * Создает разметку одной строки позиции товара в корзине.
     */
    render() {
        return `
            <div class="basket-item">
                <div>${this.index}</div>
                <div>${this.title}</div>
                <div>${this.price}</div>
                <button>Delete</button>
            </div>
        `;
    }
}


class Basket {
    constructor(title, price, index) {
        this.title = title;
        this.price = price;
        this.index = index;
    }

    /**
     * Создает структуру корзины.
     */
    create_div(parent=document.main) {
        let div         = document.createElement('div');        
        div.className   = 'basket';
        let div_title   = this.create_title();
        let elem_basket = new Elem_basket(); // ?
        let div_item    = elem_basket.render();
        let div_footer  = this.create_footer();

        parent.appendChild(div);
        div.appendChild(div_title);
        div.appendChild(div_item);
        div.insertAdjacentHTML('afterEnd', div_footer);
    }

    /**
     * Создает разметку заголовка корзины.
     */
    create_title() {
        return `
        <div class="basket-title">
            <div>Index</div>
            <div>Title</div>
            <div>Price</div>
            <div>Amount</div>
        </div>
        `;
    }

    /**
     * Создает разметку футера корзины.
     */
    create_footer() {
        return `
        <div class="basket-footer">
            <div class='foot-left'>Sum total</div>
            <div class='foot-right'>${this.price}</div>
        </div>
        `;
    }

    /**
     * Увеличение количества позиций товара в корзине.
     */
    increase_quantity() {

    }

    /**
     * Удаляет позицию товара из корзины при нажатии соответствующей кнопки.
     * Если добавлено несколько позиций, то сначала уменьшается количество товара.
     */
    clear_item() {

    }

    /**
     * Удаляет корзину, если она пустая.
     */
    clear_basket() {

    }

    /**
     * Суммирует общую стоимость позиций в корзине.
     */
    sum_prices() {

    }
}


const list = new GoodsList();

list.fetchGoods();
list.render();
console.log(list.to_sum_prices());

