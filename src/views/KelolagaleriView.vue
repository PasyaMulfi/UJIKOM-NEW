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
        <h1 class="text-xl font-semibold">Form</h1>
      </div>

      <!-- Form -->
      <div class="p-8">
        <form @submit.prevent="createGaleri">
          <div class="space-y-4">
            <label class="block">
              <span class="text-gray-600">Image</span>
              <input v-model="data.image" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Image" />
            </label>
            <label class="block">
              <span class="text-gray-600">Title</span>
              <input v-model="data.title" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Title" />
            </label>
            <label class="block">
              <span class="text-gray-600">Judul</span>
              <input v-model="data.judul" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Content" />
            </label>
            <label class="block">
              <span class="text-gray-600">Content</span>
              <input v-model="data.content" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Content" />
            </label>
            <button type="submit" class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      data: {
        image: "",
        title: "",
        judul: "",
        content: ""
      }
    }
  },
  methods: {
    ...mapActions("galeri", ["fectgaleriadd"]),
    createGaleri() {
      this.fectgaleriadd(this.data);
      this.$router.push({ name: 'dataadmin' });
    }
  },
};
</script>
