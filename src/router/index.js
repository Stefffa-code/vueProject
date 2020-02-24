import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },    
    {
      path: '/trend',
      name: 'Trend',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Trend.vue')
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: () => import('../views/Subscribe.vue')
    },
    {
      path: '/library',
      name: 'Library',
      component: () => import( '../views/Library.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import( '../views/History.vue')
    },
    {
      path: '/postponed',
      name: 'Postpohed',
      component: () => import( '../views/Postponed.vue')
    },
    {
      path: '/likes',
      name: 'Likes',
      component: () => import( '../views/Likes.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import( '../views/searchPage.vue')
    },
    
    {
      path: '/post/:id',
      component: () => import( '../views/postPage'),
      name: 'postPage'
    },
    

  ]
});

export default router
