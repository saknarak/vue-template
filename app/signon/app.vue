<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '../sass/signon';
</style>

<script>
import router from './router'
import store from './vuex/store'

export default {
  store,
  router,
}
</script>
