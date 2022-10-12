import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingStore = defineStore('shopping', {
  state: () =>{
    return {
      products:[
        {
          id:1,
          name:'Harley-Davidson XR1200R',
          price: 5000,
          image:'https://motorrock.com.vn/upload/hinhanh/yamaha-bolt-950r-201936-1564901364.jpg'
        },
        {
          id:2,
          name:'Suzuki B-King 1300cc',
          price: 8000,
          image:'https://topxephang.com/wp-content/uploads/2017/12/DSC_0002800x600.jpg'
        },
        {
          id:3,
          name:'Suzuki GSX 1400cc',
          price: 3000,
          image:'https://topxephang.com/wp-content/uploads/2017/12/163018@suzuki-gsx1400-final.jpg'
        },
        {
          id:4,
          name:'Yamaha',
          price: 10000,
          image:'https://motorrock.com.vn/upload/hinhanh/yamaha-bolt-950r-201936-1564901364.jpg'
        },
        {
          id:5,
          name:'Harley-Davidson XR1200R',
          price: 12000,
          image:'https://topxephang.com/wp-content/uploads/2017/12/3a8bd599b0a6a87002de9b72c98bd3ca-sportster-cafe-racer-hd-sportster.jpg'
        }
      ],
      cartItem:[]
    }
  },
  actions:{
    addToCart(item){
      let index = this.cartItem.findIndex(product => product.id === item.id)
      if(index!== -1){
        this.products[index].quantity += 1
        
      }
      else{
        item.quantity = 1
        this.cartItem.push(item)
      }
      console.log(this.cartItem)
    },
    increaseQuantity(item){
      let index = this.cartItem.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItem[index].quantity += 1
      }
    },
    decreaseQuantity(item){
      let index = this.cartItem.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItem[index].quantity -= 1
        if(this.cartItem[index].quantity === 0){
          this.cartItem = this.cartItem.filter(product => product.id !== item.id)
        }
      }
    }
  }
 
  

  
})