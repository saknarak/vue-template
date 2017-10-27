import SampleRoutes from '@/sample/routes'

export default [
  {
    path: '/',
    name: 'main-index',
    component: resolve => require(['@/main/index-page'], resolve),
  },
  {
    path: '/sample',
    component: resolve => require(['@/sample/app'], resolve),
    children: SampleRoutes,
  },
  // {
  //   path: '/members',
  //   component: resolve => require(['@/member/app'], resolve),
  //   children: SampleRoutes,
  // },
]
