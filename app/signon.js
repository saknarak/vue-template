import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import router from './signon/router'
import store from './signon/vuex'

import SignOnApp from './signon/app'

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(SignOnApp),
})
