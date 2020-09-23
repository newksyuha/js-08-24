<template>
    <header>
        <slot />
        <button type="button" class="cart-button" @click="$emit('basket-toggle')">Корзина</button>
    </header>
</template>

<script>
export default {
    name: 'Header',
    created() {
        this.$eventBus.$on('button-click', this.handleButtonClick);
    },
    methods: {
        handleButtonClick(payload) {
            console.log('handleButtonClick', payload);
        }
    }
};
</script>

<style>

</style>