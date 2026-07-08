import { createApp } from 'vue'
import App from './Rwd.vue'
// import router from './router' // 👈 引入你剛剛建的 router 資料夾

const app = createApp(App)

// app.use(router) // 👈 告訴 Vue 專案：我要使用路由功能！

app.mount('#app')