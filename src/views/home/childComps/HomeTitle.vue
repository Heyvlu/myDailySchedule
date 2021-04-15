<template>
  <div class="title">
    <span>我的日常规划</span>
    <img src="~assets/img/setting.svg" @click="setting">
  </div>
</template>

<script>
export default {
  name:"HomeTitle",
  methods:{
    setting(){
      this.$router.push('/setting');
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 30px;
    font-weight: 540;
    width: 100%;
    position: absolute;
    padding-left: 10px;
  }

  .title > img{
    width: 30px;
    position: relative;
    float: right;
    padding-right: 20px;
    top: 4px;
  }
</style>