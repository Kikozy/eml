<template>
    <div class="sortMenu">
        <div class="sortItem" v-for="(item,index) in sortList" :key="index+item" @click="getSortInfo(item)">{{item}}</div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
    name: 'SortMenu',
    setup(){
        let sortList = reactive([])
        const route = useRoute()
        const shop_id = route.params.shop_id
        const store = useStore()

        //获取分类列表
        
        axios.post(`http://localhost:8848/getGoodsType`,{
            shop_id
        })
        .then((res)=>{
            sortList = res.data.forEach(item => {
                sortList.push(item.goods_type)
            });
        })
        .catch((err)=>{
            console.log('[分类菜单]: 获取分类列表失败！',err)
        })

        //获取分类的商品列表
        function getSortInfo(sort){
            axios.post('http://localhost:8848/getGoodsList',{
                shop_id,
                goods_sort: sort
            })
            .then((data)=>{
                console.log('[分类菜单]: vuex即将初始化[商品列表]仓库')
                store.commit('initGoodsList',data.data)
            })
            .catch((err)=>{
                console.log('获取分类商品信息失败！',err)
            })
        }
        return {
            sortList,
            getSortInfo
        }
    }
}
</script>

<style lang='scss'>
    .sortMenu {
        display: flex;
        flex-direction: column;
        height: 81.8rem;
        background-color: #f5f5f5;
        .sortItem {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 21.33rem;
            height: 13.33rem;
            font-size: 3.2rem;
            color: #666666;

            padding: 0 5px;
        }
    }
</style>