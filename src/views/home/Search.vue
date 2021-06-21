<template>
    <div class="search">
        <span class="iconfont icon">&#xe61d;</span>
        <input type="text" placeholder="搜索饿了么商家、商品名称">
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>
<style lang='scss' scoped>
    .search {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 93rem;
        height: 9.6rem;
        background-color: white;
        .icon {
            font-size: 4rem;
        }
        input {
            margin-left: 1.33rem;
            width: 44rem;
            height: 100%;
            border: none;
            outline: none;
            font-size: 4rem;
        }
    }
</style>