import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['views/login'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['views/register'], resolve)
    },
    {
      path: '/mainFrame',
      name: 'mainFrame',
      component: resolve => require(['views/layout'], resolve)
    }
  ]
})
