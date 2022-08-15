import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '@/components/WeatherPage.vue'

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
      component: () => import('@/components/SearchPage.vue')
    }
  ]
})

export default router
