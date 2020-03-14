import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import KbAdmin from '@/pages/Admin/KbAdmin'
import KbArticle from '@/pages/KbArticle'
import KbArticles from '@/pages/KbArticles'
import KbFaq from '@/pages/KbFaq'
import KbFaqs from '@/pages/KbFaqs'
import KbHome from '@/pages/KbHome'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: KbHome
  },
  {
    path: '/admin',
    name: 'Admin',
    component: KbAdmin
  },
  {
    path: '/articles',
    name: 'KbArticles',
    component: KbArticles
  },
  {
    path: '/articles/:id',
    name: 'KbArticle',
    component: KbArticle
  },
  {
    path: '/faqs',
    name: 'KbFaqs',
    component: KbFaqs
  },
  {
    path: '/faqs/:id',
    name: 'KbFaq',
    component: KbFaq
  }
]

const router = new VueRouter({
  routes
})

export default router
