import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import AboutView from './pages/AboutView.vue'
import MateriaView from './pages/MateriaView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/materia', component: MateriaView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router