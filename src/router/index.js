import Vue from 'vue'
import Router from 'vue-router'
// 引入登录路由组件
import Login from '@/views/login'
// 引入首页路由组件
import HomeIndex from '@/views/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {name: 'login', path: '/login', component: Login},
    {name: 'homeindex', path: '/', component: HomeIndex}
  ]
})
