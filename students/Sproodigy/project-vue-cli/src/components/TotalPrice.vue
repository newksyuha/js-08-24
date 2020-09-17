<template>
  <div class="total-price">{{ prefix }}{{ totalPrice }}&#36;</div>
</template>
<script>
export default {
  name: 'TotalPrice',
  props: {
    totalPrice: Number,
  },
  data() {
    return {
      prefix: 'Total price: ',
    }
  }
}
</script>
<style scoped>
.total-price {
  width: 100%;
  padding: .5em;
  text-align: center;
  background: #A64800;
  color: #fff;
  box-sizing: border-box;
  font-size: x-large;
}
</style>
