<template>
    <div class="shopInfo">
        <!-- 店铺背景图片 -->
        <div class="shopBgImg">
            <img :src="shopData.shop_bg_img" alt="">
        </div>
        <!-- 店铺LOGO -->
        <div class="shopLOGO">
            <img :src="shopData.shop_logo" alt="">
        </div>
        <!-- 店铺名字 -->
        <div class="shopName">{{shopData.shop_name}}</div>
        <!-- 店铺信息 -->
        <div class="shopModifier">
            <div class="pingjia">评价4</div>
            <div class="xiaoliang">月销: {{shopData.shop_sales}}</div>
            <div class="peisongshijian">蜂鸟快送约{{shopData.shop_range_time}}分钟</div>
        </div>
        <!-- 优惠活动 -->
        <div class="youhuihuodong">
            <div class="huodong-item">39减21</div>
            <div class="huodong-item">39减21</div>
            <div class="huodong-item">39减21</div>
            <div class="huodong-item">39减21</div>
            <div class="huodong-item">6个优惠</div>
        </div>
        <!-- 公告 -->
        <div class="notice">公告：{{shopData.shop_msg}}</div>
        <!-- 选项卡 -->
        <div class="tab">
            <div class="tab-item">点餐</div>
            <div class="tab-item">评价</div>
            <div class="tab-item">商家</div>
        </div>
    </div>
    <Order />
</template>

<script>
import { reactive , computed , } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Order from './Order'
export default {
    name: 'Shop',
    components: {
        Order
    },
    setup(){
        const route = useRoute()
        const store = useStore()
        const shopData = reactive(computed(()=> store.state.shopList[route.params.shop_id]))
        const shop_id = route.params.shop_id
        return {
            shopData,
            shop_id
        }
    }
}
</script>

<style lang='scss' scoped>
    .shopInfo {
        width: 100rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .shopBgImg {
            width: 100%;
            height: 25rem;
            img {
                width: 100%;
            }
        }
        .shopLOGO {
            width: 20rem;
            height: 20rem;
            position: absolute;
            left: 50%;
            top: 10.66rem;
            transform: translateX(-50%);
            img {
                width: 100%;
            }
        }
        .shopName {
            margin-top: 10.66rem;
            font-size: 5.33rem;
            font-weight: bold;
        }
        .shopModifier {
            margin-top: 10.66rem;
            width: 72rem;
            display: flex;
            justify-content: space-around;
            div {
                font-size: 3.2rem;
            }
        }
        .youhuihuodong {
            margin-top: 2.66rem;
            display: flex;
            .huodong-item {
                font-size: 3.2rem;
                color: orangered;
            }
        }
        .notice {
            margin-top: 2.6rem;
            width: 80rem;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 3.2rem;
            color: #999999  ;
        }
        .tab {
            margin-top: 1.33rem;
            display: flex;
            width: 100%;
            .tab-item {
                flex: 1;
                text-align: center;
                font-weight: bold;
                color: #666666;
                height: 10.66rem;
                line-height: 10.66rem;
            }
        }
    }
</style>