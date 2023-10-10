import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/AboutView.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('../views/collection/CollectionView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop/ShopView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/comic_detail/DetailView.vue')
  },
  {
    path: '/reader',
    name: 'reader',
    component: () => import('../views/comic_detail/Comics.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.Base_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // }
});

router.afterEach(() => {
  window.scrollTo(0,0);
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     next('/home');
//   } else {
//     next(); 
//   }
// });

export default router