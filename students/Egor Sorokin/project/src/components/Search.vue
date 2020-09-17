<template>
    <div id="searchComponent">
        <input type="text" class="search" v-model="searchText">
        <button id="search-button" type="button" @click="$emit('filter-goods', searchText)">Искать</button>
    </div>
</template>

<script>
export default {

name: 'Search',

data() {
    return {
        searchText: '',
    };
},

}

</script>

<style>

</style>