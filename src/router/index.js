import { createRouter, createWebHistory } from 'vue-router';

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
    { path: '/coaches', components: CoachesList },
    {
      path: '/coaches/:id',
      components: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/register', components: CoachRegistration },
    { path: '/requests', components: RequestsRecieved },
    { path: '/notFound(.*)', components: NotFound }
  ]
});

export default router;
