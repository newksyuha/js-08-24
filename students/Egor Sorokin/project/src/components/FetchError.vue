<template>
    <div class="errorBlock" v-if="fetchError"><div>Нет данных</div></div>
</template>

<script>
export default {
    name: 'FetchError',
    props: {
        fetchError: Boolean,
    },
}
</script>

<style>
.errorBlock {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #b9b7b7;
    font-weight: 700;
    font-size: 36px;
}
</style>