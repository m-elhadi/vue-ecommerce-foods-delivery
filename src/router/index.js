import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductPreview from '../views/ProductPreview.vue'
import BurgerPage from '../views/BurgerPage.vue'
import PizzaPage from '../views/PizzaPage.vue'
import NoodlesPage from '../views/NoodlesPage.vue'
import SushiPage from '../views/SushiPage.vue'
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
  {
    path:'/preview/:id',
    name:'ProductPreview',
    component:ProductPreview,
    props:true
  },
  {
    path:'/burger',
    name:'BurgerPage',
    component:BurgerPage,
    props:true
  },
  {
    path:'/pizza',
    name:'PizzaPage',
    component:PizzaPage,
    props:true
  },
  {
    path:'/noodles',
    name:'NoodlesPage',
    component:NoodlesPage,
    props:true
  },
  {
    path:'/sushi',
    name:'SushiPage',
    component:SushiPage,
    props:true
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
