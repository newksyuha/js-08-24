<template>
    <input type="text" class="search" @input="$emit('input', $event.target.value)" :value="value" />
</template>

<script>
export default {
    name: 'Search',
    props: ['value']
}
</script>
