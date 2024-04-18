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
      name: 'Beranda',
      component: BerandaView
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
      path: '/Kelolatentangkami',
      name: 'kelolatentang',
      component: KelolaTentangkamiView
    },
    {
      path: '/Kelolaevent',
      name: 'kelolaEvent',
      component: KelolaEventView
    },
    {
      path: '/Kelolablog',
      name: 'kelolaBlog',
      component: KelolaBlogView
    },
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
    {
      path: '/kontak',
      name: 'Kontak',
      component: Kontakview
    },
    {
      path: '/event',
      name: 'Event',
      component: Eventview
    },
    {
      path: '/tentangkami',
      name: 'Tentangkami',
      component: Tentangkamiview
    },
    {
      path: '/detailgaleri1',
      name: 'DetailGaleri1',
      component: DetailGaleriView1,
    },
    {
      path: '/detailgaleri2',
      name: 'DetailGaleri2',
      component: DetailGaleriView2,
    },
    {
      path: '/detailgaleri3',
      name: 'DetailGaleri3',
      component: DetailGaleriView3,
    }
  ]
});



export default router;