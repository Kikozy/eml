import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    shopList:[]
  },
  mutations: {
    initShopList(state,data){
      console.log('mutations')
      state.shopList = data
    }
  },
  actions: {
    getShopListData(store){
      axios.get('http://localhost:8848/')
      .then((res)=>{
          console.log('actions?',res.data)
          store.commit('initShopList',res.data)
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  },
  modules: {
  }
})
