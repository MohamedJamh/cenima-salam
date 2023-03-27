import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/LoginView.vue';

const routes = [
    { path: "/Login",component: Login},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;