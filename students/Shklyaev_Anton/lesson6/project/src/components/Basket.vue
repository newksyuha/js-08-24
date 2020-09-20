<template>
  <div v-if= "isBasketVisible" class="basket">
    <div class="basket__item" v-for = "item in basketGoods" v-bind:key= "item.id_product">
      <h4>{{ basketItem.product_name }}</h4>
      <p>{{ basketItem.price }}</p>
      <button @click="removeFromBasket(basketItem.id_product)">Удалить</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "Basket",
  props: {
    basketGoods: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.basket {
  position: absolute;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 10px 15px;
  top: 70px;
  right: 30px;
}
.basket-item {
  margin-bottom: 10px;
}
</style>