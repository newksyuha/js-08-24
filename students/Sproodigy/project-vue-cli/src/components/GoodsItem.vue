<template>
  <div class="goods-item">
    <h4><b>Name: </b>{{ item.product_name }}</h4>
    <p><b>Price: </b>{{ item.price }}&#36;</p>
    <button class="header-btn header-btn_small" @click="$emit('add-to-cart', $event)">Buy</button>
    <button class="header-btn header-btn_small" @click="$emit('remove-from-cart', $event)">Remove</button>
  </div>
</template>
<script>
export default {
  name: 'GoodsItem',
  props: {
    item: Object,
  }
}
</script>
<style scoped>
.goods-item {
  width: 23%;
  border: 2px solid #A64800;
  padding: .3em;
  box-sizing: border-box;
  margin: 1%;
  background: #FF6F00;
}

.goods-item h3,
.goods-item p {
  margin: .5em 0;
}

.header-btn {
  background: #05296E;
  border: none;
  margin: .2em;
  padding: .2em 2em;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2em;
  line-height: 1.5em;
  cursor: pointer;
  box-shadow: 0 0 0px 2px #a64800;
  transition: background-color .3s ease;
}

.header-btn:hover {
  color: #000;
  background: #6B8FD4;
}

.header-btn:active {
	background: #BF6E30;
}

.header-btn_small {
	font-size: 1em;
	line-height: 1.2em;
}

@media screen and (max-width: 768px) {
  .goods-item {
    width: 48%;
    margin: 1%;
  }
}

@media screen and (max-width: 540px) {
  .goods-item {
    width: 98%;
    margin: 1%;
  }
}
</style>
