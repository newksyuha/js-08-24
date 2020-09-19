<template>
     <header>
            <input type="text" class="search" v-model="searchText" />
            <button type="button" class="search-button">Искать</button>
            <div v-if="isBasketVisible" class="basket">
                <div class="basket__item" v-for="basketItem in basket" v-bind:key="basketItem.id_product" >
                    <h4>{{ basketItem.product_name }}</h4>
                    <p>{{ basketItem.price }}</p>
                    <button @click="removeFromBasket(basketItem.id_product)">Удалить</button>
                </div>
            </div>
            <button type="button" class="cart-button" @click="isBasketVisible = !isBasketVisible">Корзина</button>
        </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        basket: Array,
    },
    data(){
        return{
        searchText: '',
        isBasketVisible: false,
        };
    },
    methods: {
        removeFromBasket(id){
           console.log('remove to basket', id);
}
    }
};
</script>
<style>
/**/ 
</style>