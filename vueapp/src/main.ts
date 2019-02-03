import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import VueTimeago from 'vue-timeago';
import { createProvider } from './vue-apollo';
import queries from './apolloQueries';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  apollo: queries,
  render: (h) => h(App)
}).$mount('#app');

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  }
)

export default vue;
