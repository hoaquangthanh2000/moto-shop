<script setup>
// import {ref} from 'vue'
import { useShoppingStore } from '../stores/counter'
const data = useShoppingStore()
// const searchText = ref("")

</script>

<template>
    <div id="header">
        <div v-if="data.notiAddtoCart" :class="data.status" class="default">
            <div>Success </div>
        </div>
        <div v-if="data.notiAddtoCart" :class="data.status" class="default">
            <div>Failed</div>
        </div>
        <div class="header-title">
            <h1>Shopping cart</h1>
        </div>
        <div class="navbar">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li><router-link to="/cart"> Cart ({{data.cartItem.reduce((count,item) => count+=item.quantity , 0)}})</router-link></li>
            </ul>
            <form class="form-search" action="">
                <input v-model="data.searchText" type="text">
                <!-- <button @click.prevent="data.searchCart(searchText)">Submit</button> -->
            </form>
        </div>
        <div class="clear"></div>
        <div class="noti" v-if="data.notiAddtoCart">
            <div>Thêm sản phẩm thành công !</div>
        </div>
    </div>
    
</template>

<style>
.default{
    display: none;
    min-width: 100px;
    text-align: center;
}
#header .done{
    display: block;
    position: absolute;
    top: 5px;
    right: 43%;
    background-color: rgb(110, 214, 31);
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    padding: 0 10px;
    animation: notiGrowth ease-in 0.3s;
    transform-origin: top;
    
}
#header .fail{
    display: block;
    position: absolute;
    top: 5px;
    right: 43%;
    background-color: rgb(233, 44, 79);
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    padding: 0 10px;
    animation: notiGrowth ease-in 0.3s;
    transform-origin: top;
}
.clear{
    clear: both;
}
#header{
    position: fixed;
    top: 0;
    height: 100px;
    background-color: #000;
    left: 20px;
    right: 20px;
    color: #fff;
    border-radius: 5px;
}
.header-title{
    height: 30%;
    margin-left: 10px;
}
.navbar ul{
    display: inline-block;
}
.navbar ul li{
    display: inline-block;
    padding: 0 10px 10px;
    cursor: pointer;
}
.form-search{
    float: right;
    width: 300px;
}
.form-search input{
    min-width: 150px;
    height: 25px;
}
.noti{
    position: absolute;
    top: 5px;
    right: 43%;
    background-color: rgb(110, 214, 31);
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    padding: 0 10px;
    animation: notiGrowth ease-in 0.3s;
    transform-origin: top;
}
@keyframes notiGrowth{
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}


</style>

