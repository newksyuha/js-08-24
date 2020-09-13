class CartElement {
  constructor(catalogElement, count) {
    this.item = catalogElement;
    this.count = count;
  }

  increaseAmount() {
    this.count++;
  }

  reduceAmount(index) {
    if (this.count != 1) {
      this.count--;
    }
  }

  /*render() {
    return `<div class="cart-item">
            <h3>${this.item.product_name}</h3>
            <p>${this.item.price}</p>
            <button class="cart-count-button" type="button">-</button><p>${this.count}</p><button class="cart-count-button" type="button">+</button>
            </div>`;
  }*/
}

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

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const app = new Vue ({
  el: '#app',
  data: {
    goods: [],
    filteredGoods: [],
    searchText: '',
    isVisibleCart: false,
    cart: {
      items: [],
      price: 0,
    }
  },

  created() {
    this.fetchGoods();
  },

  updated() {
    let i = 0;
    document.querySelectorAll('.addCart').forEach(button => {
      let a = (index) => {let add = (eventObj) => {this.addToCart(this.goods[index]);}; 
        return add;};
      button.addEventListener('click', a(i))
      i++;
    })
  },

  computed: {
    total() {
      return this.goods.reduce((acc,cur) => acc + cur.price, 0);
    },
  },

  methods: {
    fetchGoods() {
      return new Promise ((resolve, reject) => {
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

    filterGoods() {
      const regexp = new RegExp(this.searchText, 'i');
      this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
    },

    addToCart(item) {

      const newItem = new CartElement (item, 1);
      
      let alreadyExist = false;
      
      this.cart.items.forEach(singleItem => {
        if (singleItem.item.id_product === newItem.item.id_product) {
          alreadyExist = true;
        }
      })
      if (!alreadyExist) {
        this.cart.items.push(newItem);
      }
    },

    toggleCartVisibility() {
      this.isVisibleCart = !this.isVisibleCart;
    }
  }
});




/*
class Cart {
  constructor() {
    this.items = [];
    this.price = 0;
  }

  addToCart(item, count) {
    const newItem = new CartElement (item, count);
    
    let alreadyExist = false;
    
    this.items.forEach(singleItem => {
      if (singleItem.item.id_product === newItem.item.id_product) {
        alreadyExist = true;
      }
    })
    if (!alreadyExist) {
      this.items.push(newItem);
    }
  }

  removeFromCart(index) {
    this.items.splice(index, 1);
  }

  recalculate() {
    this.price = 0;
    this.items.forEach(element => {this.price = this.price + element.item.price * element.count});
  }

  listToLog() {
    this.items.forEach(singleItem => {
      console.log(singleItem.item.product_name);
    })
  }

  render() {
    let cartHtml = '';
    this.items.forEach(item => {
      cartHtml += item.render();
    })
    document.querySelector('.cart-list').innerHTML = cartHtml;
  }
}

class GoodsItem {
  constructor(title, price) {
    this.product_name = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="addCart" type="button">To Cart</button></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
    let i = 0;
    document.querySelectorAll('.addCart').forEach(button => {
      let a = (index) => {let add = (eventObj) => {cart.addToCart(this.goods[index], 1); cart.recalculate(); cart.render();}; 
        return add;};
      button.addEventListener('click', a(i))
      i++;
    })
  }
}
*/