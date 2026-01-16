import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './main.css'
import App from './App.vue'
import router from './router'
import { usersStore } from './store/users.store'

const app = createApp(App)

app.use(router)
app.use(usersStore)
app.use(ElementPlus)

app.mount('#app')
