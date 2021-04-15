<template>
  <div class="choice">
    {{message}}
  </div>
</template>

<script>
export default {
  name:"Finish",
  props:{
    message:{
      type:String,
      default:"完成"
    }
  }
}
</script>

<style scoped>
  .choice{
    width: 40px;
    height: 100%;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    transform: translateX(-60px);
    background: rgb(8, 212, 8);
    text-align: center;
  }
</style>