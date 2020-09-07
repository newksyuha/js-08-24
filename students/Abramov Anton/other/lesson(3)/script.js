const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.responseText));
            }
        }
        xhr.open('GET', `${API}${url}`, true);

        xhr.send();
    });
}

class GoodsItem {
    constructor({ product_name, price }) {
        this.title = product_name;
        this.price = price;
    }

    render() {
        return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
    `;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods().then(this.render());
    }

    fetchGoods() {
        return new Promise((resolve, reject) => {
            sendRequest('/catalogData.json').then((resolve) => {
                this.goods = resolve;
                resolve();
            });
        })
    }

    total() {
        return this.goods.reduce((acc, cur) => acc + cur.price, 0);
    }

    render() {
        const goodsList = this.goods.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }
}

const goodsList = new GoodsList();

class Basket {
    constructor() {
        this.goods = [];
    }

    static foo() {
        console.log('static foo method');
    }

    fetchGoods() {

    }

    addItem(item) {

    }

    removeItem(id) {

    }

    total() {

    }

    render() {

    }
}

class BasketItem {
    constructor(item, basket) {
        this.item = item;
        this.basket = basket;
    }

    addItem() {
        this.basket.addItem(this.item.id);
    }

    removeItem() {
        this.basket.removeItem(this.item.id);
    }

    add() {
        this.item.quantity += 1;
    }

    render() {

    }
}