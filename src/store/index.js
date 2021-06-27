import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    shopList:{},
    goodsList: [],
    cartList: {},
    //临时账单
    tempOrder: {
      goods: {},
      address: '',
      note: '',
      tablewareNum: 0
    }
  },
  mutations: {
    //初始化[商店列表]仓库
    initShopList(state,data){
      let newData = {}
      data.forEach(item => {
        newData[item.shop_id] = item
      })
      state.shopList = newData
    },
    //初始化[商品列表]仓库
    initGoodsList(state,data){
      state.goodsList = data
      console.log('[vuex][商品列表]：初始化完毕 ✔️')
    },
    //增加商品的数量
    addCount(state,info){ 
      state.cartList[info.shop_id][info.goods_id].goods_count++
      console.log('[vuex][增加商品的数量]：即将增加'+info.goods_id+'的数量完毕！✔️',state.cartList[info.shop_id][info.goods_id].goods_count)
    },
    //增加商品
    addGoods(state,info){
      state.cartList[info.shop_id][info.goods_id] = {
        goods_id: info.goods_id,
        goods_name: info.goods_name,
        goods_price: info.goods_price,
        goods_count: 1
      }
      console.log('[vuex][增加新商品]：增加新商品完毕！✔️', state.cartList[info.shop_id])
    },
    //[减少商品数量]
    reduceCount(state,info){
      if(state.cartList[info.shop_id][info.goods_id].goods_count-1 == 0){
        delete state.cartList[info.shop_id][info.goods_id]
        console.log('[vuex][减少商品数量]：此商品已经归0，清除此类商品的分类 ❗',state.cartList[info.shop_id])
      }else{
        state.cartList[info.shop_id][info.goods_id].goods_count--
        console.log('[vuex][减少商品数量]：减少完毕！✔️',state.cartList[info.shop_id][info.goods_id].goods_count)
      }
    },
    //创建购物车中的商店分类
    createCartListShop(state,shop_id){
      
      state.cartList[shop_id] = {}
      console.log('[vuex][购物车]：创建购物车商店分类完毕！✔️')
    },

    //更改餐具
    changeTablewareNum(state,num){
      console.log('更改餐具,数量：',num)
      state.tempOrder.tablewareNum = num
    },
    //更改备注
    changeNote(state,val){
      console.log('更改备注,内容',val)
      state.tempOrder.note = val
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
