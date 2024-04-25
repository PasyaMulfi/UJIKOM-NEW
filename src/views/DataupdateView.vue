<template>
  <div>
<div class="mx-auto mt-8 max-w-screen-lg px-2">
<div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
  <p class="flex-1 text-base font-bold text-gray-900">Admin </p>

  <div class="mt-4 sm:mt-0">
    <div class="flex items-center justify-start sm:justify-end">
      <div class="flex items-center">
      </div>

      <!-- <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
        <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path>
        </svg>
        <router-link to= "tambah">ADD </router-link>
      </button> -->
    </div>
  </div>
</div>

<div class="mt-6 overflow-hidden rounded-xl border shadow">
  <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
    <thead class="hidden border-b lg:table-header-group">
      <tr class="">
        <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Data image</td>
        <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Title</td>
        <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Judul</td>
        <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Content</td>
      </tr>
    </thead>
      <tr class="" v-for="galeri in getGaleri" :key="galeri.id">
        <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
          {{ galeri.image }}
          <div class="mt-1 lg:hidden">
            <p class="font-normal text-gray-500">{{ galeri.title }}</p>
            <p class="font-normal text-gray-500">{{ galeri.judul }}</p>
            <p class="font-normal text-gray-500">{{ galeri.content }}</p>
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
    tambahGaleri: {
      image: "",
      title: "",  
      judul: "",
      content: "",
    },
    tambahGaleri: {},
  }
},
computed: {
...mapGetters('galeri', ['getGaleri']),
},
methods: {
...mapActions('galeri', ['fetchGaleri', 'updateGaleri']),
async updateGaleri() {
  try {
    await this.updateGaleri(this.editedUser);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User updated successfully",
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error('Error updating user:', error);
    this.errorMessage = 'Failed to update user. Please try again.';
  }
},
},

mounted() {
this.fetchGaleri();

},
}
</script>