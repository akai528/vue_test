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
            <router-link class="nav-link" to="/page/child/">卡片 3</router-link>
            <a href='#' class="nav-link" @click.prevent="updatePath">
        </li>
    </ul>
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
