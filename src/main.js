import {createApp} from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from "axios";
// import PrimeVue from "primevue/config";
import '@/main.css'

axios.defaults.baseURL = process.env["VUE_APP_API_ENDPOINT"];

const app = createApp(App);
app.use(VueAxios, axios);
app.mount('#app');
