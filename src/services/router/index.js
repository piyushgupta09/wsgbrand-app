import { createRouter, createWebHistory } from 'vue-router'
import AuthModuleRoutes from '@/modules/authy/router'
import BrandyModuleRoutes from '@/modules/brandy/router'
import FactoryModuleRoutes from '@/modules/factory/router'
import VendorModuleRoutes from '@/modules/vendor/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue')
  },
  ...AuthModuleRoutes,
  ...BrandyModuleRoutes,
  ...FactoryModuleRoutes,
  ...VendorModuleRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: () => import('@/pages/NetworkError.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.onError((error) => {
  // handle error
  console.log("Error in router:", error);
  // Send the error to a remote logging service, or show it on the interface.
});

export default router
