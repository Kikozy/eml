<template>
    <div class="shopList">
        <p class="title">推荐商家</p>
        <div class="choose">
            <div>综合排序</div>
            <div>距离最近</div>
            <div>销量最高</div>
            <div>筛选</div>
        </div>
        <router-link :to='`/Shop/${index}`' v-for='(item,index) in shopList' :key="item.shop_id+index">
            <ShopItem :shopData= 'item' />
        </router-link>
    </div>
</template>

<script>
import ShopItem from './ShopItem'
import { computed, onMounted, reactive } from 'vue'
// import axios from 'axios'
import { useStore } from 'vuex'

export default {
    name: 'ShopList',
    components: {
        ShopItem
    },
    setup(){
        const store = useStore()
        let shopList = reactive(computed(()=> store.state.shopList))
        onMounted(()=>{
            // axios.get('http://localhost:8848/')
            // .then((res)=>{
            //     res.data.forEach(item => {
            //         shopList.push(item)
            //     })
            //     console.log('axios',res.data)
            // })
            // .catch((err)=>{
            //     console.log(err)
            // })
            store.dispatch('getShopListData')
        })
        console.log('setup',shopList)
        return {
            shopList
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