import Vue from 'vue'
import Router from 'vue-router'
import SearchEngine from '@/components/search-engine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchEngine',
      component: SearchEngine
    }
  ]
})
