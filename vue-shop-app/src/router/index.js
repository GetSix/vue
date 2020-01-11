import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sort',
    name: 'sort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sort.vue'),
    children: [{
      path: 'tuijian',
      name: 'tuijian',
      component: () => import(/* webpackChunkName: "about" */ '../views/sort/tuijian.vue'),
    }]
  },
  {
    path: 'details',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/sort/details.vue'),
  },
  {
    path: '/eat',
    name: 'eat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Eat.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    children: [
      {
        path: '/user/loginpage',
        name: 'loginpage',
        component: () => import('../views/login/loginpage.vue')
      },

    ]
  },
  {
    path: "/orderHandle",
    name: "orderHandle",
    component: () => import('../views/orderHandle/orderHandle.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../views/addAdress/addAdress.vue')
  },
  {
    path: "/user/PIM",
    name: "PIM",
    component: () => import("../views/login/me.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
