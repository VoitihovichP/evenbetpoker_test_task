import { createRouter, createWebHistory } from 'vue-router'

import { frontendPaths } from '@/constants/frontendPaths'
import HomeView from '@/views/Home/HomeView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import NotFound from 'Views/NotFound/NotFound.vue'
import InnerLayout from '@/entities/InnerLayout/ui/InnerLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: frontendPaths.HOME,
      name: 'home',
      meta: { requiresAuth: true },
      component: InnerLayout,
      children: [
        {
          path: '',
          component: HomeView
        }
      ]
    },
    {
      path: frontendPaths.LOGIN,
      name: 'login',
      component: LoginView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      meta: { requiresAuth: true },
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const isAuthenticated = true

  if (requiresAuth && !isAuthenticated) {
    next(frontendPaths.LOGIN)
  } else {
    next()
  }
})

export default router
