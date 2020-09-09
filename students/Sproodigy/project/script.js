const app = new Vue({
  el: '#app',
  data: {
    API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
    API_URL_CATALOG: 'catalogData.json',
    goods: [],
    filteredGoods: [],
    searchLine: '',
    cart: [
      {product_name: 'Some', price: '1000', quantity: 1},
      {product_name: 'Another', price: '2000', quantity: 4},
    ],
    isVisibleCart: false,
    emptyCartMessage: 'Cart is empty!',
    emptyGoodsListMessage: 'No data!',
  },
  created() {
    this.fetchGoods()
  },
  computed: {
    totalPrice() {
      return this.goods.reduce((acc, good) => acc + good.price, 0)
    },
    checkGoodsListData() {
      return this.filteredGoods.length
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
    showCart() {
      this.isVisibleCart ? this.isVisibleCart = false : this.isVisibleCart = true
    }
  }
})

class GoodsItem {
  constructor(product_name, price) {
    this.title = product_name
    this.price = price
    // this.quantity = quantity
  }

  // _addToCart() {
  //   const CartInstance = new Cart()
  //   const cartItem = new CartItem(this.product_name, this.price, this.quantity)
  //   CartInstance.add(cartItem)
  //   CartInstance.render()
  // }
  //
  // _removeFromCart() {
  //   const CartInstance = new Cart()
  //   CartInstance.remove()
  //   console.log(CartInstance.cart)
  // }

}

// class CartItem {
//   constructor(title, price, quantity) {
//     this.title = title
//     this.price = price
//     this.quantity = quantity
//   }
//
//   addItem() {
//     this.cart.addItem(this.name)
//   }
//
//   removeItem() {
//     this.cart.removeItem(this.name)
//   }
//
//   addQuantity() {
//     const CartInstance = new Cart()
//     this.quantity += 1
//     CartInstance.render()
//   }
//
//   render() {
//     const div = document.createElement('div')
//     const btn = document.createElement('button')
//
//     btn.innerHTML = '+'
//     btn.addEventListener('click', () => {
//       this.addQuantity()
//     })
//
//     div.innerHTML = `
//       <h4><b>Name: </b>${this.title}</h4>
//       <p><b>Price: </b>${this.price}</p>
//       <p class="quantity"><b>Quantity: </b>${this.quantity}</p>
//     `
//     div.classList.add('cart__item')
//     div.appendChild(btn)
//
//     return div
//   }
// }
//
// class Cart {
//   cart = []
//
//   constructor() {
//     if (Cart._instance) {
//       return Cart._instance
//     }
//     Cart._instance = this
//   }
//
//   fetchGoods() {
//
//   }
//
//   add(product) {
//     this.cart.push(product)
//   }
//
//   remove(product) {
//     this.cart.splice(this.cart.indexOf(product, 1))
//   }
//
//   total() {
//
//   }
//
//   render() {
//     const cartPlace = document.querySelector('.cart')
//
//     if (cartPlace) cartPlace.innerHTML = ''
//
//     this.cart.forEach(item => {
//       cartPlace.appendChild(item.render())
//     })
//   }
// }
//
// const CartInstance = new Cart()
//
//
// const btn1 = new FetchButton(list, 'Fetch (http)', list.fetchGoods, list.render)
// const btn2 = new FetchButton(list, 'Fetch (promise)', list.fetchGoodsPromise, list.renderGoodsPromise)
// const btn3 = new FetchButton(list, 'Fetch (return promise)', list.fetchGoodsReturnPromise, list.renderGoodsReturnPromise)
// const btn4 = new FetchButton(list, 'Fetch (fetch)', list.fetchGoodsFetch, list.renderGoodsFetch)
//
// document.querySelector('.btns-wrp').appendChild(btn1.create('From http'))
// document.querySelector('.btns-wrp').appendChild(btn2.create('From promise'))
// document.querySelector('.btns-wrp').appendChild(btn3.create('From a returned promise'))
// document.querySelector('.btns-wrp').appendChild(btn4.create('From fetch'))
