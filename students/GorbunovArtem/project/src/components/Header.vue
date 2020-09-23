<template>
    <header>
        <slot />
        <button type="button" class="cart-button" @click="$emit('basket-toggle')">Корзина</button>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        basket: Array,
    }
};
</script>

<style scoped>
button {
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    background: #FFBE40;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    margin: 10px;
	
}
button:hover {
    border: none;
    background-color: #A66E00;
}

button:active {
    border: none;
    background-color: #FFCF73;
    color: #A66E00	;
}
</style>
