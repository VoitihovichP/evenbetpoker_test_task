import { createRouter, createWebHistory } from 'vue-router'

import { frontendPaths } from '@/constants/frontendPaths'
import HomeView from '@/views/Home/HomeView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import NotFound from 'Views/NotFound/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: frontendPaths.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: frontendPaths.LOGIN,
      name: 'login',
      component: LoginView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
