import { createApp } from 'vue';

import router from './router';
import store from './store';
import App from './App';
import BaseButton from './components/ui/BaseButton';
import BaseCard from './components/ui/BaseCard';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
