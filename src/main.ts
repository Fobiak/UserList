import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { usersStore } from './store/users.store'

const app = createApp(App)

app.use(router)
app.use(usersStore)

app.mount('#app')
