<template>
    <input type="text" class="goods-search" @input="$emit('change-search', $event.target.value)" :value="searchLine"/>
</template>

<script>
export default {
    name: 'Search',
    props: ['searchLine'],
        
}
</script>

<style>
/* */
</style>