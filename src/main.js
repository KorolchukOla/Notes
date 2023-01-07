import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router).use(PrimeVue);

app.mount("#app");
