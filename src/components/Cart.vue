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
            <ul class="cart-item"  v-for="(item,index) in data.getCartItem" :key="item.id">
                <li>{{index+1}}</li>
                <img :src="item.image" :alt="item.name" height="70" width="80">
                <li>{{item.name}}</li>
                <li class="cart-quantity">
                    <i @click="data.increaseQuantity(item)" class="fa-solid fa-chevron-up"></i>
                    <p style="display:inline">{{item.quantity}}</p>
                    <i @click="data.decreaseQuantity(item)" class="fa-sharp fa-solid fa-angle-down"></i>
                </li>
                <li>{{item.price}}</li>
                <li>{{item.price * item.quantity}}</li>
                <li ><button @click="data.deleteItem(item)" class="btn-delete">delete</button></li>
            </ul>
            <ul class="total">
                <li>Total</li>
                <li>{{data.cartItem.reduce((total,item) => total += item.quantity * item.price, 0 )}}</li>
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
    text-align: center;
}

ul.cart-item li i{
    cursor: pointer;
}
ul.cart-item li:nth-child(1){
    padding-left: 70px;
    min-width: 90px;
}
ul.cart-item img{
    padding: 0 55px;
}

ul.cart-item li:nth-child(3){
    padding: 0 20px;
    min-width: 156px;
}
ul.cart-item li:nth-child(4){
    padding: 0 30px;
}
ul.cart-item li:nth-child(5){
    padding: 0 90px;
    min-width: 50px;
}
ul.cart-item li:nth-child(6){
    padding: 0 38px;
    min-width: 50px;
}
ul.total{
    text-align: center;
}
.total li{
    font-weight: 600;
    padding: 0 100px;

}
.btn-delete{
    background-color: rgb(219, 23, 23);
    color: rgb(237, 229, 229);
    cursor: pointer;
    border-radius: 4px;
    border: none;
    margin-left: 20px;
}

</style>
