import Vue from 'vue'
import Router from 'vue-router'
import Alist from '@/components/Alist'
import Aactive from '@/components/Aactive'
import Blist from '@/components/Blist'
import Bactive from '@/components/Bactive'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/A'
    },
    {
      path: '/A',
      name: 'A-list',
      component: Alist
    },
    {
      path: '/A/active',
      name: 'A-active',
      component: Aactive
    },
    {
      path: '/B',
      name: 'B-list',
      component: Blist
    },
    {
      path: '/B/active',
      name: 'B-active',
      component: Bactive
    }
  ]
})
