import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/HomeView.vue';
import Popular from '../views/PopularMovieView.vue';
import Showtimes from '../views/ShowtimesView.vue';
import ShowtimesDetails from '../views/ShowtimeReservationView.vue';
import Upcoming from '../views/UpcomingMovieView.vue';
import Auth from '../views/Auth/AuthView.vue';
import Dashboard from '../views/DashboardView.vue';

const routes = [
    { path: "/",component: Auth},
    { path: "/Home",component: Home},
    { path: "/Popular",component: Popular},
    { path: "/Showtimes",component: Showtimes},
    { path: "/Showtimes/:id",component: ShowtimesDetails},
    { path: "/Upcoming",component: Upcoming},
    { 
        path: "/Dashboard",
        component: Dashboard,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;