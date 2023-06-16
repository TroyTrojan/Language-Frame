import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Index from '../pages/index'
import TicketList from '../pages/ticketList'
import TicketDesc from '../pages/ticketDesc'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/ticketList',
    name: 'TicketList',
    component: TicketList
  },
  {
    path: '/ticketDesc',
    name: 'TicketDesc',
    component: TicketDesc
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
