import Vue from 'vue';

import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue';
import Work from './Work.vue';
import Detail from './Detail.vue';

import VueRouter from 'vue-router';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/work', name: 'work', component: Work },
  { path: '/work/:company', name: 'detail', component: Detail }
];

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
