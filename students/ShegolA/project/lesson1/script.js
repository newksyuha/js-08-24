
// function makeGETRequest(url, callback) {
//         var xhr;

//         if (window.XMLHttpRequest) {
//             xhr = new XMLHttpRequest();
//         } else if (window.ActiveXObject) {
//             xhr = new ActiveXObject("Microsoft.XMLHTTP");
//         }

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//             // console.log('-----------');
//             callback(xhr.responseText);
//             }
//         }

//         xhr.open('GET', url, true);
//         xhr.send();
//      }

/* Переделайте makeGETRequest() так, чтобы она использовала промисы. */

function makeGETRequest(url) {
    return new Promise(function(resolve, reject) {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    });
}
/*
class GoodsItem {
    constructor({ id_product, product_name, price }) {
        this.id = id_product;
        this.title = product_name;
        this.price = price;
    }
    render() {
        return `
      <div class="goods-item" data-id="${this.id}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button name="add-to-basket">Buy</button>
      </div>
    `;
    }
}
class GoodsList {
    constructor(basket) {
        this.basket = basket;
        this.goods = [];
        this.filteredGoods = [];
        this.fetchGoods()
            .then(() => {
                this.render();
            })
            .catch((err) => {
                console.log('[ERROR]', err);
            });
        document.querySelector('.goods-list').addEventListener('click', (event) => {
            if (event.target.name === 'add-to-basket') {
                const id = event.target.parentElement.dataset.id;
                const item = this.goods.find((goodsItem) => goodsItem.id_product === parseInt(id));
                this.basket.addItem(item);
            }
        });
        document.querySelector('.search').addEventListener('input', (event) => {
            this.filterGoods(event.target.value);
        });
    }
    fetchGoods() {
        return new Promise((resolve, reject) => {
            sendRequest('/catalogData.json')
                .then((goods) => {
                    this.goods = goods;
                    this.filteredGoods = goods;
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    total() {
        return this.goods.reduce((acc, cur) => acc + cur.price, 0);
    }
    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        this.render();
    }
    render() {
        const goodsList = this.filteredGoods.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }
}

//---------------------------------------------------------------------------

//--------------------------------------------------------------------------
class Basket {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
    }
    addItem(item) {
        const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
        if (itemIndex !== -1) {
            this.goods[itemIndex].quantity++;
        } else {
            this.goods.push({ ...item, quantity: 1 });
        }
        console.log(this.goods);
    }
    removeItem(id) {
        const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === id);
        if (itemIndex !== -1) {
            this.goods.splice(itemIndex, 1);
        }
    }
    getBasketItems() {
        return this.goods;
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
const basket = new Basket();
const goodsList = new GoodsList(basket);
*/

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        cart: [
            {product_name: 'Клавиатура', price: '1500', quantity: 1},
            {product_name: 'Usb-провод', price: '200', quantity: 2},
        ],
        isVisibleCart: false,
        API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        emptyGoodsListMessage: 'No data!',
    },
    created() {
        this.fetchGoods()
    },
    computed: {
        totalPrice() {
            return this.goods.reduce((acc, good) => acc + good.price, 0)
        },
        checkGoodsListData() {
            return this.filteredGoods.length
        },
    },
    methods: {
        fetchGoods() {
            fetch(`${this.API_URL}/catalogData.json`)
                .then(goods => goods.json())
                .then(goods => this.goods = goods)
                .then(goods => this.filteredGoods = goods)
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i')
            this.filteredGoods = this.goods.filter((good) => {
                return regexp.test(good.product_name)
            })
        },
        showCart() {
            this.isVisibleCart ? this.isVisibleCart = false : this.isVisibleCart = true;
        }
    }
});





