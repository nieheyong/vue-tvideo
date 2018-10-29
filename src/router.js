import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Index'
import CommonPage from '@/pages/CommonPage/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/:categoryName',
      name: 'category',
      component: CommonPage
    }
  ]
})
