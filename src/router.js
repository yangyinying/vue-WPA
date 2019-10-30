import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(Router);

const parseProps = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/nodes',
    },
    {
      path: '/nodes',
      name: 'nodes',
      component: () =>
        import(/* webpackChunkName: "bundle.nodes" */ './views/nodes.vue'),
    },
    {
      path: '/nodes/:id',
      name: 'nodeDetail',
      // props: true,
      props: parseProps,
      component: () =>
        import(/* webpackChunkName: "bundle.nodes" */ './views/nodeDetail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "bundle.about" */ './views/about.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
