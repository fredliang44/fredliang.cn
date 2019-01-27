import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const Photo = () => import('@/pages/Photo')
const StoryBoard = () => import('@/pages/StoryBoard')
const StoryList = () => import('@/pages/StoryList')
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
      path: '/story/',
      name: 'StoryBoard',
      component: StoryBoard
    },
    {
      path: '/story/:project',
      name: 'Storylist',
      component: StoryList
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
