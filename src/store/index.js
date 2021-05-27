import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import FileJson from '../../public/Json/file.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    product:null,
    cart:[],
    productRecom:[]
  },
  mutations: {
    GET_PRODUCTS(state,products){
      state.products = products
    },

    GET_PRODUCT(state,product){
      state.product=product;
      state.productRecom.push({product})
    },

    ADD_TO_CART(state,{product,size,price,quantity}){
      let productRepeat=state.cart.find(elem=>{
        return elem.product.id == product.id && elem.size == size
      })
      if(productRepeat){
        productRepeat.quantity += quantity;
        productRepeat.price += price;
      }else{
        state.cart.push({product,size,price,quantity});
        
      }
    },

    REMOVE_PRODURCT_CART(state,{productRemove,productSize}){
      state.cart = state.cart.filter(elem=>{
        return  elem.product.id != productRemove || elem.size != productSize
      })
    },

    REMOVE_ALL_PRODUCT_CART(state){
      state.cart =[]
    }

  },
  actions: {
    getProducts({commit}){
     axios.get('http://localhost:8080/json/products.json')
      .then(res=>{ commit('GET_PRODUCTS',res.data)})

    },
    getProduct({commit},productId){
      axios.get('http://localhost:8080/json/products.json')
       .then(res=>{ 
        let product = res.data.filter(elem=>{
          return elem.id==productId 
        }) 
        commit('GET_PRODUCT',product[0])})
 
     },
    addProductCart ({commit},{product,price,size,quantity}) {
        commit('ADD_TO_CART',{product,price,size,quantity})
    },
    removeProductCart({commit},{productRemove,productSize}){
      // console.log('action'+" " +productRemove +" "+ productSize)
      commit("REMOVE_PRODURCT_CART",{productRemove,productSize});
    },
    removeAllProductCart({commit}){
      commit('REMOVE_ALL_PRODUCT_CART')
    }

  },
  getters:{
    totalCart(state){
      return state.cart.length
    },
    totalPriceItem(state){
      let total=0;
      state.cart.forEach(elem=>{
        total += elem.price 
      })
      return total;
    },
   
  },
  modules: {
  }
})
