import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'landing',
    component: () => import (/* webpackChunkName: "login" */ '../views/Landing.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import (/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import (/* webpackChunkName: "login" */ '../views/Register.vue')
  },
  {
    path: '/forgotpw',
    name: 'forgotpw',
    component: () => import (/* webpackChunkName: "login" */ '../views/Forgotpw.vue')
  },
  {
    path: '/feed',
    name: 'feed',
    component: () => import (/* webpackChunkName: "login" */ '../views/Feed.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import (/* webpackChunkName: "login" */ '../views/Profile.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import (/* webpackChunkName: "login" */ '../views/Blog.vue')
  },
  {
    path: '/blogview',
    name: 'blogview',
    component: () => import (/* webpackChunkName: "login" */ '../views/BlogArticleView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import (/* webpackChunkName: "login" */ '../views/editProfile.vue')
  },
  {
    path: '/changepw',
    name: 'changepw',
    component: () => import (/* webpackChunkName: "login" */ '../views/changePass.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import (/* webpackChunkName: "login" */ '../views/Help.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import (/* webpackChunkName: "login" */ '../views/Friends.vue')
  },
  {
    path: '/helpline',
    name: 'helpline',
    component: () => import (/* webpackChunkName: "login" */ '../views/Helpline.vue')
  },
  {
    path: '/trial',
    name: 'trial',
    component: () => import (/* webpackChunkName: "login" */ '../views/SignUpForm.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
