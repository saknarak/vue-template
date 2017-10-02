<template>
  <div class="main-page">
    <div class="layout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from '../vuex'

export default {
  store,
}
</script>

<style lang="scss">
@import "../sass/main";
</style>
