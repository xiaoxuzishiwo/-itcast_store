// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'
// 引入axios
import MyAxios from '@/components/myaxios'
// 格式化日期
import moment from 'moment'
// 格式化日期
Vue.filter('fmDate', (value, fmtStr) => {
  return moment(value).format(fmtStr)
})

Vue.use(MyAxios)
Vue.use(ElementUI)
Vue.use(router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
