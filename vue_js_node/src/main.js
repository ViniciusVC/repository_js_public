import { createApp } from 'vue';
import router from './router.js'; // Configurando rotas
import App from './App.vue';

createApp(App)
  .use(router)
  .mount('#app')