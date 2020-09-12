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
    cartQuantity() {  
      return this.carts.reduce((acc, cur) => acc + cur.quantity, 0);
  },
  cartSum() {      
    return this.carts.reduce((acc, cur) => acc + cur.price, 0);
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
   
    
  addProduct(item) {    
       let found = this.getItem(+item.id_item);
       if (found ) {
                  found.quantity++;
                  
        } else {                  
              this.carts.push({ ...item, quantity: 1 });
              
        }                  
          },
      remProduct(item) {
            let found = this.getItem(item.id_item);
            if (found) {
              found.quantity--;
              if (found.quantity === 0) {
                let index = this.carts.indexOf(found);
                if (index >= 0) {
                    this.carts.splice(index, 1);
                }  
              }
            } 
    },
        
getItem(id) {
            return this.carts.find(el => el.id_item === id);
        },
    },                         
})