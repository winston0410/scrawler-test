import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import 'modern-css-reset'

createApp(App).use(store).mount("#app");
