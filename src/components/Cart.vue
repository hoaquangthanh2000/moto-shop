<template>
    <div id="cart">
        <div class="cart-body">
            <ul class="cart-heading">
                <li>STT</li>
                <li>Image</li>
                <li>Name</li>
                <li>Quantity</li>
                <li>Price</li>
                <li>Subtotal</li>
            </ul>
            <ul class="cart-item"  v-for="item in data.getCartItem" :key="item.id">
                <li>{{item.id}}</li>
                <img :src="item.image" :alt="item.name" height="60" width="60">
                <li>{{item.name}}</li>
                <li class="cart-quantity">
                    <i @click="data.increaseQuantity(item)" class="fa-solid fa-chevron-up"></i>
                    <p style="display:inline">{{item.quantity}}</p>
                    <i @click="data.decreaseQuantity(item)" class="fa-sharp fa-solid fa-angle-down"></i>
                </li>
                <li>{{item.price}}</li>
                <li>{{item.price * item.quantity}}</li>
            </ul>
            <ul class="total">
                <li>Total</li>
                <li>total</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useShoppingStore } from '../stores/counter'
const data=useShoppingStore()
</script>

<style scope>
#cart{
    margin-top: 100px;
    border: 1px solid rgb(115, 109, 109);
}
.cart-body ul{
    display: inline-block;
    border-bottom: 1px solid rgb(68, 63, 63);
    min-width: 1100px;
}
.cart-body ul.cart-heading li{
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    padding: 20px 60px 0px;
}
.cart-body ul li{
    display: inline-block;
    font-size: 16px;
}
ul.cart-item li i{
    cursor: pointer;
}
ul.cart-item li:nth-child(1){
    padding: 0 60px;
}
ul.cart-item img{
    padding: 0 60px;
}

ul.cart-item li:nth-child(3){
    padding: 0 45px;
}
ul.cart-item li:nth-child(4){
    padding: 0 50px;
}
ul.cart-item li:nth-child(5){
    padding: 0 90px;
}
ul.total{
    text-align: center;
}
ul.total li{
    font-weight: 500;
}

</style>
