<template>
  <div class="note">
      <div class="title">订单备注</div>
      <textarea class="noteArea" name="noteArea" placeholder="填写额外对餐厅和骑士小哥备注的信息" maxlength="100">

      </textarea>
      <button class="submitNote">确定</button>
  </div>
</template>

<script>
export default {
    name: 'Note',
    setup(){

    }
}
</script>

<style lang='scss' scoped>
    .title {
        height: 13.33rem;
        font-size: 4.8rem;
        text-align: center;
        line-height: 13.33rem;
    }
    .note {
        padding: 4.266rem;
        position: fixed;
        bottom: 0;
        width: 100rem;
        height: 73.33rem;
        background-color: #fff;
        .noteArea {
            padding: 4.266rem;
            width: 100%;
            height: 30rem;
            outline: none;
            font: normal 3.73rem '微软雅黑';
            background-color: #f9f9f9;
            border: 0.2rem solid #ccc;
        }
        .submitNote {
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