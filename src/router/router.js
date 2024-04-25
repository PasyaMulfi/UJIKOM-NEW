import { createWebHistory, createRouter } from 'vue-router';
// import { createApp } from 'vue';
// import App from './App.vue';
import LoginView from '../views/LoginView.vue';
import BerandaView from '../views/BerandaView.vue';
import KelolaEventView from '../views/KelolaEventView.vue';
import KelolaBlogView from '../views/KelolaBlogView.vue';
import BlogView from '../views/BlogView.vue';
import Kontakview from '../views/KontakView.vue';
import Eventview from '../views/EventView.vue';
import Tentangkamiview from '../views/TentangkamiView.vue';
import DetaiBlogView1 from '../views/DetaiBlogView1.vue';
import DetailBlogView2 from '../views/DetailBlogView2.vue';
import DetailBlogView3 from '../views/DetailBlogView3.vue';
import DetailBlogView4 from '../views/DetailBlogView4.vue';
import DetailBlogView5 from '../views/DetailBlogView5.vue';
import DetailBlogView6 from '../views/DetailBlogView6.vue';
import DetaileventView1 from '../views/DetaileventView1.vue';
import tampilan from '../layout/userlayout.vue';
import DetaileventView2 from '@/views/DetaileventView2.vue';
import DetaileventView3 from '@/views/DetaileventView3.vue';
import DataupdateView from '@/views/DataupdateView.vue';
import KeloladepaneventView from '@/views/KeloladepaneventView.vue';
import KeloladepanblogView from '@/views/KeloladepanblogView.vue';
import KelolagaleriView from '../views/KelolagaleriView.vue'
import DashboardView from '../views/DashboardView.vue';
import tabel from '../views/admin/tabel.vue';


function cekToken(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    alert('Mohon login terlebih dahulu!')
    next('/login')
  }
};

 const router = createRouter({
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
        {
          path: '/detailevent1',
          name: 'Detailevent1',
          component: DetaileventView1,
        },
        {
          path: '/detailevent2',
          name: 'Detailevent2',
          component: DetaileventView2,
        },
        {
          path: '/detailevent3',
          name: 'Detailevent3',
          component: DetaileventView3,
        },
       
      ],
    },
    {
      path: '/admin',
      name: 'tabel',
      component: tabel
    },
    {
      path: '/dataadmin',
      name: 'Dataupdate',
      component: DataupdateView,
    },
    {
      path: '/kelolaevent',
      name: 'KelolaEvent',
      component: KelolaEventView
    },
    {
      path: '/kelolablog',
      name: 'KelolaBlog',
      component: KelolaBlogView
  },
  {
    path: '/keloladepanevent',
    name: 'Keloladepanevent',
    component: KeloladepaneventView
},
{
  path: '/keloladepanblog',
  name: 'Keloladepanblog',
  component: KeloladepanblogView
},
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      beforeEnter:cekToken
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/kelolagaleri',
      name: 'Kelolagaleri',
      component: KelolagaleriView
    }
  ]
});


export default router;