// import config from '@/kb.config'

const state = {
  currentAdmin: null
}

const getters = {}

const mutations = {
  'LOGIN' (state, payload) {
    state.currentAdmin = payload
  }
}

const actions = {
  // login ({commit}, payload) {
    
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
