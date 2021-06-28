import { createApp } from 'vue';

import router from './router';
import store from './store';
import App from './App';
import BaseCard from './components/ui/BaseCard';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);

app.mount('#app');
