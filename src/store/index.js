import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    shopList:[],
    goodsList: [],
    cartList: {}
  },
  mutations: {
    initShopList(state,data){
      state.shopList = data
    },
    changeGoodsList(state,data){
      state.goodsList = data
    },
    //增加数量
    addCount(state,info){
      state.cartList[info.shop_id][info.goods_id].goods_count++
      console.log('增加数量',state.cartList[info.shop_id][info.goods_id].goods_count)
    },
    //增加商品
    addGoods(state,info){
      state.cartList[info.shop_id][info.goods_id] = {
        goods_id: info.goods_id,
        goods_name: info.goods_name,
        goods_price: info.goods_price,
        goods_count: 1
      }
      console.log('增加商品',state.cartList)
    },
    //减少数量
    reduceCount(state,info){
      if(state.cartList[info.shop_id][info.goods_id].goods_count-1 == 0){
        console.log('已经没有了直接删除吧')
        delete state.cartList[info.shop_id][info.goods_id]
        //state.cartList[info.shop_id][info.goods_id] = undefined
      }else{
        state.cartList[info.shop_id][info.goods_id].goods_count--
        console.log('减少数量',state.cartList[info.shop_id][info.goods_id].goods_count)
      }
    },
    //创建购物车中的商店分类
    createCartListShop(state,info){
      console.log('创建购物车商店分类')
      state.cartList[info] = {}
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
