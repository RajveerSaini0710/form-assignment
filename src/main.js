import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import router from "./router.js";
import "primevue/resources/themes/lara-light-purple/theme.css";

import BaseCard from "../src/components/ui/baseCard.vue";
import BaseButton from "../src/components/ui/baseButton.vue";

const app = createApp(App);

app.use(router);

app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);

app.use(PrimeVue, {
  unstyled: false,
  pt: Lara,
});

app.mount("#app");
