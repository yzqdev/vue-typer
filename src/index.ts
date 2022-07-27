// Import vue component
import VueTyper from "./VueTyper.vue";
import {App} from "vue";

export default {
  install: (app:App) => {
    app.component(VueTyper.name, VueTyper);
  },
};
