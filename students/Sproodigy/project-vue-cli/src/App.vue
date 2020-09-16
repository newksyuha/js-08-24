<template>
  <div id="app">
    <Header class="header">
      <Search class="search">
        <SearchText v-model="searchLine" />
        <SearchBtn @filter-goods="filterGoods"/>
      </Search>
      <HeaderButton @show-cart="showCart" />
      <Cart v-show="isVisibleCart" :cart="cart">
        <CartItem
          v-for="item in cart"
          :key="item.id_product"
          :item="item"
        />
      </Cart>
    </Header>
    <main class="main">
      <GoodsList :filteredGoods="filteredGoods">
        <GoodsItem
          v-for="item in filteredGoods"
          :key="item.id_product"
          :id="item.id_product"
          :item="item"
          @add-to-cart="addToCart"
          @remove-from-cart="removeFromCart"
        />
        <Error v-if="isError" />
      </GoodsList>
      <TotalPrice :totalPrice="totalPrice"/>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        API_URL_CATALOG: 'catalogData.json',
        goods: [],
        filteredGoods: [],
        cart: [],
        searchLine: '',
        isVisibleCart: false,
        isError: false,
      }
    },
    created() {
      this.fetchGoods()
    },
    computed: {
      totalPrice() {
        return this.goods.reduce((acc, good) => acc + good.price, 0)
      },
      checkGoodsListLength() {
        return this.filteredGoods.length
      },
      checkCartLength() {
        return this.cart.length
      },
    },
    methods: {
      fetchGoods() {
        fetch(`${this.API_URL}/${this.API_URL_CATALOG}`)
          .then(goods => goods.json())
          .then(goods => this.goods = goods)
          .then(goods => this.filteredGoods = goods)
          .catch(err => {
            console.log(err)
            this.isError = true
          })
      },
      filterGoods() {
        const regexp = new RegExp(this.searchLine, 'i')
        this.filteredGoods = this.goods.filter((good) => {
          return regexp.test(good.product_name)
        })
      },
      addToCart(event) {
        const matchId = parseInt(event.target.parentElement.id)
        const matchGood = this.goods.find(good => good.id_product === matchId)
        const itemIndex = this.cart.findIndex((good) => good.id_product === matchId);

        if (itemIndex !== -1) {
          this.cart[itemIndex].quantity++;
        } else {
          this.cart.push({ ...matchGood, quantity: 1 });
        }
      },
      removeFromCart(event) {
        const matchId = parseInt(event.target.parentElement.id)
        const itemIndex = this.cart.findIndex((good) => good.id_product === matchId);
        if (itemIndex !== -1) this.cart.splice(itemIndex, 1)

      },
      showCart() {
        this.isVisibleCart = !this.isVisibleCart
      }
    }
  }
</script>
<style>
body {
  height: 100%;
  background: #6B8FD4;
  margin: 0;
  font-family: normal, Roboto, sans-serif;
}
</style>
