<template>
     <main>
            <div class="goods-list">
                <div class="goods-item" v-for="item in goods" v-bind:key="item.id_product">
                    <h3>{{ item.product_name }}</h3>
                    <p>{{ item.price }}</p>
                   <button @click="addToBasket(item)">Добавить</button>
                </div>
                <div v-if="!goods.length" class="goods-list-empty">
                    <span>Нет данных</span>
                  </div>
            </div>
        </main>
</template>
<script>
export default {
    name: 'GoodsList',
    props: {
        goods: Array,
    },
    methods: {
        addToBasket(){
        //
      }
    },
}
</script>    

<style>
/**/
</style>