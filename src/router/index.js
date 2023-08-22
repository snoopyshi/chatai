import Vue from 'vue'
import VueRouter from 'vue-router'
import MobilePage from '../views/Mobile/MobilePage.vue';
import PCPage from '../views/PC/PCPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: window.innerWidth < 768 ? MobilePage : PCPage
  },
]

const router = new VueRouter({
  routes
})

export default router
