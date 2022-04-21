/*
 * @Description: 
 * @autor: zhan.liang  <liang.zhan06@hand-china.com>
 * @Date: 2022-04-20 15:21:32
 * @LastEditors: Seven
 * @version: 0.0.1
 * @copyright: Copyright (c) 2019, Hand
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import router from './router'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
