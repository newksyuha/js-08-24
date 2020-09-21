<template>
     <main>
            <div class="goods-list">
                <div class="goods-item" v-for="item in goods" v-bind:key="item.pruduct_id">
                    <h3>{{ item.product_name }}</h3>
                    <p>{{ item.price }}</p>
                   <button @click="$emit('add-item', item)">Добавить</button>
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
}
</script>    

<style>
/**/
</style>