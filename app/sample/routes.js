'use strict'

export default [
  {
    path: '/',
    name: 'sample-index',
    component: resolve => require(['./sample-index.vue'], resolve),
  },
  // {
  //   path: 'list',
  //   name: 'sample-index',
  //   component: resolve => require(['./member-list.vue'], resolve),
  // },
  // {
  //   path: 'view/:id',
  //   name: 'sample-index',
  //   component: resolve => require(['./member-view.vue'], resolve),
  //   props: true,
  // },

]
