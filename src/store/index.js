import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from '@/kb.config'
import { firebaseActions, firebaseMutations} from './firebase'
import apiActions from './apiActions'

// default vuex datastore
import articles from './articles'
import faqs from './faqs'

// Auth not yet implemented
import auth from './auth'

// decide which mutations and / or actions to load dependant on which datastore you are using.
let loadedActions
let loadedMutations
switch (config.datastore) {
  case 'firebase':
    loadedActions = firebaseActions
    loadedMutations = firebaseMutations
    break
  case 'api':
    loadedActions = apiActions
    break
  case 'vuex':
    break
  case 'json':
    break
  default:
    break
}

const state = {
  ...auth.state,
  // articles: [],
  // faqs: []
  articles: articles,
  faqs: faqs
}

const getters = {
  ...auth.getters,
  subjects: state => {
    return [...new Set(state.articles.map(article => article.subject))]
  },
  article: state => id => {
    return state.articles.find(article => article.id === id)
  },
  faq: state => id => {
    return state.faqs.find(faq => faq.id === id)
  }
}

const mutations = {
  ...auth.mutations,
  ...loadedMutations,
  'LOAD_ARTICLES' (state, payload) {
    state.articles = payload
  },
  'ADD_ARTICLE' (state, payload) {
    state.articles.push(payload)
  },
  'LOAD_FAQS' (state, payload) {
    state.faqs = payload
  },
  'ADD_FAQ' (state, payload) {
    state.faqs.push(payload)
  }
}

const actions = {
  ...auth.actions,
  ...loadedActions
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
