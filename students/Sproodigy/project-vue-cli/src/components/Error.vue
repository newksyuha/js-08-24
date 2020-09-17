<template>
  <div class="error">{{ errorMessage }}</div>
</template>
<script>
export default {
  name: 'Error',
  data() {
    return {
      errorMessage: 'Data loading error!',
    }
  }
}
</script>
<style>
.error{
  color: #64310a;
  font-size: 1.2em;
  font-weight: bold;
}
</style>
