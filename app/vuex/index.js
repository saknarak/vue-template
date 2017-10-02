import Vue from 'vue'
import Vuex from 'vuex'

import MainStore from '@/main/vuex'
import SampleStore from '@/sample/vuex'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  strict: debug,
  modules: {
    main: MainStore,
    sample: SampleStore,
  },
})
