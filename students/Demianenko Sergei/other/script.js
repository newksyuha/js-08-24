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

const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    searchText: '',
    carts: [],
    cartVisibility: false,
    
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
    cartSum() {      
      return this.carts.reduce((acc, cur) => acc + cur.price, 0);
  },
  cartQuantity() {  
      return this.carts.reduce((acc, cur) => acc + cur.quantity, 0);
  },
  },
  methods: {
    fetchGoods() {
      return new Promise((resolve, reject) => {
        sendRequest('/catalogData.json')
          .then((goods) => {
            this.goods = goods;
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    
  addProduct(goods) {
       let found = this.getItem(+goods.id_item);
       if (found) {
                  found.quantity++;
        } else {
                  let el = Object.assign({ quantity: 1 }, goods);
                  this.carts.push(el);
              }
          },
getItem(id) {
            return this.carts.find(el => el.id_item === id);
        },
        },                         
})