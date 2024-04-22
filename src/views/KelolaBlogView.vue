<template>
  <form @submit.prevent="createArtikel" action="">

  <div class="space-y-4 px-8 py-10">
    <label class="block" for="name">
      <p class="text-gray-600">Image</p>
      <input v-model="image" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Nama Produk " />
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Title</p>
      <input v-model="title" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Descriptiption" />
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Content</p>
      <input v-model="content" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Harga" />
    </label>
    
    <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
  </div>
  </form>

</template>
<script>
export default {
  data() {
    return {
      image: "",
      title: "",
      content: "",
    };
  },
  methods: {
    async createArtikel() {
      const projectData = {
        image: this.image,
        title: this.title,
        content: this.content,
      };
      try {
        const success = await this.$store.dispatch(
          "artikel/createArtikel",
          projectData
        );

        if (success) {
      alert("Berhasil")
          this.image = "";
          this.title = "";
          this.content = "";

          this.$router.push("/admin")
        }
      } catch (error) {
        alert("Gagal")
        console.error(error);
      }
    },
  },
};
</script>