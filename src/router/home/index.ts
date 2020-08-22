export default {
  path: '/',
  component: () => import('layouts/home/Index.vue'),
  children: [
    { path: '', component: () => import('pages/home/Index.vue') },
  ],
};
