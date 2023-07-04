import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
      component: HomeView
    },
    {
      path: '/app',
      name: 'app',
      children: [
        {
          path: '',
          name: 'app.dashboard',
          component: () => import('../views/app/Dashboard.vue')
        }
      ],
      component: () => import('../views/app/AppView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
