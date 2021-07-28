import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    auth: authModule,
    coaches: coachesModule,
    requests: requestsModule
  }
});

export default store;
