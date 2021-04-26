import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Calendar from './Calender';
import Diet from './Diet';

Vue.config.productionTip = false

const routes = [
  { path: '/calendar', name: 'calendar', component: Calendar },
  { path: '/diet', name: 'diet', component: Diet }
]
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
