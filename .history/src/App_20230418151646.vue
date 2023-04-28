<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/index">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/page">Page</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  created() {
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`; 
    // 'https://vue-course-api.hexschool.io/api/order_test/products';
    console.loge(process.env.APIPATH, process.env.CUSTOMPATH);
    this.$http.get(api).then((response) =>{
      console.log(response.data);
    });
  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
