import { createPinia } from "pinia";
import { app } from "./01_app";
import { createPinia } from "pinia";

<<<<<<< HEAD
app.use(createPinia());
=======
const pinia = createPinia();

app.use(pinia);
>>>>>>> 8400b639c178fd1242c3a2eeafca7de9be5fd0aa
app.mount("#app");
