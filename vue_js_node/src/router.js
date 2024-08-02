import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import MateriaView from './components/MateriaView.vue'

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