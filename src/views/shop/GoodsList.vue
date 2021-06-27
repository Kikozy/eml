<template>
  <div class="goodsList">
      <GoodsItem 
        v-for="(item,index) in goodsList"
        :goods = 'item'
        :key="item.goods_id+index"
      />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
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
        const goodsList = reactive(computed(()=>store.state.goodsList))

        return {
            goodsList
        }
    }
}
</script>

<style lang='scss'>
    .goodsList {
        width: 78.66rem;
        height: 81.8rem;
        overflow: scroll;
    }
</style>