import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';

import '../node_modules/bulma/css/bulma.min.css';
// import './assets/sass/index.sass';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
