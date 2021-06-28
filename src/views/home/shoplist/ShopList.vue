<template>
    <div class="shopList">
        <p class="title">推荐商家</p>
        <div class="choose">
            <div class="item">综合排序</div>
            <div class="item">距离最近</div>
            <div class="item">销量最高</div>
            <div class="item">筛选</div>
        </div>
        <ShopItem 
            v-for='(item,index) in shopList'
            :key="item.shop_id+index"
            @click="toShopPage(item.shop_id)"
            :shopData= 'item'
        />
    </div>
</template>

<script>
import ShopItem from './ShopItem'
import { computed, onMounted, reactive } from 'vue'
// import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: 'ShopList',
    components: {
        ShopItem
    },
    setup(){
        const store = useStore()
        const router = useRouter()
        let shopList = reactive(computed(()=> store.state.shopList))
        onMounted(()=>{
            store.dispatch('getShopListData')
        })
        function toShopPage(shop_id){
            router.push({name: 'Shop',params: {shop_id}})
        }
        return {
            shopList,
            toShopPage
        }
    }
}
</script>

<style lang='scss' scoped>
    .shopList {
        width: 93.33rem;
        margin-bottom: 20rem;
        .title {
            position: relative;
            height: 9.6rem;
            font-size: 4rem;
            text-align: center;
            line-height: 9.6rem;
            &::after {
                content: '';
                position: absolute;
                top: 35%;
                right: 29.33rem;
                width: 6.66rem;
                height: 1.33rem;
                border-bottom: 0.2rem solid rgb(80, 79, 79);
            }
            &::before {
                content: '';
                position: absolute;
                top: 35%;
                right: 29.33rem;
                width: 6.66rem;
                height: 1.33rem;
                border-bottom: 0.2rem solid rgb(80, 79, 79);
            }
        }
        .choose {
            display: flex;
            .item {
                height: 10.66rem;
                flex: 1;
                color: #666;
                font-size: 3.73rem;
                text-align: center;
                line-height: 10.66rem;
                
            }
        }
    }
</style>