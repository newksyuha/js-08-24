<template>
  <button class="header-btn" @click="$emit('show-cart')">{{ btnText }}</button>
</template>

<script>
export default {
  name: 'HeaderButton',
  props: {
  },
  data() {
    return {
      btnText: 'Cart',
    }
  },
}
</script>

<style scoped>
.header-btn {
  background: #05296E;
  border: none;
  padding: .2em 2em;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2em;
  line-height: 1.5em;
  cursor: pointer;
  box-shadow: 0 0 0px 2px #a64800;
  transition: background-color .3s ease;
}

.header-btn:hover {
  color: #000;
  background: #6B8FD4;
}

.header-btn:active {
	background: #BF6E30;
}

.header-btn_small {
	font-size: 1em;
	line-height: 1.2em;
}
</style>
