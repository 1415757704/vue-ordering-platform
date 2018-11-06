import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['views/login'], resolve) // 入参是resolve，这个函数的返回结果是一个Promise对象，这个对应在组件被渲染的时候执行resolve回调去服务器获取组件
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['views/register'], resolve)
    },
    {
      path: '/mainFrame',
      component: resolve => require(['views/layout'], resolve),
      children: [
        {
          path: '',
          redirect: 'food'
        },
        {
          path: 'mine',
          name: 'mine',
          component: resolve => require(['views/layout/mine'], resolve)
        },
        {
          path: 'order',
          name: 'order',
          component: resolve => require(['views/layout/order'], resolve)
        },
        {
          path: 'food',
          component: resolve => require(['views/layout/food'], resolve),
          children: [
            {
              path: 'detail',
              component: resolve => require(['views/layout/food/detail'], resolve),
              children: [
                {
                  path: '',
                  redirect: 'list'
                },
                {
                  path: 'list',
                  component: resolve => require(['views/layout/food/detail/list'], resolve)
                },
                {
                  path: 'comment',
                  component: resolve => require(['views/layout/food/detail/comment'], resolve)
                },
                {
                  path: 'merchant',
                  component: resolve => require(['views/layout/food/detail/merchant'], resolve)
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
