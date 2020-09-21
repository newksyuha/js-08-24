<template>
  <div id="app">
    <Header v-on:basket-toggle="handleBasketToggle">
      <Basket
        @remove-item="removeFromBasket"
        :basket="basket"
        :isBasketVisible="isBasketVisible"
      />
      <Search v-model="searchText" />
    </Header>
    <Error v-if="isError" />
    <GoodsList v-bind:goods="filteredGoods" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import GoodsList from './components/GoodsList.vue'
import Search from "./components/Search.vue";
import Basket from "./components/Basket.vue";
import Error from "./components/Error.vue";

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
export default {
  name: 'App',
  components: {
    Header, 
    GoodsList,
    Search,
    Basket,
    Error,
  },
  data() {
    return{
        goods: [],
        basket: [],
        searchText: "",
        isBasketVisible: false,
        isError: false,
    };
  },
  created() {
    this.fetchGoods();
    this.fetchBasket();
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
        fetch(`${API}/data`)
          .then((res) => {
            return res.json();  
          })
          .then((goods) => {
            this.goods = goods;
            resolve();
          })
          .catch((err) => {
            this.isError = true;
            reject(err);
          });
      }); 
    },
     fetchBasket() {
      return new Promise((resolve, reject) => {
        fetch(`${API}/cart`)
          .then((res) => {
            return res.json();
          })
          .then((goods) => {
            this.basket = goods;
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    addToBasket(item) {
      fetch(`${API}/addToCart`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          this.basket.push(item);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeFromBasket(id) {
      this.basket = this.basket.filter(({ id }) => id !== removedId);
    },
    handleBasketToggle(){
      this.isBasketVisible = !this.isBasketVisible;
    },
  },
};
</script>

<style>
body {
    background-color: #fff;
    margin: 0 auto;
}

header {
    background-color: rgb(218, 217, 216);
    min-height: 100px;
    padding: 20px 70px;
    box-sizing: border-box;
    vertical-align: middle;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

h2 {
    color: red;
    font-size: 26px;
    font-weight: 700;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.cart-button {
    width: 15%;
    min-height: 50px;
    border-radius: 10px;
    border: 2px solid #000;
}

button:hover {
    background-color: coral;
    border: 2px solid red;
}

button:active {
    background-color: crimson;
    color: bisque;
}

.goods-list {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
}

.goods-item {
    height: 200px;
    width: 250px;
    text-align: center;
    background-color: #ccc;
}
.goods-list-empty{
    width: 30%;
    padding: 20px;
    background-color: rgb(238, 52, 52);
    border: 2px solid rgb(14, 0, 0);
    border-radius: 10px;
    text-align: center;
}
button {
background-color: rgb(248, 124, 124);
}
.search {
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid #000;
    float: right;
    margin: 10px;
}
.search-button{
    width: 10%;
    min-height: 30px;
    border-radius: 10px;
    border: 2px solid #000;
    background-color: rgb(250, 228, 228);
}
.addToBasket {
    border-radius: 10px;
    margin-top: 30px;
}
.total {
    text-align: center;
}
.basket {
    width: 20%;
    min-height: 100px;
    background-color: rgb(238, 227, 227);
    text-align: center;
    padding: 20px;
    position: absolute;
    top: 100px;
    right: 10px;
} 
</style>