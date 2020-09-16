<template>
  <div id="app">
      <div class="container">
          <HeaderComponent>
              <SearchComponent v-on:filter-goods="filterGoods($event)" /> 
              <CartComponent :cart="cart" />
          </HeaderComponent>
          <MainComponent :filteredGoods="filteredGoods" v-on:item-to-add="addToCart($event)" />
          <div class="total">{{total}}</div>
      </div> 
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import MainComponent from './components/Main.vue';
import CartComponent from './components/CartComponent.vue';
import SearchComponent from './components/Search.vue';

export default {
  name: 'App',
  components: {
    SearchComponent,
    CartComponent,
    HeaderComponent,
    MainComponent,
  },

  data() {
    return {
      API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
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
  },


  methods: {

    CartElement(catalogElement, count) {
      this.item = catalogElement;
      this.count = count;

      this.increaseAmount = function () {
        this.count++;
      }

      this.reduceAmount = function () {
        if (this.count != 1) {
          this.count--;
        }
      }
    },

    sendRequest(url) {
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

        xhr.open('GET', `${this.API_URL}${url}`, true);
      
        xhr.send();
    });
    },

    fetchGoods() {
      return new Promise ((resolve, reject) => {
        this.sendRequest('/catalogData.json')
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

    addToCart(item) {

      const newItem = new this.CartElement (item, 1);
      
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

    filterGoods(searchText) {
      const regexp = new RegExp(searchText, 'i');
      this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
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
