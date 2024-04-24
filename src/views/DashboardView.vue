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
  <div class="w-screen bg-gray-100 flex">
    <div class="w-64 bg-white shadow-md">
      <!-- Sidebar content -->
      <div class="h-screen pb-10">
        <!-- Sidebar items -->
        <div class="flex flex-col h-full overflow-y-auto pt-5">
          <div class="flex items-center px-4 mt-10">
            <img class="h-12 w-auto max-w-full align-middle" src="" alt="" />
          </div>
          <div class="flex mt-3 flex-1 flex-col">
            <div class="">
              <a href="dashboard" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Dashboard</a>
              <a href="kelolaevent" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Event</a>
              <a href="keloladepanevent" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Depan Event</a>
              <a href="kelolablog" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Blog</a>
              <a href="keloladepanblog" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Depan Blog</a>
              <a href="kelolagaleri" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Galeri</a>
            </div>
          </div>
          <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
            <li class="">
              <button class="flex h-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Tabel disini -->
    <div class="flex-1 bg-gray-100 overflow-hidden rounded-br-lg rounded-tr-lg">
      <div class="mt-6 mx-5 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Data Produk</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Description</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Harga</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Stok</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
            </tr>
          </thead>
          <!-- Tambahkan loop for di sini -->
          <tr class="" v-for="product in getProducts" :key="product.id">
            <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
              {{ product.nama_produk }}
              <div class="mt-1 lg:hidden">
                <p class="font-normal text-gray-500">{{ product.description }}</p>
                <p class="font-normal text-gray-500">{{ product.harga }}</p>
                <p class="font-normal text-gray-500">{{ product.stok }}</p>
              </div>
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ product.description }}</td>
            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ product.harga }}</td>
            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ product.stok }}</td>
            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ product.createdAt }}</td>
            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell"> 
              <div class="flex w-full">
                <a href="#" class="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Edit</a>
                <a href="#" class="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50"> Hapus </a>
              </div>
            </td>
          </tr>
        </table>
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
