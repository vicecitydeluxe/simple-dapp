import {createApp} from 'vue'
import {createPinia} from 'pinia';
import './style.css'
import App from './App.vue'

const app = createApp(App);
const store = createPinia()
app.use(store)
app.mount('#app')
