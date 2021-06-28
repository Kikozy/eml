<template>
<div class="shopItem">
    <div class="imgBox">
        <img :src='shopData.shop_logo' alt="">
    </div>
    <div class="shopText">
        <p class="name">{{shopData.shop_name}}</p>
        <div class="sales">月销{{shopData.shop_sales}}单</div>
        <div class="modifier">
            <div class="cost">
                <span>￥{{shopData.shop_cost_star}}起送</span>
                <span>远距离配送￥{{shopData.shop_cost_ex}}</span>
            </div>
            <div class="range">
                <span>{{shopData.shop_range_km}}km</span>
                <span>{{shopData.shop_range_time}}分钟</span>
            </div>
        </div>
        <div class="tag">{{shopData.shop_tag}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'shopItem',
    props: ['shopData'],
    setup(){

    }
}
</script>

<style lang='scss' scoped>
    //单个店铺
    .shopItem {
        padding: 2.66rem 0;
        display: flex;
        border-bottom: 0.26rem solid #ebeaea;
        //店铺LOGO
        .imgBox {
                height: 17.33rem;
                width: 17.33rem;
            img {
                width: 100%;
                width: 100%;
            }
        }
        //店铺的文字描述
        .shopText {
            width: 74.66rem;
            margin-left: 2.6rem;
            display: flex;
            flex-direction: column;
            //名称
            .name {
                font-size: 3.7rem;
                font-weight: bolder;
            }
            //销量
            .sales {
                margin-top: 1.33rem;
                font-size: 3.2rem;
                color: #666666;
            }
            //修饰词缀
            .modifier {
                margin-top: 1.33rem;
                display: flex;
                justify-content: space-between;
                .cost {
                    width: 55%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 3.2rem;
                    color: #666666;
                }
                .range {
                    width: 30%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 3.2rem;
                    color: #999999;
                }
            }
            //标签
            .tag {
                margin-top: 1.33rem;
                max-width: 17rem;
                font-size: 3.2rem;
                -webkit-transform-origin-x: 0;
                transform:scale(0.8);
                color: #999999;
                text-align: center;
                border: 0.26rem solid #999999;
            }
        }
    }
</style>