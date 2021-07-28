import { createRouter, createWebHistory } from 'vue-router';

import UserAuth from '../pages/auth/UserAuth';
import CoachDetails from '../pages/coaches/CoachDetails';
import CoachesList from '../pages/coaches/CoachesList';
import CoachRegistration from '../pages/coaches/CoachRegistration';
import ContactCoach from '../pages/requests/ContactCoach';
import RequestsRecieved from '../pages/requests/RequestsRecieved';
import NotFound from '../pages/NotFound';

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
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
