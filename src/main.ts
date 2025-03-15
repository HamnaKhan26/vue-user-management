import { createApp } from 'vue';
import App from './components/App.vue';
import { createPinia } from 'pinia';


const root = document.getElementById('vue-root');
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount(root!);