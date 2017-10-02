import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import router from './main/router'
import store from './vuex'

import MainApp from './main/app.vue'

sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(MainApp),
}).$mount('#app')
