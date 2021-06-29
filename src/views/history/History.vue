<template>
    <div class="history">
        <HistoryItem 
            v-for="(item,index) in orderList"
            :data='item' 
            :key="item.order_id+index" 
        />
    </div>
    <BottomBar />
</template>

<script>
import { onMounted, onUnmounted, reactive } from '@vue/runtime-core'
import BottomBar from '../../components/bottomBar'
import HistoryItem from './HistoryItem'
import axios from 'axios'
export default {
    name: 'History',
    components: {
        BottomBar,
        HistoryItem
    },
    setup(){
        const orderList = reactive({})
        onMounted(()=>{
            console.log('[历史订单]: 页面载入完毕 ✔️')
            axios.post('http://localhost:8848/getOrder')
            .then((res)=>{
                console.log('[历史订单]: 已查询到订单 ✔️',res.data)
                for(let item in res.data){
                    orderList[res.data[item].order_id] = {
                        order_id: res.data[item].order_id,
                        order_owner: res.data[item].order_owner,
                        order_time: res.data[item].order_time,
                        order_data: JSON.parse(res.data[item].order_data)
                    }
                }
                console.log('[历史订单]：数据转换成功 ✔️', orderList)
            })
            .catch((err)=>{ 
                console.error('[历史订单]：请注意这里又报错 ❗',err)
            })
        })
        onUnmounted(()=>{
            console.log('[历史订单]：页面卸载完毕 ✔️')
        })
        return {
            orderList
        }
    }
}
</script>

<style lang='scss' scoped>
    .history {
        padding: 2.6rem 0 13.33rem 0;
        width: 100rem;
        background-color: rgb(245,245,245);
    }
</style>