import { createApp } from 'vue'
import {createMemoryHistory, createRouter} from "vue-router";

import App from './App.vue'

import router from "@/router";
import routes from "@/routes";

createApp(App).use(router).mount('#app')
