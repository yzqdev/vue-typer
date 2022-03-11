// Import vue component
import VueTyper from "./vue-typer/VueTyper.vue";



export default {
  install : (app) => {
    app.component(VueTyper.name, VueTyper);
  }
};


