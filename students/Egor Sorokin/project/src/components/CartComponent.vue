<template>

<div id="cartComponent">
    <button class="cart-button" type="button" @click="toggleCartVisibility">Корзина</button>
    <div class="cart-list" v-if="isVisibleCart">
        <div class="cart-item" v-for="cartItem in cart.items" :key="cartItem.name">
            <h3>{{cartItem.item.name}}</h3>
            <p>{{cartItem.item.price}}</p>
            <button class="cart-count-button" type="button" @click="cartItem.reduceAmount()">-</button><p class="count">{{cartItem.count}}</p><button class="cart-count-button" type="button" @click="cartItem.increaseAmount()">+</button>
            <button class="cart-delete-button" type="button" @click="$emit('cart-item-deleted', cartItem.item.id)">Удалить</button>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'Cart',

    data() {
        return {
            isVisibleCart: false,
        }
    },

    props: {
        cart: Object,
    },

    methods: {
        toggleCartVisibility() {
            this.isVisibleCart = !this.isVisibleCart;
        },
    }
}
</script>

<style>

.cart-button {
    background-color: #48d648;
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    margin: 10px;
}

.cart-item {
    background-color: #fff;
    display: inline-block;
    margin: 10px;
    padding: 10px;
}

.count {
    float: left;
    width: 20px;
    text-align: center;
    margin: 0 auto;
}

.cart-button:hover {
    background-color: #59e759;
}

.cart-button:active {
    background-color: #6af86a;
}

.cart-count-button{
    float: left;
}

.cart-delete-button{
    clear: both;
    float: left;
    margin-top: 5px;
}

</style>