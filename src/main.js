import {createApp} from 'vue'
import {createPinia} from 'pinia';
import './style.css'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
const store = createPinia()
app.use(store)
app.mount('#app')
app.use(Toast)
