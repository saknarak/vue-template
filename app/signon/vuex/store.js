import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutation = {}

const store = new Vuex.Store({
  state: {},
  mutation,
  strict: process.env.NODE_ENV !== 'production',
})

export default store
