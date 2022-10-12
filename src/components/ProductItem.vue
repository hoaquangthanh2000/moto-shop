<template>
    <div class="product-item">
        <div class="">
            <img class="product-img" :src="product.image" alt="">
            <div>
                <h5>{{product.name}}</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button @click="data.addToCart(product)">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { useShoppingStore } from '../stores/counter'
const data = useShoppingStore()
const prop= defineProps({
    product:{
        type:Object,
        required:true
    }
})
</script>

<style>

.product-list{
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    margin-top: 130px;
}

.product-item{
    float: left;
    width: 33.3333%;
    padding: 0 10px;
    margin-top: 10px;
    border: solid 1px #000;
    border-radius: 3px;
    padding: 0 10px;
}
.product-img{
    width: 100%;
    height: 270px;
}
</style>