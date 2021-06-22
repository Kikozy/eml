<template>
  <div class="order">
      <SortMenu />
      <GoodsList />
  </div>
</template>

<script>
import SortMenu from './SortMenu'
import GoodsList from './GoodsList'
export default {
    name: 'Order',
    components: {
        SortMenu,
        GoodsList
    }
}
</script>

<style lang='scss'>
    .order {
        display: flex;
        flex-wrap: wrap;
    }
</style>