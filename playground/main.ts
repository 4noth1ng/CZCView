import { createApp } from "vue";
import App from "./app.vue";
import QRView from "@QRView/components";
const app = createApp(App);
app.use(QRView);
app.mount("#app");
