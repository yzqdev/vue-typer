import "./styles/demo.less";

import Demo from "./Demo.vue";
import VueTyper from "../index";

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css'
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
import {createApp} from "vue";

const app = createApp(Demo);
app.use(hljsVuePlugin)
// Install BootstrapVue
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
app.use(ElementPlus);
app.use(VueTyper);
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// eslint-disable-next-line no-new

app.mount("#app");
