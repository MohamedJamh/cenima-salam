import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';

const routes = [
    { path: "/",component: Home},
    { path: "/About",component: About},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;