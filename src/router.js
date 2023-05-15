import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/login.vue'
import Coaches from './pages/coaches/index.vue';
import CoachDetail from './pages/coaches/_id.vue';
import CoachContact from './pages/coaches/contact.vue';
import CoachRegister from './pages/coaches/register.vue';
import Messages from './pages/messages.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {path: '/login', component:Login},
    { path: '/coaches', component:Coaches },
    {
        path: '/coaches/:id', 
        name: 'CoachDetail',
        component: CoachDetail,
        props: true,
        children:[
            { path: 'contact',component: CoachContact}
        ]
    },
    { path: '/coaches/register',component: CoachRegister },
    { path: '/messages',component: Messages },
  ]
});
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  const user = JSON.parse(localStorage.getItem('user')) || null;

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  if (loggedIn && to.path === '/login') {
    return next('/');
  }
  if (user?.type === 'coach' && to.path === '/coaches/register') {
    return next('/coaches');
  }

  next();
})

export default router;
