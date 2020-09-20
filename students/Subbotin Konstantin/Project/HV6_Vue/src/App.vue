<template>
  <div id="app">
    <Header :basket="basket" />
    <GoodsList v-bind:goods="filteredGoods" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import GoodsList from './components/GoodsList.vue';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

export default {
  name: 'App',
  components: {
    Header,
    GoodsList,
  },
  data() {
    return {
      goods: [],
      basket: [],
    };
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
        fetch(`${API}/catalogData.json`)
          .then((res) => {
            return res.json();
          })
          .then((goods) => {
            this.goods = goods;
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // toggleBasketVisible() {
    //   this.isBasketVisible = !this.isBasketVisible;
    // },
    addToBasket(item) {
      this.basket.push(item);
    },
    removeFromBasket(id) {
      this.basket = this.basket.filter(({ id_product }) => id_product !== id);
    },
  },
}
</script>

<style>
*, *::after, *::before {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f9fafc;
}

header {
    display: flex;
    flex-direction: row-reverse;
    background: #fff;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
}

.cart-button {
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    background: #0b5bb8;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    color: #fff;
}

.cart-button:focus {
    outline: none;
    background: #0c50a0;
}

.cart-button:hover {
    background: #3b7eb9;
}

.goods-list {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.goods-item {
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
    flex-basis: calc(25% - 40px);
    margin: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
}

.basket {
    background: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
    padding: 10px;
    position: absolute;
    top: 70px;
    width: 300px;
    border-radius: 10px;
}

</style>
