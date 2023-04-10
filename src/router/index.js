import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/HomeView.vue';
import Popular from '../views/PopularMovieView.vue';
import Premier from '../views/PremierMovieView.vue';
import Upcoming from '../views/UpcomingMovieView.vue';
import Auth from '../views/Auth/AuthView.vue';
import Dashboard from '../views/DashboardView.vue';

const routes = [
    { path: "/",component: Auth},
    { path: "/Dashboard",component: Dashboard},
    { path: "/Home",component: Home},
    { path: "/Popular",component: Popular},
    { path: "/Premier",component: Premier},
    { path: "/Upcoming",component: Upcoming},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;