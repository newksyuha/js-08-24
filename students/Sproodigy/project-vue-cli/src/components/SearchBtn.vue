<template>
  <button class="search__btn" @click="$emit('filter-goods')">{{ btnText }}</button>
</template>
<script>
export default {
  name: 'Header',
  props: {

  },
  data() {
    return {
      btnText: 'Search',
    }
  }
}
</script>
<style scoped>
.search__btn {
	margin: 0;
	border: none;
  padding: .5em;
  font-size: 1em;
  outline: 2px solid #05296E;
}

.search__btn {
  background: #ccc;
  cursor: pointer;
  transition: background-color .3s ease;
}

.search__btn:hover {
  background: #bbb;
}
</style>
