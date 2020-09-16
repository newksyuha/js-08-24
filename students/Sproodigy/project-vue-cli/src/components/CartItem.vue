<template>
  <div class="cart__item">
    <h4><b>Name: </b>{{ item.product_name }}</h4>
    <p><b>Price: </b>{{ item.price }}&#36;</p>
    <p><b>Quantity: </b>{{ item.quantity }}</p>
  </div>
</template>
<script>
export default {
  name: 'CartItem',
  props: {
    item: Object,
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.cart__item {
  width: 100%;
  background: #dfba13;
  border: 1px solid #fff;
  padding: .5em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
</style>
