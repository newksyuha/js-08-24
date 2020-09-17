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
    <GoodsList @add-item="addToBasket" :goods="filteredGoods" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import GoodsList from "./components/GoodsList.vue";
import Search from "./components/Search.vue";
import Basket from "./components/Basket.vue";

const API = "http://localhost:3000";

export default {
  name: "App",
  components: {
    Header,
    GoodsList,
    Search,
    Basket,
  },
  data() {
    return {
      goods: [],
      basket: [],
      isBasketVisible: false,
      searchText: "",
    };
  },
  created() {
    this.fetchGoods();
    this.fetchBasket();
  },
  computed: {
    filteredGoods() {
      const regexp = new RegExp(this.searchText, "i");
      return this.goods.filter((item) => regexp.test(item.name));
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
    removeFromBasket(removedId) {
      this.basket = this.basket.filter(({ id }) => id !== removedId);
    },
    handleBasketToggle() {
      this.isBasketVisible = !this.isBasketVisible;
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.goods-list {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.goods-item {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  flex-basis: calc(25% - 40px);
  margin: 20px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}

.basket {
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: absolute;
  top: 70px;
  width: 300px;
  border-radius: 10px;
}
</style>
