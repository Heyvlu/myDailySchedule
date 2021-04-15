import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('views/home/Home.vue');
const Setting=()=>import ('views/setting/Setting');

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/setting',
    component:Setting
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
