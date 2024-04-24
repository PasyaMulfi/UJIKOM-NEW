<template>
  <div class="w-screen bg-gray-100 flex">
    <div class="w-64 bg-white shadow-md">
      <div class="px-4 py-8">
        <a href="dashboard" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Dashboard</a>
        <a href="kelolaevent" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Event</a>
        <a href="keloladepanevent" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Depan Event</a>
        <a href="kelolablog" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Blog</a>
        <a href="keloladepanblog" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Depan Blog</a>
        <a href="kelolagaleri" class="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Galeri</a>
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
    <div class="flex-1">
      <div class="bg-white shadow-md px-4 py-3">
        <h1 class="text-xl font-semibold">Form Depanblog</h1>
      </div>

      <!-- Form -->
      <div class="p-8">
      
<form @submit.prevent="createDepanblog" action="">
<div class="space-y-4 px-8 py-10">
  <label class="block" for="name">
    <p class="text-gray-600">Image</p>
    <input v-model="data.image" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Image " />
  </label>
  <label class="block" for="name">
    <p class="text-gray-600">Content</p>
    <input v-model="data.content" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Content" />
  </label>
  <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
</div>
</form>
      </div>
    </div>
  </div>
</template>

  
<script>
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
        data:{
          image: "",
          content: ""
        }
    };
  },
  methods: {
    ...mapActions("depanblog", ["fectdepanblogadd"]),
    createDepanblog(){
         this.fectdepanblogadd(this.data)
         this.$router.push({ name: 'dataadmin' });
    }
  },
};
</script>  