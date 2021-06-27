<template>
  <div class="order">
      <SortMenu />
      <GoodsList />
      <ShoppingCart />
  </div>
</template>

<script>
import SortMenu from './SortMenu'
import GoodsList from './GoodsList'
import ShoppingCart from './ShoppingCart'
export default {
    name: 'Order',
    components: {
        SortMenu,
        GoodsList,
        ShoppingCart
    }
}
</script>

<style lang='scss'>
    .order {
        display: flex;
        flex-wrap: wrap;
    }
</style>