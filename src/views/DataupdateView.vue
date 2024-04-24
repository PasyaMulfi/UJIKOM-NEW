<template>
  <div>
<div class="mx-auto mt-8 max-w-screen-lg px-2">
<div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
  <p class="flex-1 text-base font-bold text-gray-900">Admin </p>

  <div class="mt-4 sm:mt-0">
    <div class="flex items-center justify-start sm:justify-end">
      <div class="flex items-center">
      </div>

      <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
        <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path>
        </svg>
        <router-link to= "tambah">ADD </router-link>
      </button>
    </div>
  </div>
</div>

<div class="mt-6 overflow-hidden rounded-xl border shadow">
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
import { mapGetters, mapActions } from 'vuex';



export default {
data() {
  return {
    tambahProduct: {
      nama_produk: "",
      description: "",  
      harga: "",
      stok: "",
    },
    tambahProduct: {},
  }
},
computed: {
...mapGetters('product', ['getProducts']),
},
methods: {
...mapActions('product', ['fetchPrdouct', 'updateProduct']),
async updateProducts() {
// Lakukan validasi input pengguna yang diubah sebelum mengirim permintaan PUT
  try {
    // Panggil action updateUserData dengan data pengguna yang diubah
    await this.updateProduct(this.editedUser);
    // Tutup modal setelah berhasil mengubah pengguna
// Panggil closeEditModal di sini
    // Tampilkan pesan sukses menggunakan Swal.fire
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User updated successfully",
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error('Error updating user:', error);
    // Set pesan kesalahan jika terjadi kesalahan saat mengubah pengguna
    this.errorMessage = 'Failed to update user. Please try again.';
  }
},

},

mounted() {
this.fetchPrdouct();

},
}
</script>