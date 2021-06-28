<template>
  <div class="bottomBar">
    <div :class="['item',data.home?'blue':'']" @click="changePage('home'),tpPage('')">
      <span class="iconfont">&#xe98c;</span>
      <span :class="['text',data.home?'blue':'']">首页</span>
    </div>
    <div :class="['item',data.faxian?'blue':'']" @click="changePage('faxian')">
      <span class="iconfont">&#xe997;</span>
      <span :class="['text',data.faxian?'blue':'']">发现</span>
    </div>
    <div :class="['item',data.dingdan?'blue':'']" @click="changePage('dingdan'),tpPage('History')">
      <span class="iconfont">&#xe98d;</span>
      <span :class="['text',data.dingdan?'blue':'']">订单</span>
    </div>
    <div :class="['item',data.my?'blue':'']" @click="changePage('my'),tpPage('My')" >
      <span class="iconfont">&#xe99e;</span>
      <span :class="['text',data.my?'blue':'']">我的</span>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    name: 'bottomBar',
    setup(){
      const router = useRouter()
      const store = useStore()
      const data = reactive(store.state.bottomBarState)
      function changePage(page){
        store.commit('changeBottomBarSelect',page)
      }
      function tpPage(path){
        router.push({path: `/${path}`})
      }
      return {
        data,
        changePage,
        tpPage
      }
    }
}
</script>

<style lang='scss'>
.bottomBar {
    height: 13.33rem;
    width: 100rem;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 -0.266667vw 0.533333vw rgb(0 0 0 / 10%);
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        span.iconfont {
          font-size: 5.33rem;
        }
        .text {
            font-size: 3.2rem;
            color: #8e8e93;
        }
    }
}
.blue {
  color: #0089dc !important;
}

</style>