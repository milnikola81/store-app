import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import CustomerService from './services/CustomerService.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/customers'},
  {path: '/customers', component: AppCustomers},
  {path: '/products', component: AppProducts}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
