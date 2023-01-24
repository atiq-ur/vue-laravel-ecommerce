import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Auth/Login.vue";
import RequestPassword from "../views/Auth/RequestPassword.vue";
import ResetPassword from "../views/Auth/ResetPassword.vue";
import Products from "../views/Products/Products.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";
import AppLayout from "../components/AppLayout.vue";


const routes = [
    {
        path: '/',
        redirect: '/app'
    },

    {
        path: '/app',
        name: 'app',
        redirect: '/app/dashboard',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },
            // {
            //     path: 'users',
            //     name: 'app.users',
            //     component: Users
            // },
            // {
            //     path: 'customers',
            //     name: 'app.customers',
            //     component: Customers
            // },
            // {
            //     path: 'customers/:id',
            //     name: 'app.customers.view',
            //     component: CustomerView
            // },
            // {
            //     path: 'orders',
            //     name: 'app.orders',
            //     component: Orders
            // },
            // {
            //     path: 'orders/:id',
            //     name: 'app.orders.view',
            //     component: OrderView
            // },
            // {
            //     path: '/report',
            //     name: 'reports',
            //     component: Report,
            //     meta: {
            //         requiresAuth: true
            //     },
            //     children: [
            //         {
            //             path: 'orders/:date?',
            //             name: 'reports.orders',
            //             component: OrdersReport
            //         },
            //         {
            //             path: 'customers/:date?',
            //             name: 'reports.customers',
            //             component: CustomersReport
            //         }
            //     ]
            // },
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requireGuest: true
        }
    },

    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        meta: {
            requireGuest: true
        }
    },

    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
            requireGuest: true
        }
    },

    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
   if (to.meta.requiresAuth && !store.state.user.token) {
       next({name: 'login'})
   } else if(to.meta.requireGuest && store.state.user.token) {
       next({name: 'app.dashboard'})
   } else {
       next();
   }
});

export default router;
