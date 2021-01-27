import Vue from 'vue'
import Router from 'vue-router'
import LikeNumber from '@/components/LikeNumber.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LikeNumber',
      component: LikeNumber
    }
  ]
})
