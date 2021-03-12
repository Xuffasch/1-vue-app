import { createApp } from 'vue'
import App from './App.vue'
import 'windi.css'
import './styles/index.css'
import router from './router'
import { store, key } from './store/viteStore'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.mount('#app')
