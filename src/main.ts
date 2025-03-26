import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/style.css'
import router from './router'


// Créer une instance de l'application Vue
createApp(App)
.use(createPinia())
.use(router)
.mount('#app')

// Créer et ajouter Pinia (gestion de l'état global) à l'application

// Monter l'application Vue sur l'élément HTML avec l'ID "app"
