<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  Header  from './components/Header.vue'
import ProductList from './components/ProductList.vue'
</script>

<template>

    <div class="wrapper">
      <Header />
      <router-view></router-view>
    </div>

</template>

<style>
.wrapper{
  width: 100%;
  position: relative;
}
</style>


