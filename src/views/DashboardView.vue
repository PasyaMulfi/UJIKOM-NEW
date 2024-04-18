<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
<style>
  :root {
    font-family: 'Source Sans Pro';
  }
  main#dashboard-main::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  main#dashboard-main::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background-color: rgb(156 163 175 / 0.75);
  }
  main#dashboard-main::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(156 163 175 / 0.75);
    border-radius: 10px;
  }
</style>

<template>
<div class="bg-slate-200 flex h-screen">
  <aside class="fixed z-50 md:relative">
    <!-- Sidebar -->
    <input type="checkbox" class="peer hidden" id="sidebar-open" />
    <label class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden" for="sidebar-open">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72">
      <div class="bg-slate-800 mt-5 py-4 pl-10 md:mt-10">
        <span class="">
          <span class="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">U</span>
          <span class="text-xl">MKM</span>
        </span>
      </div>

      <ul class="mt-8 space-y-3 md:mt-20">
        <!-- <li class="relative">
  <router-link to="Kelolakonten" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
    <span
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 19v-3a2 2 0 012-2h10a2 2 0 012 2v3"></path>
      </svg></span
    ><span class="">Kelola Konten</span>
  </router-link>
</li> -->

<li class="relative">
    <router-link to="Kelolatentangkami" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-1c0-2.76-5.24-4.01-6-9 1.01-.33 1.89-.95 2.61-1.83C8.61 6.72 10.28 6 12 6s3.39.72 4.39 2.17c.72.88 1.6 1.5 2.61 1.83-.76 4.99-6 6.24-6 9v1h-2z"/></svg></span>
        <span class="">Tentang Kami</span>
    </router-link >
</li>

<li class="relative">
    <router-link to="Kelolaevent" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 4v2m0 10v2m-4-6h4M4 21h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2zM7 11V7m0 4h10m-4 8H9v-4h4v4z"/>
            </svg>
        </span>
        <span class="">Kelola Event</span>
    </router-link>
</li>

<li class="relative">
    <router-link to="Kelolablog" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></span>
        <span class="">Kelola Blog</span>
    </router-link>
</li>

<li class="relative">
    <router-link to="/Kelolakontak" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/></svg></span>
        <span class="">Kelola Kontak</span>
    </router-link>
</li>
      </ul> 

      <div class="my-6 mt-auto ml-10 flex cursor-pointer">
        <div>
          <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        </div>
        <div class="ml-3">
          <p class="font-medium">Bryan Jason</p>
          <p class="text-sm text-gray-300">Cils, Bandung</p>
        </div>
      </div>
    </nav>
  </aside>
  <!-- /Sidebar -->

  <div class="flex h-full w-full flex-col">
    <!-- Navbar -->
    <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
      <div class="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
        <div class="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
          <!-- <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input type="name" name="search" class="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500" placeholder="Search for anything" /> -->
        </div>

        <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
          <!-- <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </li>
          <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </li> -->
          <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow" 
            @click="logout">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
    <!-- /Navbar -->

    <!-- Main -->
    <div class="h-full overflow-hidden pl-10">
      <main id="dashboard-main" class="h-[calc(100vh-10rem)] overflow-auto px-4 py-10">
        <!-- Put your content inside of the <main/> tag -->
        <h1 class="text-2xl font-black text-gray-800">Good Morning!</h1>
        <p class="mb-6 text-gray-600">Here's an overview of your monthly transactions.</p>
        <div class="flex flex-wrap gap-x-4 gap-y-8">
          <div class="h-56 w-72 rounded-xl bg-white p-10 shadow-md">1</div>
          <div class="h-56 w-72 rounded-xl bg-white p-10 shadow-md">2</div>
          <div class="h-56 w-full rounded-xl bg-white p-10 shadow-md">3</div>
          <div class="h-56 w-full rounded-xl bg-white p-10 shadow-md">3</div>
          <div class="h-56 w-full rounded-xl bg-white p-10 shadow-md">4</div>
          <div class="h-56 w-full rounded-xl bg-white p-10 shadow-md">5</div>
        </div>
      </main>
    </div>
    <!-- /Main -->
  </div>
</div>
</template>

<script>
export default {
  methods: {
    logout() {
      const token = localStorage.getItem('token');
            localStorage.removeItem('token');
        alert("berhasil");
        this.$router.push('/login');
      },  
  },
}
</script>
