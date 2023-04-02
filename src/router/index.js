import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/HomeView.vue';
import Login from '../views/Auth/LoginView.vue';
import Register from '../views/Auth/RegisterView.vue';

const routes = [
    { path: "/",component: Home},
    { path: "/Login",component: Login},
    { path: "/Register",component: Register},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;