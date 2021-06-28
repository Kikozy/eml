<template>
    <div class="history">
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
    </div>
    <BottomBar />
</template>

<script>
import BottomBar from '../../components/bottomBar'
import HistoryItem from './HistoryItem'
export default {
    name: 'History',
    components: {
        BottomBar,
        HistoryItem
    },
    setup(){

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