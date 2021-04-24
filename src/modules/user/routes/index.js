export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../pages/Register.vue')
  },
  {
    path: '/reset-pass',
    name: 'ResetPass',
    component: () => import(/* webpackChunkName: "reset-pass" */ '../pages/ResetPass.vue')
  }
]