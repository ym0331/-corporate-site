import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { MotionPlugin } from '@vueuse/motion'
import VueElementLoading from "vue-element-loading";
import axios from 'axios'
import VueAxios from 'vue-axios'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(MotionPlugin)
  .use(VueAxios, axios)
  .component("VueElementLoading", VueElementLoading)
  .mount('#app')
