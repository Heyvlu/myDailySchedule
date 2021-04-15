<template>
  <div class="pay">
    <div class="fedding">点击投喂开发者<img src="~assets/img/smail.svg"/></div>
    <button>支付宝</button>
  </div>
</template>

<script>
export default {
  name:"Pay"
}
</script>

<style scoped>
  .pay{
    height: 25%;
    width: 50%;
    background: #fff;
    border-radius: 6px;
    text-align: center;
    position: relative;
    top: 18%;
    left: 24%;
    box-shadow: 2px 3px rgba(218, 211, 211,.2);
  }

  .fedding{
    padding-top: 8px;
  }

  .fedding > img{
    width: 28px;
  }

  .pay > button{
    background-color: #fff;
    border: 1px solid blue;
    outline: none;
    color: blue;
    height: 36px;
    border-radius: 3px;
    margin-top: 35%;
  }
</style>