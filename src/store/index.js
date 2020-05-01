import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from '@/kb.config'
import { firebaseActions, firebaseMutations} from './firebase'
import apiActions from './apiActions'

// default articles
import articles from './articles'

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
  // articles: [],
  // faqs: []
  articles: articles,
  faqs: [
    { id: '1', question: 'How does this work?', answer: 'fdsf' },
    { id: '2', question: 'What are you doing?', answer: '' },
    { id: '3', question: 'Where are we going', answer: '' },
    { id: '4', question: 'Who are you?', answer: '' },
    { id: '5', question: 'Are we nearly there yet?', answer: '' },
    { id: '6', question: 'Why are we here?', answer: '' }
  ]
}

const getters = {
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
  ...loadedActions
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
