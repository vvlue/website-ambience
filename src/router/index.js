import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // the path name is lower case
  {
    path: '/pop',
    name: 'Pop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pop.vue')
  },
  {
    path: '/rnb',
    name: 'Rnb',
    component: () => import(/* webpackChunkName: "about" */ '../views/RnB.vue')
  },
  {
    path: '/classical',
    name: 'Classical',
    component: () => import(/* webpackChunkName: "about" */ '../views/Classical.vue')
  },
  {
    path: '/lofi',
    name: 'Lofi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lofi.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
