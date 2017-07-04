import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pos from '@/components/page/Pos'
import Ele from '@/components/page/element-test'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    },
    {
      path: '/ele',
      component: Ele
    },

  ]
})
