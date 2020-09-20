<template>
  <div id="app">
      <div class="container">
        <FetchErrorComponent :fetchError="fetchError" />
        <HeaderComponent>
            <SearchComponent v-on:filter-goods="filterGoods($event)" /> 
            <CartComponent :cart="cart" @cart-item-deleted="removeFromCart($event)" />
        </HeaderComponent>
        <MainComponent :filteredGoods="filteredGoods" v-on:item-to-add="addToCart($event)" />
        <div class="total">{{total}}</div>
      </div> 
  </div>
</template>

<script>
import FetchErrorComponent from './components/FetchError.vue';
import HeaderComponent from './components/Header.vue';
import MainComponent from './components/Main.vue';
import CartComponent from './components/CartComponent.vue';
import SearchComponent from './components/Search.vue';

const API = 'http://localhost:3000';

export default {
  name: 'App',
  components: {
    SearchComponent,
    CartComponent,
    HeaderComponent,
    MainComponent,
    FetchErrorComponent,
  },

  data() {
    return {
      fetchError: false,
      goods: [],
      filteredGoods: [],
      cart: {
          items: [],
          price: 0,
      },
    };
  },

  computed: {
    total() {
      return this.goods.reduce((acc,cur) => acc + cur.price, 0);
    },
  },

  created() {
    this.fetchGoods();
    this.fetchCart();
  },


  methods: {

    CartElement(catalogElement, count) {
      this.item = catalogElement;
      this.count = count;

      this.increaseAmount = function () {
        this.count++;

        fetch(`${API}/changeAmountInCart`, {
          method: 'POST',
          body: JSON.stringify({changeId: catalogElement.id, newCount: this.count}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            //this.count++;
          })
          .catch((err) => {
            console.log(err);
          });
      }

      this.reduceAmount = function () {
        if (this.count != 1) {
          this.count--;

          fetch(`${API}/changeAmountInCart`, {
          method: 'POST',
          body: JSON.stringify({changeId: catalogElement.id, newCount: this.count}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            //this.count++;
          })
          .catch((err) => {
            console.log(err);
          });
        }
      }
    },

    fetchGoods() {
      return new Promise ((resolve, reject) => {
       fetch(`${API}/data`)
        .then((res) => {
          return res.json();
        })
        .then((goods) => {
          this.goods = goods;
          this.filteredGoods = goods;
          resolve();
        })
        .catch((err) => {
          this.fetchError = true;
          reject(err);
        });
      });
    },

    fetchCart() {
      return new Promise ((resolve, reject) => {
       fetch(`${API}/cart`)
        .then((res) => {
          return res.json();
        })
        .then((cartContent) => {
          cartContent.items.forEach(cartItem => {
            const newItem = new this.CartElement (cartItem.item, cartItem.count);
            this.cart.items.push(newItem)
          });
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
      });
    },

    addToCart(item) {

      const newItem = new this.CartElement (item, 1);
      
      let alreadyExist = false;
      
      this.cart.items.forEach(singleItem => {
        if (singleItem.item.id === newItem.item.id) {
          alreadyExist = true;
        }
      })
      if (!alreadyExist) {
        fetch(`${API}/addToCart`, {
          method: 'POST',
          body: JSON.stringify(newItem),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            this.cart.items.push(newItem);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    removeFromCart(removedId) {
      fetch(`${API}/removeFromCart`, {
          method: 'POST',
          body: JSON.stringify({removedId: removedId}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            this.cart.items = this.cart.items.filter(({ item }) => item.id !== removedId);
          })
          .catch((err) => {
            console.log(err);
          });
    },

    filterGoods(searchText) {
      const regexp = new RegExp(searchText, 'i');
      this.filteredGoods = this.goods.filter(item => regexp.test(item.name));
    },
  }
}

</script>

<style>

.container {
    width: 1200px;
    margin: 0 auto;
}

header {
    background-color: #cbf1cb;
    min-height: 60px;
}

.search {
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    float: right;
    margin: 10px;
}

.total {
    margin-top: 30px;
}

#search-button {
    background-color: #48d648;
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    float: right;
    margin: 10px;
}

#search-button:hover {
    background-color: #59e759;
}

#search-button:active {
    background-color: #6af86a;
}

.goods-list {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.goods-item {
    height: 200px;
    width: 200px;
    margin: 15px;
    padding-top: 110px;
    padding-left: 20px;
    box-sizing: border-box;
    background-color:#eeeeee;
    background-image: url('https://via.placeholder.com/180x110.jpg');
    background-repeat: no-repeat;
    background-position-x: 10px;
    background-position-y: 10px;
}

.addCart {
    float: left;
}

</style>
