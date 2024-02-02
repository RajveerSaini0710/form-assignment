import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import router from "./router.js";

import BaseCard from "../src/components/ui/baseCard.vue";

const app = createApp(App);

app.component("BaseCard", BaseCard);

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});
app.use(router);
app.mount("#app");
