import Vue from 'vue'
import Router from 'vue-router'
import SearchEngine from '@/components/search-engine'
import SearchIframe from '@/components/SearchIframe'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchEngine',
      component: SearchEngine
    },
    {
      path: '/Search',
      name: 'SearchIframe',
      component: SearchIframe
    }
  ]
})
