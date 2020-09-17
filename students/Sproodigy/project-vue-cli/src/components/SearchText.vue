<template>
  <input
    class="search__text"
    type="text"
    v-bind="$attrs"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>
<script>
export default {
  name: 'Header',
  props: {
    searchLine: String,
    value: String,
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.search__text {
	margin: 0;
	border: none;
  padding: .5em;
  font-size: 1em;
  outline: 2px solid #05296E;
}

.search__text:focus {
  outline: 2px solid #a64800;
}
</style>
