<template>
    <div class="basket" v-if="isBasketVisible">
        <div class="basket-item" v-for="basketItem in basket" v-bind:key="basketItem.id">
            <h4>{{ basketItem.name }}</h4>
            <p>{{ basketItem.price }}</p>
            <button v-on:click="$emit('remove-item', basketItem.id)">Удалить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Basket",
    props: {
        basket: Array,
        isBasketVisible: Boolean,
    },
    
}
</script>

<style>
/* */
</style>