<template>
    <main>
        <div v-if="goods.length" class="goods-list">
            <div class="goods-item" v-for="item in goods" v-bind:key="item.id">
                <h3>{{ item.name }}</h3>
                <p>{{ item.price }}</p>
                <button @click="$emit('add-item', item)">Buy</button>
            </div>
        </div>
        <div v-else class="goods-list__empty">Нет данных</div>
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
/* */
</style>