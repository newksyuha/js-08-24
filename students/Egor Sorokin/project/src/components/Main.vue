<template>
    <main class="justify-content-between">
        <div class="goods-list">
            <p v-if="!filteredGoods.length">Нет данных</p>
            <div class="goods-item" v-for="item in filteredGoods" :key="item.product_name">
                <h3>{{item.product_name}}</h3>
                <p>{{item.price}}</p>
                <button class="addCart" type="button" @click="$emit('item-to-add', item)">To Cart</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Main',

    props: {
        filteredGoods: Array,
    },
}
</script>

<style>

</style>