<template>
  <div class="foodType">
      <div class="item" v-for="(item,index) in data" :key="item.name+index">
        <img :src="item.imgUrl" alt="">
        <span>{{item.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FoodType',
  setup(){
    const data = [
      {
        imgUrl: 'https://www.hualigs.cn/image/60cb02fe6be40.jpg',
        name: '美食'
      },
      {
        imgUrl: 'https://www.hualigs.cn/image/60cb02fe706c6.jpg',
        name: '大牌惠吃'
      },
      {
        imgUrl: 'https://www.hualigs.cn/image/60cb02fe6dc04.jpg',
        name: '跑腿代购'
      },
      {
        imgUrl: 'https://www.hualigs.cn/image/60cb190eea7f7.jpg',
        name: '汉堡披萨'
      },
      {
        imgUrl: 'https://www.hualigs.cn/image/60cb190eeca2a.jpg',
        name: '地方小吃'
      },{
        imgUrl: 'https://www.hualigs.cn/image/60cb1ac727c8b.jpg',
        name: '米粉面馆'
      },
      {
        imgUrl: 'https://www.hualigs.cn/image/60cb190eebbc4.jpg',
        name: '包子粥店'
      },
      {
        imgUrl: 'https://www.hualigs.cn/image/60cb190eeeb6b.jpg',
        name: '炸鸡炸串'
      }
    ]
    return {
      data
    }
  }
}
</script>

<style lang='scss' scoped>
  .foodType {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20rem;
      img {
        width: 12rem;
        height: 12rem;
      }
      span {
        font-size: 2rem;
      }
    }
  }
</style>