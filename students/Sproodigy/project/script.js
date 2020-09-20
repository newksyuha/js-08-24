Vue.component('search-text', {
  data() {
    return {}
  },
  props: ['searchLine', 'value'],
  template: `
    <input
      class="search__text"
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  `
})

Vue.component('search-btn', {
  data() {
    return {
      btnText: 'Search',
    }
  },
  template: `<button class="search__btn" @click="$emit('filter-goods')">{{ btnText }}</button>`
})

Vue.component('header-btn', {
  data() {
    return {
      btnText: 'Cart',
    }
  },
  template: `<button class="header-btn" @click="$emit('show-cart')">{{ btnText }}</button>`
})

Vue.component('goods-item', {
  data() {
    return {}
  },
  props: ['item'],
  template: `
    <div class="goods-item">
      <h4><b>Name: </b>{{ item.product_name }}</h4>
      <p><b>Price: </b>{{ item.price }}&#36;</p>
      <button class="header-btn header-btn_small" @click="$emit('add-to-cart', $event)">Buy</button>
      <button class="header-btn header-btn_small" @click="$emit('remove-from-cart', $event)">Remove</button>
    </div>
  `
})

Vue.component('empty-goods-list', {
  data() {
    return {
      emptyGoodsListMessage: 'No data!',
    }
  },
  template: `<div class="goods-list goods-list_empty">{{ emptyGoodsListMessage }}</div>`
})

Vue.component('cart-item', {
  data() {
    return {}
  },
  props: ['item'],
  template: `
    <div class="cart__item">
      <h4><b>Name: </b>{{ item.product_name }}</h4>
      <p><b>Price: </b>{{ item.price }}&#36;</p>
      <p><b>Quantity: </b>{{ item.quantity }}</p>
    </div>
  `
})

Vue.component('empty-cart', {
  data() {
    return {
      emptyCartMessage: 'Cart is empty!',
    }
  },
  template: `<div class="cart__item cart_empty">{{ emptyCartMessage }}</div>`
})

Vue.component('total-price', {
  data() {
    return {
      prefix: 'Total price: '
    }
  },
  props: ['totalPrice'],
  template: `<div class="total-price">{{ prefix }}{{ totalPrice }}&#36;</div>`
})

const app = new Vue({
  el: '#app',
  data: {
    API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
    API_URL_CATALOG: 'catalogData.json',
    goods: [],
    filteredGoods: [],
    cart: [],
    searchLine: '',
    isVisibleCart: false,
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
})
