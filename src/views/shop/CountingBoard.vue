<template>
  <div class="countingBoard" >
      <button v-if="count>0" class="reduceBtn" @click="reduceFun">-</button>
      <span v-if="count>0" class="text">{{count}}</span>
      <button class="addBtn" @click="addFun">+</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
    name: 'CountingBoard',
    props: ['goods'],
    setup(props){
        const store = useStore()
        const route = useRoute()
        const shop_id = route.params.shop_id
        const count = computed(()=> store.state.cartList?.[shop_id]?.[props.goods.goods_id]?.goods_count)


        function addFun(){
            console.log('[购物车]准备添加商品，正在判断是否合法')
            //检测一下购物车中的商店是否存在
            if(store.state.cartList?.[shop_id])
            {
                console.log('[购物车]商店已经创建！继续执行！')
                chekGoods()
            }else{
                console.log('[购物车]商店没有创建！正在创建商店！')
                store.commit('createCartListShop',shop_id)
                chekGoods()
            }

        }
        function reduceFun(){
            store.commit('reduceCount',{
                   shop_id,
                   goods_id: props.goods.goods_id
            })
        }
        //检查这个商品是否存在
        const chekGoods = ()=>{
            if(store.state.cartList[shop_id]?.[props.goods.goods_id])
            {
                console.log('[购物车]: 准备增加商品数量...')
                store.commit('addCount',{
                    shop_id,
                    goods_id: props.goods.goods_id
                })
            }else{
                console.log('[购物车]: 这是一个从来没有添加的商品，准备添加到购物车')
                store.commit('addGoods',{
                        shop_id,
                        goods: {...props.goods}
                })
            }
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
        width: 18.66rem;
        bottom: 2.66rem;
        right: 2.66rem;
        
        .reduceBtn {
            border: 0;
            right: 2.66rem;
            bottom: 2.66rem;
            height: 5.86rem;
            width: 5.86rem;
            border-radius: 50%;
            background-color: rgb(35, 149, 255);
            font-size: 3.73rem;
            color: white;
            text-align: center;
        }
        .text {

        }
        .addBtn {
            border: 0;
            right: 2.66rem;
            bottom: 2.66rem;
            height: 5.86rem;
            width: 5.86rem;
            border-radius: 50%;
            background-color: rgb(35, 149, 255);
            font-size: 3.73rem;
            color: white;
            text-align: center;
        }
    }
</style>