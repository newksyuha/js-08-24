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
    async newFetchGoods() {
      try {
        const res = await fetch(`${API}/data`);
        const goods = await res.json();
        this.goods = goods;
      } catch (err) {
        console.log('error', err);
      }
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
          const itemIndex = this.basket.findIndex(({ id }) => id === item.id);
          if (itemIndex > -1) {
              this.basket[itemIndex].quantity++;
          } else {
              this.basket.push({ ...item, quantity: 1 });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeFromBasket(removedId) {
      fetch(`${API}/removeFromCart/${removedId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          this.basket = this.basket.filter(({ id }) => id !== removedId);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleBasketToggle() {
      this.isBasketVisible = !this.isBasketVisible;
    },
  },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

header {
    background: lightgray;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
}

button {
    height: 30px;
    width: 70px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
}

.goods-list {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;

}

.goods-item {
    height: 200px;
    width: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    margin: 10px;
}

.goods-img {
    height: 100px;
    width: 120px;
    margin: 8px;
    border:1px solid black;
    background:darkgray
}

.cart-list{
    width: 400px;
    border:1px solid black;
    background:darkgray;
    position: absolute;
    margin-top: 50px;
}

.basket-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.basket-item__empty {
    display: flex;
    justify-content: space-between;
}
</style>
