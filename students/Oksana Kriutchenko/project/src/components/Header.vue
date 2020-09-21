<template>
     <header>
            <button type="button" class="cart-button" @click="$emit('basket-toggle')">Корзина</button>
        </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        basket: Array,
    },
   };
 
</script>

<style>
/**/ 
</style>