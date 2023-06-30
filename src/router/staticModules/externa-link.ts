import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'button',
    name: `-button`,
    meta: {
      title: 'routes.demo.button',
      icon: 'icon-zhuomian',
      keepAlive: true,
    },
    component: () => import(/* webpackChunkName: "demos-button" */ '@/views/demos/button.vue'),
  },
  {
    path: 'custom-modal',
    name: `custom-modal`,
    meta: {
      title: 'routes.demo.modal',
      icon: 'icon-zhuomian',
      keepAlive: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/demos/custom-modal.vue'
      ),
  },
  {
    path: 'form',
    name: `form`,
    meta: {
      title: 'routes.demo.form.demo',
      icon: 'icon-zhuomian',
      keepAlive: true,
    },
    redirect: { name: `form-basic` },
    children: [
      {
        path: 'basic',
        name: `form-basic`,
        meta: {
          title: 'routes.demo.form.basic',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () =>
          import(/* webpackChunkName: "basic-form" */ '@/views/demos/form/basic-form/index.vue'),
      },
      {
        path: 'rule',
        name: `form-rule`,
        meta: {
          title: 'routes.demo.form.rule',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () => import('@/views/demos/form/rule-form/index.vue'),
      },
      {
        path: 'dynamic',
        name: `form-dynamic`,
        meta: {
          title: 'routes.demo.form.dynamic',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () => import('@/views/demos/form/dynamic-form/index.vue'),
      },
      {
        path: 'useForm',
        name: `form-use`,
        meta: {
          title: 'useForm',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () => import('@/views/demos/form/use-form/index.vue'),
      },
      {
        path: 'custom-form',
        name: `form-custom`,
        meta: {
          title: 'routes.demo.form.customForm',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () => import('@/views/demos/form/custom-form/index.vue'),
      },
      {
        path: 'request-form',
        name: `form-request`,
        meta: {
          title: '自定义请求表单',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () => import('@/views/demos/form/request-form/index.vue'),
      },
    ],
  },
];

export default routes;
