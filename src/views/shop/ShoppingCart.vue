<template>
    <div class="shoppingCart">
        <div class="title">
            <span class="text">已选商品</span>
            <span class="clear">清空</span>
        </div>
        <div class="detailedList">

        </div>
        <div class="pay">
            <div class="icon">
                <img src="" alt="">
            </div>
            
            <div class="totaled">
                <span class="heji">￥202</span>
                <span class="yunfei">另需配送费1元</span>
            </div>
            <div class="payTp">去结算</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCart',
    setup(){}
}
</script>

<style lang='scss' scoped>
    .shoppingCart {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        width: 100rem;  
        .title {
            padding: 0 4rem;
            display: flex;
            justify-content: space-between;
            width: 100rem;
            height: 10.66rem;
            background-color: #eceff1;
            .text {
                height: 10.66rem;
                font-size: 4.26rem;
                line-height: 10.66rem;
                color: #666666;
            }
            .clear {
                height: 10.66rem;
                font-size: 3.46rem;
                line-height: 10.66rem;
                color: #666666;
            }
        }
        .detailedList {
            height: 100px;
        }
        .pay {
            width: 100rem;
            position: relative;
            display: flex;
            justify-content: flex-end;
            background-color: rgba(61,61,63,.9);
            .icon {
                position: absolute;
                left: 15px;
                top: -15px;
                width: 13rem;
                height: 13rem;
                border-radius: 50%;
                border: 1rem solid #333333;
                background-color: #3190e8;
                img {}
            }

            .totaled {
                width: 50.66rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .heji {
                    font-size: 4.8rem;
                    color: white;
                }
                .yunfei {
                    font-size: 3.2rem;
                    color: #999999;
                }
            }
            .payTp {
                width: 28rem;
                height: 12.8rem;
                color: white;
                font-size: 4rem;
                font-weight: bolder;
                line-height: 10.66rem;
                text-align: center;
                background-color: #38ca73;
            }

        }
    }
</style>