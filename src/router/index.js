import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import( /* webpackChunkName: "about" */ '../views/Tables.vue')
  },
  {
    path: '/csv',
    name: 'csv',
    component: () => import( /* webpackChunkName: "about" */ '../views/CSV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router