import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cats from '../views/Cats.vue';
import Dogs from '../views/Dogs.vue';
import Pet from '../views/Pet.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cats',
      component: Cats,
    },
    {
      path: '/dogs',
      component: Dogs,
    },
    {
      path: '/pet/:species/:id',
      component: Pet,
    },
  ],
});

export default router;
