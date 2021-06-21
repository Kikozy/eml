<template>
    <div class="shopInfo">
        <!-- 店铺背景图片 -->
        <div class="shopBgImg">
            <img src="" alt="">
        </div>
        <!-- 店铺LOGO -->
        <div class="shopLOGO">
            <img src="" alt="">
        </div>
        <!-- 店铺名字 -->
        <div class="shopName">{{shopData.shop_name}}</div>
        <!-- 店铺信息 -->
        <div class="shopModifier">
            <div class="pingjia">评价4</div>
            <div class="xiaoliang">月销: {{shopData.shop_sales}}</div>
            <div class="peisongshijian">蜂鸟快送约{{shopData.shop_range_time}}分钟</div>
        </div>
        <!-- 优惠劵 -->
        <div class="youhuijuan">￥6 无门槛 领取</div>
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
</template>

<script>
import { reactive , computed} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// import axios from 'axios'
export default {
    name: 'Shop',
    setup(){
        const route = useRoute()
        const store = useStore()
        const shopData = reactive(computed(()=> store.state.shopList[route.params.shopIndex]))
        return {
            shopData
        }
    }
}
</script>

<style lang='scss' scoped>
    .shopInfo {
        width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .shopBgImg {
            width: 100%;
            height: 100px;
            background-color: pink;
        }
        .shopLOGO {
            width: 75px;
            height: 75px;
            position: absolute;
            left: 50%;
            top: 40px;
            transform: translateX(-50%);
            border: 1px solid orange;
        }
        .shopName {
            margin-top: 40px;
            font-size: 20px;
            font-weight: bold;
        }
        .shopModifier {
            margin-top: 10px;
            width: 270px;
            display: flex;
            justify-content: space-around;
            div {
                font-size: 12px;
            }
        }
        .youhuijuan {
            margin-top: 10px;
            width: 145px;
            height: 25px;
            background-color: #ffe578;
            text-align: center;
            line-height: 25px;
        }
        .youhuihuodong {
            margin-top: 10px;
            display: flex;
            .huodong-item {
                font-size: 12px;
                color: orangered;
            }
        }
        .notice {
            margin-top: 10px;
            width: 300px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 12px;
            color: #999999  ;
        }
        .tab {
            margin-top: 5px;
            display: flex;
            width: 100%;
            .tab-item {
                flex: 1;
                text-align: center;
                font-weight: bold;
                color: #666666;
                height: 40px;
                line-height: 40px;
            }
        }
    }
</style>