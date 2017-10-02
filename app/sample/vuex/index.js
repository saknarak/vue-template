import types from './types'

const state = {
  samples: [],
}

const mutations = {
  [types.mutations.setSamples](state, list) {
    state.samples = list
  },
}

const actions = {
  [types.actions.setSamples]: ({ commit }, list) => {
    commit(types.SET_SAMPLES, list)
  },
}

const getters = {
  [types.getters.samples]: (state) => {
    return state.samples
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
