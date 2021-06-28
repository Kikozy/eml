<template>
    <div class="goodsItem">
        <div class="goodsImg">
            <img :src="goods.goods_img" alt="">
        </div>
        <div class="goodsText">
            <div class="goodsName">{{goods.goods_name}}</div>
            <span class="goodsDesc">{{goods.goods_desc}}</span>
            <div class="goodsModifier">
                <span class="sales">月销: {{goods.goods_sales}}份</span>
                <span class="score">好评率：{{goods.goods_score}}%</span>
            </div>
            <div class="goodsPrice">￥{{goods.goods_price}}</div>
        </div>
        <CountingBoard :goods='goods'/>
    </div>
</template>

<script>
import CountingBoard from './CountingBoard'
export default {
    name: 'GoodsItem',
    props: ['goods'],
    components: {
        CountingBoard
    },
    setup(){
    }
}
</script>

<style lang='scss'>
    .goodsItem {
        padding: 2.6rem 0;
        margin-left: 2.6rem;
        display: flex;
        position: relative;
        .goodsImg {
            height: 25.33rem;
            width: 25.33rem;
            img {
                width: 100%;
            }
        }
        .goodsText {
            margin-left: 2.6rem;
            width: 48rem;
            display: flex;
            flex-direction: column;
            .goodsName {
                font-size: 4.26rem;
                color: #333333;
                font-weight: bold;
            }
            .goodsDesc {
                margin-top: 1.33rem;
                font-size: 3.2rem;
                color: #999999;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .goodsModifier {
                margin-top: 1.33rem;
                font-size: 3.2rem;
                color: #999999;
                .sales {
                    margin-right: 1.33rem;
                }
            }
            .goodsPrice {
                margin-top: 5.33rem;
                font-size: 4rem;
                color: #ff5339;
            }
        }

    }
</style>