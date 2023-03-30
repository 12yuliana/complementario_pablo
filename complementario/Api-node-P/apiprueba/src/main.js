import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar el paquete de Axios instalado
import axios from 'axios'
import VueAxios from 'vue-axios'

// Importar bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// usar los paquetes importados use(VueAxios, axios)
createApp(App).use(router).use(VueAxios, axios).mount('#app')


