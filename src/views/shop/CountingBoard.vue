<template>
  <div class="countingBoard" ref="countingBoardRef">
      <button v-if="count>0" class="reduceBtn" @click="reduceFun">-</button>
      <span v-if="count>0" class="text">{{count}}</span>
      <button class="addBtn" @click="addFun">+</button>
      
  </div>
</template>

<script>
import {computed, reactive, ref , watch} from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'CountingBoard',
    props: ['goodsData'],
    setup(props){
        const store = useStore()
        const countingBoardRef = ref(null)
        
        const shopId = 'shop001'
        const goodsData = reactive(props.goodsData)
        console.log('?',goodsData.goodsId)
        function addFun(){
            /* 添加一个到购物车
                1. VUEX中存在的就+1
                2. VUEX中不存在的就创建
            */
           if(store.state.cartList[shopId][goodsData.goodsId])
           {
               console.log('存在+1')
               store.commit('addCount',{
                   shopId,
                   goodsId: goodsData.goodsId
                })
           }else{
               console.log('不存在，创建')
               store.commit('addGoods',{
                    shopId,
                    goodsId: goodsData.goodsId,
                    name: goodsData.name,
                    price: goodsData.price,
                    count: '1'
               })
           }
            
        }
        function reduceFun(){
            store.commit('reduceCount',{
                   shopId,
                   goodsId: goodsData.goodsId
            })
        }
        const count = computed(()=>{
            return store.state.cartList?.[shopId]?.[goodsData.goodsId]?.count
        })
        watch(count,()=>{
            if(count.value==0){
                console.log("male")
                countingBoardRef.value.style.justifyContent = 'flex-end'
            }else{
                countingBoardRef.value.style.justifyContent = 'space-between'
            }
        })
        return {
            addFun,
            reduceFun,
            count,
            countingBoardRef,
            shopId,
            store
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