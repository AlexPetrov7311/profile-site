import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: HelloWorld
    }
  ]
})
