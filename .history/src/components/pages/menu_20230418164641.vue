<template>
  <div class="hello">
    <router-link to="/page/">卡片 1</router-link>
    <router-link to="/page/child2">卡片 2</router-link>
    <router-link to="/page/child3">卡片 3</router-link>
    
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
};
</script>
