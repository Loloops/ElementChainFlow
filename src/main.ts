import { createPinia } from "pinia";
import { app } from "./01_app";

app.use(createPinia());

app.mount("#app");
