<template>
    <div class="tableware">
        <div class="title">餐具选择</div>
        <div class="num">
            <button class="reduce" @click='reduce'>-</button>
            <input type="number" v-model="tablewareNum">
            <button class="add" @click="add">+</button>
        </div>
        <button class="submitTableware" @click="submitTableware">确定</button>
    </div>
</template>

<script>
import { onUnmounted, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    name: "Tableware",
    props: ['closeFun'],
    setup(props){
        const store = useStore()
        const tablewareNum = ref(0)
        function reduce(){
            tablewareNum.value!=0?tablewareNum.value--:tablewareNum.value=0
        }
        function add(){
            tablewareNum.value<10?tablewareNum.value++:tablewareNum.value=10
        }
        function submitTableware(){
            store.commit('changeTablewareNum',tablewareNum.value)
            props.closeFun()
        }
        onUnmounted(()=>{
            console.log('啊啊啊我被销毁了')
        })
        onMounted(()=>{
            //这里检测一下sessionStorage中的数据，方便修改
            tablewareNum.value = store.state.tempOrder.tablewareNum
        })
        return {
            tablewareNum,
            reduce,
            add,
            submitTableware
        }
    }
}
</script>

<style lang="scss" scoped>
    .tableware{
        height: 73.33rem;
        width: 100rem;
        display: flex;
        position: fixed;
        padding: 4.266rem;
        bottom: 0;
        background-color: #fff;
        flex-direction: column;
        align-items: center;
        .title {
            height: 13.33rem;
            font-size: 4.8rem;
            text-align: center;
            line-height: 13.33rem;
        }
        .num {
            margin-top: 5.33rem;
            width: 21.33rem;
            display: flex;
            justify-content: space-around;
            input {
                width: 6.66rem;
                height: 8rem
            }
            .reduce {
                width: 5.33rem;
                height: 8rem;
            }
            .add {
                width: 5.33rem;
                height: 8rem;
            }
        }
        .submitTableware {
            margin-top: 3rem;
            width: 100%;
            height: 12rem;
            outline: none;
            border: none;
            font-size: 4.2rem;
            color: white;
            background-color: #00e067;
        }
    }


</style>