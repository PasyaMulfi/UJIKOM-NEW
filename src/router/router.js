import { createWebHistory, createRouter } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import LoginView from '../views/LoginView.vue';
import BerandaView from '../views/BerandaView.vue';
import KelolaTentangkamiView from '../views/KelolaTentangkamiView.vue';
import KelolaEventView from '../views/KelolaEventView.vue';
import KelolaBlogView from '../views/KelolaBlogView.vue';
import KelolaKontakView from '../views/KelolaKontakView.vue';
import BlogView from '../views/BlogView.vue';
import Kontakview from '../views/KontakView.vue';
import Eventview from '../views/EventView.vue';
import Tentangkamiview from '../views/TentangkamiView.vue';
import DetailGaleriView1 from '../views/DetailGaleriView1.vue';
import DetailGaleriView2 from '../views/DetailGaleriView2.vue';
import DetailGaleriView3 from '../views/DetailGaleriView3.vue'
import DetaiBlogView1 from '../views/DetaiBlogView1.vue';
import DetailBlogView2 from '../views/DetailBlogView2.vue';
import DetailBlogView3 from '../views/DetailBlogView3.vue';
import DetailBlogView4 from '../views/DetailBlogView4.vue';
import DetailBlogView5 from '../views/DetailBlogView5.vue';
import DetailBlogView6 from '../views/DetailBlogView6.vue';
import tampilan from '../layout/userlayout.vue';

function cekToken(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    alert('Mohon login terlebih dahulu!')
    next('/login')
  }
};

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'tampilan',
      component: tampilan,
      children: [
        {
          path: "/",
          name: "BerandaView",
          component: BerandaView,
        },
        {
          path: "/blog",
          name: "BlogView",
          component: BlogView,
        },
        {
          path: "/event",
          name: "EventView",
          component: Eventview,
        },
        {
          path: '/tentangkami',
          name: 'TentangkamiView',
          component: Tentangkamiview
        },
        {
          path: '/kontak',
          name: 'KontakView',
          component: Kontakview
        },
        {
          path: '/detailgaleri1',
          name: 'DetailGaleriView1',
          component: DetailGaleriView1,
        },
        {
          path: '/detailgaleri2',
          name: 'DetailGaleriView2',
          component: DetailGaleriView2,
        },
        {
          path: '/detailgaleri3',
          name: 'DetailGaleriView3',
          component: DetailGaleriView3,
        },
        {
          path: '/detailblog1',
          name: 'DetailBlogView1',
          component: DetaiBlogView1,
        },
        {
          path: '/detailblog2',
          name: 'DetailBlogView2',
          component: DetailBlogView2,
        },
        {
          path: '/detailblog3',
          name: 'DetailBlogView3',
          component: DetailBlogView3,
        },
        {
          path: '/detailblog4',
          name: 'DetailBlogView4',
          component: DetailBlogView4,
        },
        {
          path: '/detailblog5',
          name: 'DetailBlogView5',
          component: DetailBlogView5,
        },
        {
          path: '/detailblog6',
          name: 'DetailBlogView6',
          component: DetailBlogView6,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter:cekToken
    },
    // {
    //   path: '/Kelolakonten',
    //   name: 'kelolakonten',
    //   component: KelolaKontenView
    // },
    
    {
      path: '/Kelolaevent',
      name: 'kelolaEvent',
      component: KelolaEventView
    },
    // {
    //   path: '/Kelolablog',
    //   name: 'kelolaBlog',
    //   component: KelolaBlogView
    // },
    {
      path: '/Kelolakontak',
      name: 'kelolaKontak',
      component: KelolaKontakView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView
    },
    // {
    //   path: '/kontak',
    //   name: 'Kontak',
    //   component: Kontakview
    // },
    // {
    //   path: '/event',
    //   name: 'Event',
    //   component: Eventview
    // },
    // {
    //   path: '/tentangkami',
    //   name: 'Tentangkami',
    //   component: Tentangkamiview
    // },
    // {
    //   path: '/detailgaleri1',
    //   name: 'DetailGaleri1',
    //   component: DetailGaleriView1,
    // },
    // {
    //   path: '/detailgaleri2',
    //   name: 'DetailGaleri2',
    //   component: DetailGaleriView2,
    // },
    // {
    //   path: '/detailgaleri3',
    //   name: 'DetailGaleri3',
    //   component: DetailGaleriView3,
    // }
  ]
});



export default router;