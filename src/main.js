import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/iconfont.css'
import './style/base.scss'
import './rem/index'

const Main = createApp(App)
Main.use(store)
Main.use(router)
Main.mount('#app')