const API_URL = 'http://dev.test:4567'
const ADMIN_URL = 'http://localhost:4567/admin'

import axios from 'axios'

export const apiActions = {
  loadArticles ({commit}) {
    axios.get(API_URL + '/articles').then(response => {
      commit('LOAD_ARTICLES', response.data.articles)
    }).catch(err => {
      console.log(err)
    })
  },
  addArticle ({commit}, payload) {
    axios.post(ADMIN_URL + '/articles', payload).then(response => {
      commit('ADD_ARTICLE', response.data.article)
    }).catch(err => {
      console.log(err)
    })
  },
  loadFaqs ({commit}) {
    axios.get(API_URL + '/faqs').then(response => {
      commit('LOAD_FAQS', response.data.faqs)
    }).catch(err => {
      console.log(err)
    })
  },
  addFaq ({commit}, payload) {
    axios.post(ADMIN_URL + '/faqs', payload).then(response => {
      commit('ADD_FAQ', response.data.faq)
    }).catch(err => {
      console.log(err)
    })
  },
}

export default apiActions
