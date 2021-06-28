<template>
    <div class="historyItem">
        <div class="logoBox">
            <img src="" alt="">
        </div>
        <div class="shopInfo">
            <div class="shopName">
                <span class="title">商店名字</span>
                <span class="state">已送达</span>
            </div>
            <div class="goodsShow">
                <span class="goods">购买的商品</span>
                <span class="price">￥24.88</span>
            </div>
        </div>
        <div class="btnArea">
            <button class="repeat">再来一单</button>
            <button class="msg">评价得金币</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .historyItem {
        margin: 0 0 2.6rem 0;
        padding: 4rem 0 0 4rem;
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        .logoBox {
            margin-right: 2.66rem;
            width: 8.53rem;
            height: 8.53rem;
            img {
                width: 100%;
            }
        }
        .shopInfo {
            width: 84.8rem;
            .shopName {
                padding: 0 2.6rem 2.6rem 0;
                height: 12rem;
                display: flex;
                justify-content: space-between;
                border-bottom: 0.2rem solid rgb(238, 238, 238);
                .title {
                    font-size: 4.26rem;
                    color: #333;
                }
                .state {
                    font-size: 3.46rem;
                    color: #333;
                }
            }
            .goodsShow {
                height: 12rem;
                padding: 4rem 2.6rem 4rem 0;
                display: flex;
                justify-content: space-between;
                .goods {
                    font-size: 3.46rem;
                    color: #666;
                }
            }
        }
        .btnArea {
            padding: 2.6rem 4rem;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid rgb(238, 238, 238);
            .repeat {
                margin-right: 2.66rem;
                padding: 1.33rem 2.66rem;
                height: 7.46rem;
                color: #2395ff;
                background-color: #fff;
                border: 0.2rem solid #2395ff;
                outline: none;
            }
            .msg {
                padding: 1.33rem 2.66rem;
                height: 7.46rem;
                color: #ff5339;
                background-color: #fff;
                border: 0.2rem solid #ff5339;
                outline: none;
            }
        }
    }
</style>