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
            <ul>
                <li>STT</li>
                <li>Image</li>
                <li>Name</li>
                <li>Quantity</li>
                <li>Price</li>
                <li>Subtotal</li>
            </ul>
            <ul class="total">
                <li>Total</li>
                <li>total</li>
            </ul>
        </div>
    </div>
</template>

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
    padding: 20px 60px 0px;
    display: inline-block;
    font-size: 16px;
}
ul.total{
    text-align: center;
}
ul.total li{
    font-weight: 500;
}
</style>
