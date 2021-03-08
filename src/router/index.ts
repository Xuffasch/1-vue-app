import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Versus from '../views/Versus.vue'

const history = createWebHistory()
export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/versus',
    name: 'versus',
    component: Versus,
  },
]

export const allPages = routes.map((r) => {
  const { name } = r
  return name == 'home'
    ? {
        name: name,
        title: 'Album Comics Clone',
      }
    : {
        name: name,
        title: name,
      }
})

const router = createRouter({
  history,
  routes,
})

export default router
