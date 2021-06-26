<template>
    <div class="pay">
        <div class="payTitle">确认订单</div>
        <div class="content">
            <div class="address">
                <span class="title">订单配送至</span>
                <span class="selectAddress">选择收货地址 ></span>
            </div>
            <div class="changeTime">
                <div class="getTime">
                    <span class="title">送达时间</span>
                    <span class="time">尽快送达(12:19送到)</span>
                </div>
                <div class="payType">
                    <span class="title">支付方式</span>
                    <span class="type">在线支付</span>
                </div>
            </div>
            <div class="goodsList">
                <div class="shopTitle">SEVENBUS(重庆北城天街店)</div>
                <div class="goodsItem">
                    <img src="" alt="">
                    <div class="goodsName">奥利奥冰淇淋</div>
                    <div class="goodsCount">X1</div>
                    <div class="goodsPreice">￥12</div>
                </div>
                <div class="goodsItem">
                    <img src="" alt="">
                    <div class="goodsName">奥利奥冰淇淋</div>
                    <div class="goodsCount">X1</div>
                    <div class="goodsPreice">￥12</div>
                </div>
                <div class="rangeCost">
                    <div class="title">配送费</div>
                    <div class="money">1元</div>
                </div>
                <div class="count">
                    <div class="countNum">小计 ￥25</div>
                </div>
            </div>
            <div class="ex">
                <div class="tableware">
                    <div class="title">餐具份数</div>
                    <div class="tablewareController">未选择 ></div>
                </div>
                <div class="note">
                    <div class="title">订单备注</div>
                    <div class="noteController" @click="openSelector('note')">口味、偏好 ></div>
                </div>
                <div class="invoice">
                    <div class="title">发票信息</div>
                    <div class="text">该店不支持线上开票，请电话联系商户</div>
                </div>
                <div class="phoneDefend">
                    <div class="title">号码保护</div>
                    <div class="text">号码保护中，将对商家、骑士隐藏您的真实手机号</div>
                </div>
            </div>
        </div>
        <div class="bottomBar">
            <div class="countMoney">￥25</div>
            <div class="payButton">去支付</div>
        </div>
    </div>
    <div class="darkScreen" ref='darkScreenRef' @click="closeSelector"></div>
    <Note v-if="selectorState.note"/>
</template>

<script>
import { reactive , ref} from 'vue'
import Note from './Note'
export default {
    name: 'Pay',
    components: {
        Note
    },
    setup(){
        let darkScreenRef = ref(null)
        let selectorState = reactive({
            now: '',
            note: false
        })
        function openSelector(name){
            darkScreenRef.value.style.display = 'block'
            selectorState[name] = true
            selectorState.now = name
        }
        function closeSelector() {
            darkScreenRef.value.style.display = 'none'
            selectorState[selectorState.now] = false
        }
        return {
            selectorState,
            darkScreenRef,
            openSelector,
            closeSelector
        }
    }
}
</script>

<style lang="scss" scoped>
    .pay {
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
        .payTitle {
            height: 11.7rem;
            font-size: 4.8rem;
            font-weight: bold;
            color: white;
            text-align: center;
            line-height: 11.7rem;
        }
        .content {
            padding: 0 1.6rem;
            .address {
                padding: 3.2rem 2.13rem;
                height: 20rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title {
                    font-size: 3.7rem;
                    color: hsla(0,0%,100%,.8);
                }
                .selectAddress {
                    font-size: 5.86rem;
                    font-weight: bold;
                    color: white;
                }
            }
            .changeTime {
                height: 26.66rem;
                padding: 0 5.33rem;
                background-color: #fff;
                .getTime {
                    height: 13.33rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 4rem;
                    .title {
                        color: #333;
                    }
                    .time {
                        color: #2395ff;
                    }
                }
                .payType {
                    border-top: 1px solid rgb(246, 246, 246);
                    height: 13.33rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 4rem;
                    .title {
                        color: #333;
                    }
                    .type {
                        color: #2395ff;
                    }
                }
            }
            .goodsList {
                margin-top: 2.66rem;
                padding: 0 5.3rem;
                display: flex;
                flex-direction: column;
                background-color: #fff;
                .shopTitle {
                    height: 13.33rem;
                    font-size: 4.5rem;
                    font-weight: bold;
                    line-height: 13.33rem;
                    border-bottom: 0.5rem solid rgb(235, 234, 234);
                }
                .goodsItem {
                    height: 16rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 0.2rem solid rgb(240, 240, 240);
                    img {
                        width: 9.6rem;
                        height: 9.6rem;
                    }
                    .goodsName {
                        font-size: 3.7rem;
                        width: 40rem;
                    }
                    .goodsCount {
                        font-size: 3.2rem;
                    }
                    .goodsPrice {
                        font-size: 4.26rem;
                        width: 13.33rem;
                    }
                }
                .rangeCost {
                    height: 13.33rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .title {
                        font-size: 3.7rem;
                    }
                    .money {
                        font-size: 4.2rem;
                    }
                }
                .count {
                    height: 16rem;
                    display: flex;
                    justify-content: flex-end;
                    .countNum {
                        font-size: 5.86rem;
                    }
                }
            }
            .ex {
                margin: 2.6rem 0 14.66rem 0;
                padding: 0 5.3rem;
                display: flex;
                flex-direction: column;
                background-color: #fff;
                .tableware {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 13.33rem;
                    .title {
                        font-size: 4rem;
                        color: #333;
                    }
                    .tablewareController {
                        font-size: 3.4rem;
                        color: #bbb;
                    }
                }
                .note {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 13.33rem;
                    .title {
                        font-size: 4rem;
                        color: #333;
                    }
                    .noteController {
                        font-size: 3.4rem;
                        color: #bbb;
                    }
                }
                .invoice {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 13.33rem;
                    .title {
                        font-size: 4rem;
                        color: #333;
                    }
                    .text {
                        font-size: 3.4rem;
                        color: #bbb;
                    }
                }
                .phoneDefend {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 20rem;
                    .title {
                        font-size: 4rem;
                        color: #333;
                    }
                    .text {
                        font-size: 3.4rem;
                        color: #bbb;
                    }
                }
            }
        }
    .bottomBar{
        height: 12rem;
        background-color: #3c3c3c;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .countMoney {
            font-size: 4.8rem;
            color: white;
        }
        .payButton {
            font-size: 4.8rem;
            line-height: 12rem;
            text-align: center;
            width: 29.33rem;
            height: 100%;
            color: white;
            background-color: #00e067;
        }
    }
}
.darkScreen {
    position: fixed;
    top: 0;
    display: none;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.5);
}
</style>