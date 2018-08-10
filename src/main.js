import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import LatestPurchases from './components/LatestPurchases.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/customers'},
  {path: '/customers', component: AppCustomers},
  {path: '/products', component: AppProducts},
  {path: '/customers/:id', component: LatestPurchases, props: true}
  // props true se dodaje da bismo kroz props niz mogli da izvlacimo prodledjene parametre
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
