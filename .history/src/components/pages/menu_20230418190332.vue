<template>
    <div class="hello">
     <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/page/">卡片 1</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/page/child2">卡片 2</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/page/child/">卡片 3</router-link>
        </li>
        <li class="nav-item">
            <a href='#' class="nav-link" @click.prevent="updatePath">切換到指定頁面</a>
        </li>
        <li class="nav-item">
            <a href='#' class="nav-link" @click.prevent="beforePath">回到上頁</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {
    updatePath() {
        this.$router.push('/page/child2');
    },
    beforePath() {
        this.$router.go(-1);
    },
  },
};
</script>
