import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const Photo = () => import('@/pages/Photo')
const About = () => import('@/pages/About')
const NotFound = () => import('@/pages/NotFound')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/photo/',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/photo/:page',
      name: 'PhotoPage',
      component: Photo
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
