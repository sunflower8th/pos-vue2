// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引用 element-ui 每个页面都能使用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'// 样式 单独引用

import App from './App'
import router from './router'

Vue.use(ElementUI)// Vue.use 全局可用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
