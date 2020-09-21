<template>
  <div id="app">
    <Header v-on:basket-toggle="handleBasketToggle">
      <Basket @remove-item="removeFromBasket" v-bind:basket="basket" v-bind:isBasketVisible="isBasketVisible" />
      <Search @change-search="handleChangeSearch" :searchLine="searchLine"/>
    </Header>
    <GoodsList @add-item="addToBasket" v-bind:goods="filteredGoods"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import GoodsList from './components/GoodsList.vue'
import Search from './components/Search.vue'
import Basket from './components/Basket.vue'

const API = 'http://localhost:3000';

export default {
  name: 'App',
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
        searchLine: '',
        /* isError: false */
    }
  },
    
  created(){
    this.fetchGoods();
    this.fetchBasket();
  },
  computed: {
      filteredGoods() {
          const regexp = new RegExp(this.searchLine, 'i');
          return this.goods.filter(item => regexp.test(item.name));
      },
      countSum() {
            return this.goods.reduce((acc, cur) => acc + cur.price, 0);
      },
  },
  methods: {
      /* filteredGoods() {
        const regexp = new RegExp(this.searchLine, 'i');
        this.filteredGoods = this.goods.filter(item => regexp.test(item.name));
      }, */
      fetchGoods() {
            return new Promise((resolve, reject) => {
                fetch(`${API}/data`)
                .then((res) => {
                  return res.json();
                })
                .then((goods) => {
                    this.goods = goods;
                    /* this.filteredGoods = goods;  */
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                    /* this.isError = true; */
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
                    /* this.filteredGoods = goods; */
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                    /* this.isError = true; */
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
          .then((res) => {
            this.basket.push(item);
            return res.json();
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        }, 
      
      
      removeFromBasket(removedId) {
            this.basket = this.basket.filter(({ id }) => id !== removedId)
      },
      handleBasketToggle() {
          this.isBasketVisible = !this.isBasketVisible;
      },
      handleChangeSearch(value) {
          this.searchLine = value;
      }      
    }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
    margin: 0 auto;
    width: 1280px;
    font-family: Arial;
}

header {
    width: 100%;
    min-height: 50px;
    background-color: lightgray;
    display: flex;
    justify-content: flex-end;
}

.goods-search {
    width: 120px;
    height: 25px;
    margin: 10px 0 10px 0;
}

.basket {
    display: block;
    position: absolute;
    top: 56px;
    right: 320px;
    background-color: #ccc;
    width: 350px;
}

.goods-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
}

.goods-item {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

h3 {
    display: block;
    width: 100%;
    text-align: center;
}

.goods-item-img {
    width: 270px;
    min-height: 100px;
    border: 1px solid black;
    box-sizing: border-box;
}

p {
    display: block;
    width: 100%;
    text-align: center;
}


</style>
