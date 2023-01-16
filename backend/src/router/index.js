import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Auth/Login.vue";
import RequestPassword from "../views/Auth/RequestPassword.vue";
import ResetPassword from "../views/Auth/ResetPassword.vue";


const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },

    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
    },

    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
