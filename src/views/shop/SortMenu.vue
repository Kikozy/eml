<template>
    <div class="sortMenu">
        <div class="sortItem" v-for="(item,index) in sortName" :key="index+item">{{item}}</div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import axios from 'axios'
export default {
    name: 'SortMenu',
    setup(){
        
        axios.post(`http://localhost:8848/getGoodsType`,{
            shopId: ''
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        const data = reactive({
            sortName: ['热销','优惠','推荐','┎🤩┒新品来袭','┎🍦┒鲜冰淇淋','┎🍋┒真鲜果茶','┎🔥┒益菌多多','┎🥤┒现煮奶茶']
        })
        return {
            ...toRefs(data)
        }
    }
}
</script>

<style lang='scss'>
    .sortMenu {
        display: flex;
        flex-direction: column;
        min-height: 450px;
        background-color: #f5f5f5;
        .sortItem {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 50px;
            font-size: 12px;
            color: #666666;
            
            padding: 0 5px;
        }
    }
</style>