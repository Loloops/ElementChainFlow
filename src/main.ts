import { app } from "./01_app";
import { createPinia } from "pinia";

const pinia = createPinia();

app.use(pinia);
app.mount("#app");
