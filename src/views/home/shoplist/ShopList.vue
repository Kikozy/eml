<template>
    <div class="shopList">
        <p class="title">推荐商家</p>
        <div class="choose">
            <div>综合排序</div>
            <div>距离最近</div>
            <div>销量最高</div>
            <div>筛选</div>
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
        .choose {
            display: flex;
        }
    }
</style>