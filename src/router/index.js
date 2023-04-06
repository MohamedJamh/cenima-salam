import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/HomeView.vue';
import Popular from '../views/PopularMovieView.vue';
import Premier from '../views/PremierMovieView.vue';
import Upcoming from '../views/UpcomingMovieView.vue';
import Login from '../views/Auth/LoginView.vue';
import Register from '../views/Auth/RegisterView.vue';
import test from '../views/TestView.vue';

const routes = [
    { path: "/",component: Home},
    { path: "/Login",component: Login},
    { path: "/Register",component: Register},
    { path: "/Popular",component: Popular},
    { path: "/Premier",component: Premier},
    { path: "/Upcoming",component: Upcoming},
    { path: "/test",component: test},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;