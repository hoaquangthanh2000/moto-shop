
<template>
    <div class="product-list">
        <ProductItem v-for="product in data.products" :key="product.id" :product="product"/>
        <div class="clear"></div>
    </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import {useShoppingStore } from '../stores/counter'
const data = useShoppingStore()
</script>

<style>
.product-list{
    margin-top: 100px;
}
.clear{
    clear: both;
}
</style>
