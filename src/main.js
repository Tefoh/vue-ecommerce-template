import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/font.css'
import './assets/css/style.css'
import './assets/css/responsives.css'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
