import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '../views/WeatherPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WeatherPage
    },
    {
      path: '/w/:location',
      name: 'weather',
      component: WeatherPage
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchPage.vue')
    }
  ]
})

export default router