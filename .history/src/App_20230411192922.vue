<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  created() {
    const api = 'https://vue-course-api.hexschool.io/api/order_test/products';
    this.$http.get(api).then((response) =>{
      console.log(response.data);
    });
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
