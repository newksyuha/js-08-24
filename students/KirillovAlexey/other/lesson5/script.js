const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/*
/catalogData.json – получить список товаров;
/getBasket.json – получить содержимое корзины;
/addToBasket.json – добавить товар в корзину;
/deleteFromBasket.json – удалить товар из корзины.
 */

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

        xhr.open('GET', `${API_URL}${url}`, true);

        xhr.send();
    });
}


const app = new Vue({
    el: '#app',
    data: {
       goods: [],
        filteredGoods: [],
        searchLine:'',
        cart: [],

    },
    created() {
        this.fetchGoods();



    },
    computed: {

    },
    methods: {
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
        },
        filter() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        },
        fetchCart() {

            new Promise((resolve, reject) => {
                sendRequest('/getBasket.json')
                    .then((cart) => {
                        this.cart = cart.contents;
                        this.cart.isVisibleCart = true;
                        resolve;
                    })
                    .catch((err) => {
                       reject(err);
                    });
            });
        },
    }


});











