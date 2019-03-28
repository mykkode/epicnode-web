import Vue from 'vue'
import VueRouter from 'vue-router'
import 'vue/dist/vue.min.js'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '../src/style/style.css'

import layout from './layout.vue'
import Exercises from './Exercises.vue'
import Queue from './Queue.vue'
import Top from './Top.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)


const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component:  Home},
    { path: '/exercises', component:  Exercises},
    { path: '/queue', component: Queue },
    { path: '/top', component: Top },
    { path: '/foo', component: Foo },
  ]
})

new Vue({
  router,
  el: '#layout',
  render: h => h(layout)
})
