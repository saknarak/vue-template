
export default [
  {
    path: '/',
    name: 'signin',
    component: require('./signin-page.vue'),
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: resolve => require(['./forgot-page.vue'], resolve),
  },
  {
    path: '/signup',
    name: 'signup',
    component: resolve => require(['./signup-page.vue'], resolve),
  },
]
