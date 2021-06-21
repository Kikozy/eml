<template>
  <div class="home">
      <header>
        <Address />
        <Search />
      </header>
      <FoodType />
      <keep-alive>
        <ShopList />
      </keep-alive>
      
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
  }
</style>