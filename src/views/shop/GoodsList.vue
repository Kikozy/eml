<template>
  <div class="goodsList">
      <GoodsItem 
        v-for="(item,index) in goodsListData"
        :goodsData = 'item'
        :key="item.goodsId+index"
      />
  </div>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import GoodsItem from './GoodsItem'
export default {
    name: 'GoodsList',
    components: {
        GoodsItem
    },
    setup() {
        //使用VUEX
        const store = useStore()
        //根据VUEROUTER获取shopId
        //const shopId = router.parms.shopid
        //查找VUEX中的数据
        //store.state[shopId]
        console.log('?',toRefs(store.state))
        const goodsListData = [
            {
                goodsId: 'goods001',
                name: '豆乳麻薯多',
                desc: '清热去火的红西柚柔嫩多汁与水蜜桃一起带来了这杯酸甜适中的美味，用心升级的茉莉白芽茶汤呈色晶莹剔透茶味清新自然，入口是西柚的清爽中段尾韵又有桃桃的回甘，最后满口茉莉茶香好看更好喝主要原料：桃子,西柚',
                modifier: {xiaoliang:'月售1000份',pingjia:'好评率100%'},
                price: '25'
            }, 
            {
                goodsId: 'goods002',
                name: '垃圾食物',
                desc: '清热去火的红西柚柔嫩多汁与水蜜桃一起带来了这杯酸甜适中的美味，用心升级的茉莉白芽茶汤呈色晶莹剔透茶味清新自然，入口是西柚的清爽中段尾韵又有桃桃的回甘，最后满口茉莉茶香好看更好喝主要原料：桃子,西柚',
                modifier: {xiaoliang:'月售1000份',pingjia:'好评率100%'},
                price: '20'
            }
        ]

        return {
            goodsListData
        }
    }
}
</script>

<style lang='scss'>
    .goodsList {
        width: 295px;
        min-height: 450px;
        background-color: pink;
    }
</style>