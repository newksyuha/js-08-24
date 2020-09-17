<template>
    <header>
        <div v-if="isBasketVisible" class="basket">
            <div class="basket__item" v-for="basketItem in basket" v-bind:key="basketItem.id_product">
                <h4>{{ basketItem.product_name }}</h4>
                <p>{{ basketItem.price }}</p>
                <button @click="removeFromBasket(basketItem.id_product)">Удалить</button>
            </div>
        </div>
        <button type="button" class="cart-button" @click="isBasketVisible = !isBasketVisible">Корзина</button>
        <input type="text" class="search" v-model="searchText" />
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        basket: Array,
    },
    data() {
        return {
            isBasketVisible: false,
            searchText: '',
        };
    },
    methods: {
        removeFromBasket(id) {
            console.log('remove from basket', id);
        }
    }
};
</script>

<style>
/* */
</style>
