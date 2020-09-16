<template>
  <div class="header">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style>
.header {
  position: relative;
  padding: 1em;
  background: #FFDC40;
  box-shadow: 0 3px 12px 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
