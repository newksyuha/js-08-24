"use strict"

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; 


function makeGETRequest(url) {
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
  

const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    searchText: '',
  },
  created() {
    this.fetchGoods();
  },
  computed: {
    filteredGoods() {
      const regexp = new RegExp(this.searchText, 'i');
      return this.goods.filter(item => regexp.test(item.product_name));
    },
    total() {
      return this.goods.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  methods: {
    fetchGoods() {
      return new Promise((resolve, reject) => {
        makeGETRequest('/catalogData.json')
          .then((goods) => {
            this.goods = goods;
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

  },
});
let buttonBasket = document.querySelector('.cart-button');
buttonBasket.addEventListener('click', buttonBasketClickHandler);  

function buttonBasketClickHandler(event) {
    let basketTable = document.querySelector('table');
    basketTable.classList.toggle('hidden');
} 