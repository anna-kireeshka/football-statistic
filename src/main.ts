import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue-good-table-next/dist/vue-good-table-next.css";
import VCalendar from "v-calendar";

import "v-calendar/dist/style.css";

import VueGoodTablePlugin from "vue-good-table-next";

const app = createApp(App);
app.use(VueGoodTablePlugin);
app.use(VCalendar, { componentPrefix: "vc" });

app.component("Datepicker", Datepicker);
app.use(router).mount("#app");
