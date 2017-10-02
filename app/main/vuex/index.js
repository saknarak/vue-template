import Vue from 'vue'

import types from './types'

const state = {
  lang: 'th',
}

const mutations = {
  [types.mutations.setLang](state, newLang) {
    state.lang = newLang
  },
}

const actions = {
  [types.actions.setLang]: ({ commit }, newLang) => {
    commit(types.mutations.setLang, newLang)
    Vue.config.lang = newLang
  },
}

const getters = {
  [types.getters.lang]: state => state.lang,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
