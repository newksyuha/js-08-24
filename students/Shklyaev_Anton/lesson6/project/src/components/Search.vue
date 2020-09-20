<template>
  <div class="search">
    <input type="text" class="goods-search" :value="text" @input= "handInputText" />
    <button type="button" class="search-button">Искать</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
      text: {
          required: true,
          type: String,
      },
  },
  methods: {
      handInputText(e) {
          this.$emit('textChange', e.target.value);
      },
  },
};
</script>