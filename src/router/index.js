import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';

const routes = [
    { path: "/",component: Home},
    { path: "/Login",component: Login},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;