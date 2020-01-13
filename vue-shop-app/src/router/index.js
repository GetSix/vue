import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
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

  component: () => import( /* webpackChunkName: "about" */ '../views/Sort.vue'),
  children: [{
    path: 'tuijian',
    name: '人气',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/tuijian.vue'),
  }, {

    path: 'vegetable',
    name: '晚餐',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/vegetable.vue'),

  }, {

    path: 'douzhipin',
    name: '方便速食',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/douzhipin.vue'),

  }, {

    path: 'fruit',
    name: '调味品',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/fruit.vue'),

  }, {

    path: 'egg',
    name: '米面粮油',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/egg.vue'),

  }, {

    path: 'fish',
    name: '叮咚心选',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/fish.vue'),

  }, {

    path: 'milk',
    name: '营养早餐',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/milk.vue'),

  }, {

    path: 'breakfast',
    name: '乳品烘焙',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/breakfast.vue'),

  }, {

    path: 'dingdong',
    name: '海鲜水产',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/dingdong.vue'),

  }, {

    path: 'rice',
    name: '肉禽蛋',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/rice.vue'),

  }]
},
{
  path: 'details',
  name: 'details',
  component: () => import( /* webpackChunkName: "about" */ '../views/sort/details.vue'),
},
{
  path: '/eat',
  name: 'eat',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/Eat.vue')
},
{
  path: '/cart',
  name: 'cart',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/Cart.vue')
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
  path: "/discount",
  name: "discount",
  component: () => import('../views/orderHandle/discount.vue')
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
},
{
  path: "/user/greencart",
  name: "greencart",
  component: () => import("../views/orderHandle/greenCart.vue")
}
]

const router = new VueRouter({
  routes
})

export default router;