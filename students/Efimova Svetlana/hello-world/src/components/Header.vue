<template>
    <header>         
            <slot />
            <button class="cart-button" type="button" v-on:click="$emit('basket-toggle')">Корзина</button>
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
            searchLine: '',
            isBasketVisible: false,
        }
    },
    methods: {
        removeFromBasket(id) {
            console.log('remove from basket', id);
        }
    }
    
}
</script>

<style>
.cart-button {
    width: 120px;
    height: 30px;
    margin: 10px;
    background-color: #fff;
    border: 1px solid gray;
    border-radius: 3px;
    box-sizing: border-box;
}

.cart-button:hover {
    background-color: #ccc;
}

</style>
