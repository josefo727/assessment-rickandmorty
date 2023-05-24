<template>
  <div class="spinner-container">
    <b-spinner variant="primary"></b-spinner>
  </div> 
</template>

<script>
  export default {
    name: 'IsLoading',
  }
</script>

<style scoped>
.spinner-container {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: #cdcbcb96;
}
</style>
