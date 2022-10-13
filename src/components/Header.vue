
<template>
    <div id="header">
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
            </form>
        </div>
        <div class="clear"></div>
    </div>
    
</template>

<style>
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


</style>

<script setup>
import { useShoppingStore } from '../stores/counter'
const data = useShoppingStore()

console.log(data.searchText)



</script>