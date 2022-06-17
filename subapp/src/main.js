import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementUI)
app.mount('#app')
