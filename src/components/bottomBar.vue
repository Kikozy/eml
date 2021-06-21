<template>
  <div class="bottomBar">
    <div class="item">
      <span class="iconfont">&#xe650;</span>
      <span class="text">首页</span>
    </div>
    <div class="item">
      <span class="iconfont">&#xe650;</span>
      <span class="text">首页</span>
    </div>
    <div class="item">
      <span class="iconfont">&#xe650;</span>
      <span class="text">首页</span>
    </div>
    <div class="item">
      <span class="iconfont">&#xe650;</span>
      <span class="text">首页</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'bottomBar'
}
</script>

<style lang='scss'>
.bottomBar {
    display: flex;
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 375px;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        .text {
            font-size: 12px
        }
    }
}   

</style>