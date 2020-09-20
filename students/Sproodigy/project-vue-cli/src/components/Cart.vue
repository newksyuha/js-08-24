<template>
  <div :class="changeClasses">
    <slot>{{ emptyCartMsg }}</slot>
  </div>
</template>
<script>
export default {
  name: 'Cart',
  props: {
    cart: Array,
  },
  data() {
    return {
      default: true,
      empty: false,
      emptyCartMsg: 'Cart is empty!',
    }
  },
  computed: {
    changeClasses() {
      return {
        cart: this.default,
        cart_empty: !this.cart.length,
      }
    }
  }
}
</script>
<style>
.cart {
	position: absolute;
  top: 66px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.cart_empty {
  font-size: 1.2em;
  right: 1rem;
  background: #dfba13;
  border: 1px solid #fff;
  padding: .5em;
}
</style>
