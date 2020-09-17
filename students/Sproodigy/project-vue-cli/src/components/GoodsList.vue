<template>
  <div :class="changeClasses">
    <slot>{{ emptyGoodsListMessage }}</slot>
  </div>
</template>
<script>
export default {
  name: 'GoodsList',
  props: {
    filteredGoods: Array,
  },
  data() {
    return {
      default: true,
      empty: false,
      emptyGoodsListMessage: 'No data!',
    }
  },
  computed: {
    changeClasses() {
      return {
        'goods-list': this.default,
        'goods-list_empty': !this.filteredGoods.length,
      }
    }
  }
}
</script>
<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 2em 0;
  box-shadow: 0px 0px 6px 3px;
  margin: 2em 1em;
}

.goods-list_empty {
	justify-content: center;
	padding: 1em;
	font-size: 2em;
}
</style>
