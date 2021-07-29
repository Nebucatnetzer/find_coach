import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '../pages/coaches/CoachesList';
import store from '../store/index.js';

const UserAuth = () => import('../pages/auth/UserAuth');
const CoachDetails = () => import('../pages/coaches/CoachDetails');
const CoachRegistration = () => import('../pages/coaches/CoachRegistration');
const ContactCoach = () => import('../pages/requests/ContactCoach');
const RequestsRecieved = () => import('../pages/requests/RequestsRecieved');
const NotFound = () => import('../pages/NotFound');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: RequestsRecieved,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnAuth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
