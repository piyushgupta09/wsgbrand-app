import Cookies from 'js-cookie';
import { beforeEnterRoute } from '../mixins/AuthGuard';

const routes = [
    // Guest Routes
    {
        path: '/auth',
        component: () => import('../layouts/BasicAuthLayout.vue'),
        beforeEnter: (to, from, next) => {
            if ((to.name === 'Login' || to.name === 'Register' || to.name === 'ForgotPassword' || to.name === 'ResetPassword') 
                && localStorage.getItem('auth')) {
                next({ name: 'Home' })
            } else {
                next();
            }
        },        
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('../pages/guest/LoginAccount.vue')
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('../pages/guest/RegisterAccount.vue')
            },
        ]
    },
    // Authenticated but not Verified
    {
        path: '/',
        component: () => import('../layouts/BasicAuthLayout.vue'),
        children: [
            {
                path: 'verify-email',
                name: 'VerifyEmail',
                component: () => import('../pages/verification/VerifyEmail.vue'),
                beforeEnter: (to, from, next) => {
                    const isAuth = localStorage.getItem('auth') === 'true' || Cookies.get('auth') === 'true';
                    const isVerified = localStorage.getItem('verified') === 'true' || Cookies.get('verified') === 'true';
                
                    // Must be logged in first and not verified
                    if (isAuth && !isVerified) {
                        next();
                    } else if (!isAuth) {
                        // If not authenticated, redirect to Login
                        localStorage.setItem('initialPath', to.fullPath);
                        next({ name: 'Login' });
                    } else if (isAuth && isVerified) {
                        // If authenticated and verified, redirect to Home
                        next({ name: 'Home' });
                    }
                }
                
            }
        ]
    }, 
    // User Routes
    {
        path: '/',
        component: () => import('../layouts/GeneralLayout.vue'),
        beforeEnter: beforeEnterRoute,
        children: [
            {
                path: "notifications",
                name: "NotificationsPage",
                component: () => import("../pages/NotificationsPage.vue"),
            },
        ]
    },
]

export default routes
