import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    shopList:{},
    goodsList: [],
    cartList: {},
    //临时账单
    tempOrder: {
      address: '',
      note: '',
      tablewareNum: 0
    },
    bottomBarState: {
      home: true,
      faxian: false,
      dingdan: false,
      my: false,
      now: 'home'
    }
  },
  mutations: {
    //底部栏的跳转
    changeBottomBarSelect(state,page){
      state.bottomBarState[state.bottomBarState.now] = false
      state.bottomBarState[page] = true
      state.bottomBarState.now = page
    },
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
      console.log('[vuex][商品列表]：初始化完毕 ✔️',data  )
    },
    //增加商品的数量
    addCount(state,info){ 
      state.cartList[info.shop_id][info.goods_id].goods_count++
      console.log('[vuex][增加商品的数量]：即将增加'+info.goods_id+'的数量完毕！✔️',state.cartList[info.shop_id][info.goods_id].goods_count)
    },
    //增加商品
    addGoods(state,info){
      console.log('[vuex][增加新商品]：准备增加商品，正在检查数据...',info)
      state.cartList[info.shop_id][info.goods.goods_id] = info.goods
      state.cartList[info.shop_id][info.goods.goods_id].goods_count = 1
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
    //提交订单
    submitOrder(store,data){
      console.log('[vux][提交订单]: 准备生成订单...',store.state.cartList[data.shop_id])
      console.log(data.total.value)
      let order = {
        shop_id: data.shop_id,
        shop_name: data.shop_name,
        shop_logo: data.shop_logo,
        goods_list: {},
        total: data.total.value,
        note: store.state.tempOrder.note,
        tablewareNum: store.state.tempOrder.tablewareNum
      }
      for(let index in store.state.cartList[data.shop_id]){
        order.goods_list[index] = {
          goods_name: store.state.cartList[data.shop_id][index].goods_name,
          goods_price: store.state.cartList[data.shop_id][index].goods_price,
          goods_count: store.state.cartList[data.shop_id][index].goods_count,
          goods_img: store.state.cartList[data.shop_id][index].goods_img
        }
      }
      console.log('[vuex][订单提交]：准备写入数据库...',order)
      axios.post('http://localhost:8848/createOrder',{
        order
      })
      .then((res)=>{
        console.log('[vuex][订单提交]：成功写入数据库！✔️',res)
      })
      .catch(()=>{
        console.log('gg')
      })
    },
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
