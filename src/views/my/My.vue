<template>
    <div class="my">
        <div class="user">
            <div class="imgBox">
                <img src="" alt="">
            </div>
            <div class="userInfo">
                <span class="userName">未登陆</span>
                <span class="userPhone">1134654646556</span>
            </div>
        </div>
        <div class="card">
            <div class="hb">
                <span>10个</span>
                <span>红包</span>
            </div>
            <div class="jb">
                <span>0个</span>
                <span>金币</span>
            </div>
        </div>
        <div class="address item">
            <span class="title">
                <span class="tb iconfont">&#xe6ad;</span>
                <span class="text">我的地址</span>
            </span>
            <span class="tp">></span>
        </div>
        <div class="jbStore item">
            <span class="title">
                <span class="tb iconfont">&#xe993;</span>
                <span class="text">金币商城</span>
            </span>
            <span class="tp">></span>
        </div>
        <div class="myService item">
            <span class="title">
                <span class="tb iconfont">&#xe996;</span>
                <span class="text">我的客服</span>
            </span>
            <span class="tp">></span>
        </div>
        <div class="downloadApp item">
            <span class="title">
                <span class="tb iconfont">&#xe99b;</span>
                <span class="text">下载饿了么APP</span>
            </span>
            <span class="tp">></span>
        </div>
        <div class="rule item">
            <span class="title">
                <span class="tb iconfont">&#xe99c;</span>
                <span class="text">规则中心</span>
            </span>
            <span class="tp">></span>
        </div>
    </div>
    <BottomBar />
</template>

<script>
import BottomBar from '../../components/bottomBar'
export default {
    name: 'My',
    components: {
        BottomBar
    }
}
</script>

<style lang='scss' scoped>
    .my {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: rgb(245,245,245);
        .user {
            padding: 6.66rem;
            width: 100rem;
            display: flex;
            background-image: linear-gradient(90deg,#0af,#0085ff);
            .imgBox {
                height: 16rem;
                width: 16rem;
                border-radius: 50%;
                background: pink;
            }
            .userInfo {
                margin-left: 5.33rem;
                display: flex;
                flex-direction: column;
                .userName {
                    font-size: 5.6rem;
                    font-weight: bold;
                    color: white;
                }
                .userPhone {
                    margin-top: 1.33rem;
                    font-size: 3.2rem;
                    color: white;
                }
            }
        }
        .card {
            height: 21.33rem;
            background-color: #fff;
        }
        .item {
            padding: 2.6rem 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            border-top: 1px solid rgb(204, 203, 203);
            border-bottom: 1px solid rgb(204, 203, 203);
            .title {
                .tb {
                    margin-right: 10px;
                    font-size: 4.8rem;
                    color: rgb(74, 165, 240);
                }
                .text {
                    font-size: 4.26rem;
                    color: #333;
                }
            }
            .tp {
                font-size: 10px;
                font-weight: bold;
                color: rgb(131, 131, 131);
            }
        }
        .address {
            margin: 10px 0;
        }
        .jbStore {
            margin-bottom: 10px;
        }
        .myService {
            border-bottom: none;
        }
        .downloadApp {
            border-bottom: none;
        }
        .rule {
        }
    }
</style>