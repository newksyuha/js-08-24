const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
    
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.responseText);
                }
            }
        }
        
        xhr.open('GET', `${API}${url}`, true);

        xhr.send();
    });
} 

/* class GoodsItem {
    constructor({ product_name, price }) {
      this.title = product_name;
      this.price = price;
    }

    render() {
      return `
        <div class="goods-item">
            <h3>${this.title}</h3>
            <div class="goods-item-img"></div>
            <p>${this.price}</p>
            <button class="cart-button" type="button">Добавить</button>
        </div>
        `;
    }
}
 */
/* class GoodsList {
    constructor() {
      this.goods = [];
      this.fetchGoods()
        .then(() => {
            this.render();
        })
        .catch((err) => {
            console.log('[ERROR]', err);
        });
    }

    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }

    fetchGoods() {
        return new Promise((resolve, reject) => {
            sendRequest(`/catalogData.json`)
            .then((goods) => {
                this.goods = goods;
                this.render();
                this.renderSum();
                resolve();
            })
            .catch((err) => {
                reject(err);
            });
        });
        
    } 

    render() {
    const goodsList = this.goods.map(item => {
        const goodItem = new GoodsItem(item);
        return goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }

    countSum() {
        return this.goods.reduce((acc, cur) => acc + cur.price, 0);
    }

    renderSum() {
        document.querySelector('.total').textContent = this.countSum();
    }
} */

/* const goodsList = new GoodsList(); */

/* goodsList.fetchGoods(); */
/* goodsList.render(); */
/* goodsList.renderSum(); */

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        searchLine: '',
        isBasketVisible: false,
        basket: [],
        filteredGoods: [],
        isError: false
    },
    created(){
        this.fetchGoods();
    },
    computed: {
        /* filteredGoods(value) {
            const regexp = new RegExp(this.searchLine, 'i');
            return this.goods.filter(item => regexp.test(item.product_name));
        }, */
        countSum() {
            return this.goods.reduce((acc, cur) => acc + cur.price, 0);
        },
    },
    methods: {
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        },
        fetchGoods() {
            return new Promise((resolve, reject) => {
                sendRequest(`/catalogData.json`)
                .then((goods) => {
                    this.goods = goods;
                    this.filteredGoods = goods;
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                    this.isError = true;
                });
            }); 
        }, 
        toggleBasketVisible() {
            this.isBasketVisible = !this.isBasketVisible;
        },
        addToBasket(item) {
            this.basket.push(item);
        },
        removeFromBasket(id) {
            this.basket = this.basket.filter(({ id_product }) => id_product !== id)
        }      
    }
});

Vue.component('v-footer', {
    props: ['isError'],
    template: `
        <p v-if="isError">ERROR</p>
    `
});

Vue.component('v-search', {
    props: ['searchLine','filterGoods'],
    template: `
        <input type="text" class="goods-search" v-model="searchLine"/>
        <button class="search-button" type="button" v-on:click="filterGoods">Искать</button>
    `
})
