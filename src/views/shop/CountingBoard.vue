<template>
  <div class="countingBoard" >
      <button v-if="count>0" class="reduceBtn" @click="reduceFun">-</button>
      <span v-if="count>0" class="text">{{count}}</span>
      <button class="addBtn" @click="addFun">+</button>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
    name: 'CountingBoard',
    props: ['data'],
    setup(props){
        const store = useStore()
        const route = useRoute()
        const shop_id = store.state.shopList[route.params.shopIndex].shop_id
        const count = computed(()=> store.state.cartList?.[shop_id]?.[props.data.goods_id]?.goods_count)
        // const checkShop = ()=>{

        // }
        const chekGoods = ()=>{
            if(store.state.cartList[shop_id]?.[props.data.goods_id])
            {
                console.log('存在+1')
                store.commit('addCount',{
                    shop_id,
                    goods_id: props.data.goods_id
                    })
            }else{
                console.log('不存在，创建')
                store.commit('addGoods',{
                        shop_id,
                        goods_id: props.data.goods_id,
                        goods_name: props.data.goods_name,
                        goods_price: props.data.goods_price
                })
            }
        }
        function addFun(){
            if(store.state.cartList?.[shop_id])
            {
                console.log('y')
                chekGoods()
            }else{
                store.commit('createCartListShop',shop_id)
                chekGoods()
            }

        }
        function reduceFun(){
            store.commit('reduceCount',{
                   shop_id,
                   goods_id: props.data.goods_id
            })
        }
        return {
            addFun,
            reduceFun,
            count
        }

    }
}
</script>

<style lang='scss'>
    .countingBoard {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        width: 70px;
        bottom: 10px;
        right: 10px;
        
        .reduceBtn {
            border: 0;
            right: 10px;
            bottom: 10px;
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background-color: rgb(35, 149, 255);
            font-weight: bolder;
            color: white;
            text-align: center;
        }
        .text {

        }
        .addBtn {
            border: 0;
            right: 10px;
            bottom: 10px;
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background-color: rgb(35, 149, 255);
            font-weight: bolder;
            color: white;
            text-align: center;
        }
    }
</style>