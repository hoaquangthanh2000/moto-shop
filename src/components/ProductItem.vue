<template>
    <div class="product-item">
        <div class="product-body">
            <img class="product-img" :src="product.image" alt="">
            <div>
                <h5>{{product.name}}</h5>
                <h5>{{product.price}}</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="btn-addToCart" @click="data.addToCart(product)">
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
    display: grid;
    grid-template-columns: auto auto auto;
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    margin-top: 130px;
}
.product-item{
    margin: 5px;
    margin-top: 10px;
    border: solid 1px #000;
    border-radius: 3px;
}
.product-img{
    width: 100%;
    height: 270px;
}
.btn-addToCart{
    background-color: rgb(51, 54, 233);
    cursor: pointer;
    border-radius: 4px;
    border: none;
    height: 30px;
    min-width: 90px;
    margin-bottom: 5px;
    color: #fff;
}
</style>