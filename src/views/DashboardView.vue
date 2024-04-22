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
    
    <nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-500 text-white transition-all md:h-screen md:w-64 lg:w-72">
      <div class="bg-slate-800 mt-5 py-4 pl-10 md:mt-10">
        <span class="">
          <span class="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">U</span>
          <span class="text-xl">MKM</span>
        </span>
      </div>  

      <ul class="mt-8 space-y-3 md:mt-20">
<!-- <li class="relative">
    <router-link to="Kelolatentangkami" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-1c0-2.76-5.24-4.01-6-9 1.01-.33 1.89-.95 2.61-1.83C8.61 6.72 10.28 6 12 6s3.39.72 4.39 2.17c.72.88 1.6 1.5 2.61 1.83-.76 4.99-6 6.24-6 9v1h-2z"/>
        </svg></span>
        <span class="">Tentang Kami</span>
    </router-link >
</li>

<li class="relative">
    <router-link to="/Kelolakontak" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/></svg></span>
        <span class="">Kelola Kontak</span>
    </router-link>
</li>-->

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

      </ul> 

      <div class="my-6 mt-auto ml-10 flex cursor-pointer">
        <div>
          <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        </div>
        <div class="ml-3">
          <p class="font-medium">Bryan Jason</p>
          <p class="text-sm text-gray-300">Cils, Bandung</p>
        </div>   
<ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
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
  </nav>
</aside>
  <!-- /Sidebar -->

  <div class="text-slate-600 mx-auto grid max-w-2xl grid-cols-2 gap-y-4 px-4 py-1 sm:my-10 sm:rounded-md sm:border sm:shadow">
  <div class="col-span-2 col-start-1 flex flex-col justify-between border-b py-3 sm:flex-row">
    <p class="font-medium">Overview</p>
    <select class="text-slate-500 hover:bg-slate-200 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">
      <option value="last-month">Last Month</option>
      <option value="last-month">Last 2 Months</option>
      <option value="last-month">This Year</option>
    </select>
  </div>
  <div class="col-span-2 -mx-4 bg-gradient-to-t from-indigo-500 to-blue-500 px-4 py-8 sm:col-span-1 sm:mx-0 sm:rounded-xl sm:py-4">
    <p class="mb-4 font-medium text-indigo-100">Cases in pipeline</p>
    <div class="mb-6 flex max-w-xs">
      <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-400 sm:mr-3 sm:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      </div>
      <div class="px-4">
        <p class="mb-1 text-2xl font-black text-white">1844</p>
        <p class="font-medium text-indigo-100">$192,234.00</p>
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="flex flex-col items-center px-4 py-1">
        <p class="text-lg font-medium text-white">232</p>
        <p class="text-xs font-medium text-indigo-100">Quote</p>
      </div>
      <div class="mb-1 flex flex-col items-center px-4 py-1 sm:mr-1 sm:mb-0">
        <p class="text-lg font-medium text-white">$140</p>
        <p class="text-xs font-medium text-indigo-100">CAC</p>
      </div>
      <div class="mb-1 flex flex-col items-center rounded-2xl bg-white px-4 py-1 sm:mr-1 sm:mb-0">
        <p class="text-lg font-medium text-indigo-500">21</p>
        <p class="text-xs font-medium text-indigo-500">Refunds</p>
      </div>
      <div class="flex flex-col items-center px-4 py-1">
        <p class="text-lg font-medium text-white">$44</p>
        <p class="text-xs font-medium text-indigo-100">PPC</p>
      </div>
    </div>
  </div>
  <div class="col-span-2 grid grid-cols-2 gap-4 py-4 sm:col-span-1 sm:gap-8 sm:px-4">
    <div class="">
      <p class="text-lg font-bold">32</p>
      <p class="text-slate-400 mb-2 font-medium">$230,000</p>
      <span class="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">Drafts</span>
    </div>
    <div class="">
      <p class="text-lg font-bold">621</p>
      <p class="text-slate-400 mb-2 font-medium">$230,000</p>
      <span class="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">Prending Approval</span>
    </div>
    <div class="">
      <p class="text-lg font-bold">68</p>
      <p class="text-slate-400 mb-2 font-medium">$230,000</p>
      <span class="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Clients</span>
    </div>
    <div class="">
      <p class="text-lg font-bold">970</p>
      <p class="text-slate-400 mb-2 font-medium">$230,000</p>
      <span class="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">Signing</span>
    </div>
  </div>
  <div class="col-span-2 col-start-1 grid grid-cols-2 gap-6 border-t py-4 sm:grid-cols-4 sm:px-4 sm:py-8">
    <div class="">
      <p class="text-slate-500 text-sm">Revenue</p>
      <p class="text-xl font-medium">$924,883</p>
    </div>
    <div class="">
      <p class="text-slate-500 text-sm">Liabilities</p>
      <p class="text-xl font-medium">$924,883</p>
    </div>
    <div class="">
      <p class="text-slate-500 text-sm">Profit</p>
      <p class="text-xl font-medium">$213,002</p>
    </div>
    <div class="">
      <p class="text-slate-500 text-sm">Target</p>
      <p class="text-xl font-medium">$150,000</p>
    </div>
  </div>
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
