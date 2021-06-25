<template>
    <div class="sortMenu">
        <div class="sortItem" v-for="(item,index) in sortList" :key="index+item" @click="changeSort(item)">{{item}}</div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
export default {
    name: 'SortMenu',
    props: ['shopId'],
    setup(props){
        let sortList = reactive([])
        const store = useStore()
        axios.post(`http://localhost:8848/getGoodsType`,{
            shopId: props.shopId
        })
        .then((res)=>{
            sortList = res.data.forEach(item => {
                sortList.push(item.goods_type)
            });
        })
        .catch((err)=>{
            console.log(err)
        })

        function changeSort(sort){
            axios.post('http://localhost:8848/getGoodsList',{
                shop_id: props.shopId,
                goods_sort: sort
            })
            .then((data)=>{
                store.commit('changeGoodsList',data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        return {
            sortList,
            changeSort
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