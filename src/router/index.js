import { ceateRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', components: null },
        { path: '/coaches/:id', components: null, children: [
            { path: 'contact', component: null}
        ]},
        { path: '/register', components: null},
        { path: '/request', components: null},
        { path: '/notFound(.*)', components: null}
    ]
});

export default router;