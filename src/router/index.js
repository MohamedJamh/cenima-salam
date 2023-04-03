import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/HomeView.vue';
import Popular from '../views/PopularMovieView.vue';
import Login from '../views/Auth/LoginView.vue';
import Register from '../views/Auth/RegisterView.vue';

const routes = [
    { path: "/",component: Home},
    { path: "/Login",component: Login},
    { path: "/Register",component: Register},
    { path: "/Popular",component: Popular},
    { path: "/Premier",component: Popular},
    { path: "/Upcoming",component: Popular},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;