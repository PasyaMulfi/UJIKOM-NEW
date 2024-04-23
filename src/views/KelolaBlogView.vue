<template>
  <div class="mt-20">
  <form @submit.prevent="createArtikel" action="">

  <div class="space-y-4 px-8 py-10">
    <label class="block" for="name">
      <p class="text-gray-600">Image</p>
      <input v-model="data.image" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Image " />
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Title</p>
      <input v-model="data.title" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Title" />
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Content</p>
      <input v-model="data.content" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Content" />
    </label>
    <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
  </div>
  </form>
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
          title: "",
          content: ""
        }
    };
  },
  methods: {
    ...mapActions("blog", ["fectblogadd"]),
    createArtikel(){
         this.fectblogadd(this.data)
    }
  },
};
</script>