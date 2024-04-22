<template>
    <div class="app-container">
      <Navbar/>
      <router-view/>
      <Footer/>
    </div>
  </template>
  
  <script setup>
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";
  </script>
  
  <style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .router-view {
    flex: 1;
  }
  </style>
