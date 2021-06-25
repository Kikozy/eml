<template>
    <div class="shoppingCart" ref="shoppingCartRef">
        <div class="title">
            <span class="text">已选商品</span>
            <span class="clear">清空</span>
        </div>
        <div class="detailedList" ref="detailedListRef">
            <div class="detailedItem" v-for="(item,index) in data" :key="item.goods_id+index">
                <span class="name">{{item.goods_name}}</span>
                <span class="price">￥{{item.goods_price*item.goods_count}}</span>
                <div class="controller">
                    <div class="reduce" @click="reduceGoodsCount(item)">-</div>
                    <span>{{item.goods_count}}</span>
                    <div class="add" @click="addGoodsCount(item)">+</div>
                </div>
            </div>
        </div>
    </div>
    <div class="pay" @click="shoppingCartController">
        <div class="icon">
            <img src="" alt="">
        </div>
        
        <div class="totaled">
            <span class="heji">￥{{money}}</span>
            <span class="yunfei">另需配送费1元</span>
        </div>
        <div class="payTp">去结算</div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    name: 'ShoppingCart',
    setup(){
        const store = useStore()
        const route = useRoute()
        const shop_id = store.state.shopList[route.params.shopIndex].shop_id
        let shoppingCartRef = ref(null)
        let detailedListRef = ref(null)
        let shoppingCartState = false
        const money = computed(()=>{
            let num = []
            for( let item in store.state.cartList?.[shop_id]){
                console.log(store.state.cartList?.[shop_id][item])
                num += (store.state.cartList[shop_id][item].goods_price*store.state.cartList[shop_id][item].goods_count)
            }
            return num
        })
        const data = computed(()=>store.state.cartList?.[shop_id])
        
        function addGoodsCount(item){
            store.commit('addCount',{
                shop_id,
                goods_id: item.goods_id
            })
        }
        function reduceGoodsCount(item){
            store.commit('reduceCount',{
                shop_id,
                goods_id: item.goods_id
            })
        }
        function shoppingCartController(){
            let shoppingCartHeight = shoppingCartRef.value.getBoundingClientRect().height
            if(shoppingCartState){
                shoppingCartRef.value.style.bottom = `-${shoppingCartHeight/375*100}rem`
                detailedListRef.value.style.overflow = 'visible'
                detailedListRef.value.style.height = 'auto'
                shoppingCartState = false
            }else{
                shoppingCartRef.value.style.bottom = '12.8rem'
                shoppingCartRef.value.style.overflow = 'hidden'
                shoppingCartState = true
            }
        }
        return {
            data,
            money,
            shoppingCartRef,
            detailedListRef,
            addGoodsCount,
            reduceGoodsCount,
            shoppingCartController
        }
    }
}
</script>

<style lang='scss' scoped>
    .shoppingCart {
        position: fixed;
        bottom: -12.8rem;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        width: 100rem;
        .title {
            padding: 0 4rem;
            display: flex;
            justify-content: space-between;
            width: 100rem;
            height: 10.66rem;
            background-color: #eceff1;
            .text {
                height: 10.66rem;
                font-size: 4.26rem;
                line-height: 10.66rem;
                color: #666666;
            }
            .clear {
                height: 10.66rem;
                font-size: 3.46rem;
                line-height: 10.66rem;
                color: #666666;
            }
        }
        .detailedList {
            height: 0;
            overflow: hidden;
            .detailedItem {
                display: flex;
                justify-content: space-around;
                height: 14.66rem;
                padding: 3.2rem;
                background-color: #fff;
                .name {
                    width: 46.66rem;
                    font-size: 4.2rem;
                    line-height: 8.2rem
                }
                .price {
                    width: 21.33rem;
                    font-size: 4.2rem;
                    font-weight: bold;
                    line-height: 8.2rem;
                    color: #ff5339;
                }
                .controller {
                    width: 18.66rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    line-height: 8.2rem;
                    .add {
                        width: 5.8rem;
                        height: 5.8rem;
                        color: white;
                        font-size: 3.2rem;
                        font-weight: bolder;
                        line-height: 5.8rem;
                        text-align: center;
                        border-radius: 50%;
                        background-color: #2396ff;
                    }
                    .reduce {
                        width: 5.8rem;
                        height: 5.8rem;
                        color: #2396ff;
                        font-size: 3.2rem;
                        font-weight: bolder;
                        line-height: 5.8rem;
                        text-align: center;         
                        border-radius: 50%;
                        border: 1px solid #2396ff;
                    }
                }
            }
        }
    }
    .pay {
        width: 100rem;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: flex-end;
        background-color: rgba(61,61,63,.9);
        .icon {
            position: absolute;
            left: 15px;
            top: -15px;
            width: 13rem;
            height: 13rem;
            border-radius: 50%;
            border: 1rem solid #333333;
            background-color: #3190e8;
            img {}
        }
        .totaled {
            width: 50.66rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .heji {
                font-size: 4.8rem;
                color: white;
            }
            .yunfei {
                font-size: 3.2rem;
                color: #999999;
            }
        }
        .payTp {
            width: 28rem;
            height: 12.8rem;
            color: white;
            font-size: 4rem;
            font-weight: bolder;
            line-height: 10.66rem;
            text-align: center;
            background-color: #38ca73;
        }
    }
</style>