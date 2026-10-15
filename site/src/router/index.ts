import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '@/views/ResumeView.vue'

function restoreGithubPagesRoute() {
  const redirect = new URLSearchParams(window.location.search).get('redirect')

  if (!redirect?.startsWith('/')) return

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  window.history.replaceState(null, '', `${base}${redirect}`)
}

restoreGithubPagesRoute()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ResumeView,
    },
    {
      path: '/career',
      name: 'CareerPage',
      component: () => import('@/views/CareerView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
