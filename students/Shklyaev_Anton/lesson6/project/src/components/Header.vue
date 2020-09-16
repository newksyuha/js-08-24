<template>
  <header>
    
    <slot/>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    basket: Array,
  },
  data() {
    return {
      
    };
  },
  methods: {
    removeFromBasket(id) {
      console.log("remove from basket", id);
    },
  },
};
</script>

<style>
/* */
</style>
