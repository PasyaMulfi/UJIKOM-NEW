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
          <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">image</td>
          <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">title</td>
          <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">content</td>
        </tr>
      </thead>

       
        <tr class="" v-for="artikel in blog">
          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ artikel.image }}</td>
          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ artikel.title }}</td>
          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ artikel.content }}</td>
          <!-- <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ product.createdAt }}</td> -->
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
import { mapGetters,mapState, mapActions } from 'vuex';
export default {
computed: {
  ...mapState('blog', ['blog']),
},
mounted() {
  this.$store.dispatch("blog/fectBlog");
},
}
</script>