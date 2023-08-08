const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'app',
        path: 'app',
        component: () => import('pages/AppPage.vue'),
        children: [
          {
            name: 'app_one',
            path: 'one',
            component: () => import('pages/AppOnePage.vue'),
            children: [
              {
                name: 'app_one_childOne',
                path: 'child-one',
                component: () => import('pages/AppOneChildOnePage.vue'),
              },
              {
                name: 'app_one_childTwo',
                path: 'child-two',
                component: () => import('pages/AppOneChildTwoPage.vue'),
              },
              {
                name: 'app_one_childThree',
                path: 'child-three',
                component: () => import('pages/AppOneChildThreePage.vue'),
              },
            ],
          },
          {
            name: 'app_two',
            path: 'two',
            component: () => import('pages/AppTwoPage.vue'),
            children: [
              {
                name: 'app_two_childOne',
                path: 'child-one',
                component: () => import('pages/AppTwoChildOnePage.vue'),
              },
              {
                name: 'app_two_childTwo',
                path: 'child-two',
                component: () => import('pages/AppTwoChildTwoPage.vue'),
              },
              {
                name: 'app_two_childThree',
                path: 'child-three',
                component: () => import('pages/AppTwoChildThreePage.vue'),
              },
            ],
          },
          {
            name: 'app_three',
            path: 'three',
            component: () => import('pages/AppThreePage.vue'),
            children: [
              {
                name: 'app_three_childOne',
                path: 'child-one',
                component: () => import('pages/AppThreeChildOnePage.vue'),
              },
              {
                name: 'app_three_childTwo',
                path: 'child-two',
                component: () => import('pages/AppThreeChildTwoPage.vue'),
              },
              {
                name: 'app_three_childThree',
                path: 'child-three',
                component: () => import('pages/AppThreeChildThreePage.vue'),
              },
            ],
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
