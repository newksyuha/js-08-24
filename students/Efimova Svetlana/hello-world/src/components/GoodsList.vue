<template>
    <main>
            <div class="goods-list">
                <div class="goods-item" v-for="item in goods" v-bind:key="item.id">
                    <h3>{{ item.name }}</h3>
                    <div class="goods-item-img"></div>
                    <p>{{ item.price }}</p>
                    <button class="cart-button" type="button" v-on:click="$emit('add-item', item)">Добавить</button>
                </div>
                <p v-if="!goods.length">Нет данных</p>
            </div>
            <span class="total">{{ countSum }}</span>
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