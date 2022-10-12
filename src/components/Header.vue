
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
                <li><router-link to="/cart"> Cart </router-link></li>
            </ul>
        </div>
    </div>
    
</template>

<style>
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
.navbar ul li{
    display: inline-block;
    padding: 0 10px 10px;
    cursor: pointer;
}

</style>