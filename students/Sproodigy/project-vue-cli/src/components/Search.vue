<template>
  <div class="search">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Search',
}
</script>
<style>
.search {
  display: flex;
  justify-content: center;
  margin: .5em 1em;
}
</style>
