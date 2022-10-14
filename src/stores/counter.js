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
          name:'Harley Davidson VN',
          price: 3000,
          image:'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-softail-standard/2022-softail-standard-010/2022-softail-standard-010-motorcycle.jpg?impolicy=myresize&rw=500'
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
      cartItem:[],
      searchText:"",
      notiAddtoCart: false,
      status:""
    }

  },
  actions:{
    addToCart(item){
      console.log(this.searchText)
      let index = this.cartItem.findIndex(product => product.id === item.id)
      if(index!== -1){
        this.products[index].quantity += 1
        
      }
      else{
        item.quantity = 1
        this.cartItem.push(item)
        this.notiAddtoCart = true
        setTimeout(() => this.notiAddtoCart = false, 1000)
      }
      
    },
    increaseQuantity(item){
      let index = this.cartItem.findIndex(product => product.id === item.id)
      if(index !== -1){[]
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
    },
    deleteItem(item){
      this.cartItem = this.cartItem.filter(product => product.id !== item.id)
    },
    buyItem(){
      const checkData = Math.random()
      if(checkData > 0.5){
        this.status = 'done'
        this.notiAddtoCart = true
        setTimeout(() => this.notiAddtoCart = false, 1000)
      }else{
        this.status = 'fail'
        this.notiAddtoCart = true
        setTimeout(() => this.notiAddtoCart = false, 1000)
      }
      console.log(this.status)
    }
    
    
  },
  getters: {
    getCartItem(){
      return this.cartItem
    },
    getCountCart(){
      return this.cartItem.length
    },
    getSearchedProducts(){
      return this.products
      .filter((product) => product.name.toLowerCase().includes(this.searchText))
    }
    
}
  

  
})
