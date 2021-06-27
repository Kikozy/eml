<template>
    <div class="goodsItem">
        <div class="goodsImg">
            <img src="" alt="">
        </div>
        <div class="goodsText">
            <div class="goodsName">{{goods.goods_name}}</div>
            <span class="goodsDesc">{{goods.goods_desc}}</span>
            <div class="goodsModifier">
                <span>{{goods.goods_sales}}</span>
                <span>{{goods.goods_score}}</span>
            </div>
            <div class="goodsPrice">{{goods.goods_price}}</div>
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
        padding: 10px 0;
        margin-left: 10px;
        display: flex;
        position: relative;
        .goodsImg {
            height: 95px;
            width: 95px;
        }
        .goodsText {
            margin-left: 10px;
            width: 180px;
            display: flex;
            flex-direction: column;
            .goodsName {
                font-size: 16px;
                color: #333333;
                font-weight: bold;
            }
            .goodsDesc {
                margin-top: 5px;
                font-size: 12px;
                color: #999999;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .goodsModifier {
                margin-top: 5px;
                font-size: 12px;
                color: #999999;
            }
            .goodsPrice {
                margin-top: 20px;
            }
        }

    }
</style>