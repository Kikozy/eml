<template>
  <div class="home">
      <header>
        <Address />
        <Search />
      </header>
      <FoodType />
      <div class="banner">
        <p class="title">品质套餐</p>
        <p class="desc">搭配齐全吃得好</p>
        <p class="tpBtn">立即抢购</p>
        <img src="" alt="">
      </div>
      <div class="vip">
        <span class="title">超级会员 ·</span>
        <span class="desc">下单即可获得奖励金 ></span>
      </div>
      <ShopList />
      
  </div>
  <BottomBar />
</template>

<script>

import BottomBar from '../../components/bottomBar'
import Address from '../home/Address'
import Search from '../home/Search'
import FoodType from '../home/FoodType'
import ShopList from '../home/shoplist/ShopList'
export default {
  name: 'Home',
  components: {
    BottomBar,
    Address,
    Search,
    FoodType,
    ShopList
  }
}
</script>

<style lang='scss' scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 25.33rem;
      width: 100rem;
      background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .banner {
      margin-top: 2.6rem;
      width: 94.66rem;
      height: 29.33rem;
      padding: 0 2.66rem;
      display: flex;
      flex-direction: column;
      border-radius: 0.8rem;
      background-image: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
      .title {
        margin: 10px 0 0 10px;
        font-size: 4.53rem;
        font-weight: bold;
      }
      .desc {
        margin-left: 10px;
        font-size: 3.46rem;
        color: #777;
      }
      .tpBtn {
        margin: 5px 0 0 10px;
        font-size: 3.2rem;
        font-weight: bold;
        color: #af8260;
      }
    }
    .vip {
      margin-top: 1.3rem;
      padding: 0 2.6rem;
      width: 94.66rem;
      height: 10.66rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
      border-radius: 0.8rem;
      .title {
        font-size: 3.73rem;
        font-weight: bold;
        color: #644f1b;
      }
      .desc {
        font-size: 3.2rem;
        color: #644f1b;
      }
    }
  }
</style>