<template>
  <div class="backup-content">
    <div>将所有数据备份到剪贴板，你可以稍后存储到任何地方</div>
    <button @click="copy">备份到剪贴板</button>
    <div class="success" v-show="isSuccess">数据已备份</div>
  </div>
</template>

<script>
export default {
  name:"Backups",
  data(){
    return{
      content:[],
      isSuccess:false
    }
  },
  methods:{
    copy(){
      navigator.clipboard.writeText(this.content).then(()=>{
        this.isSuccess=true;
        setTimeout(()=>{
          this.isSuccess=false;
        },1000)
      })
    }
  },
  activated(){
    for(let item of this.$store.state.list.slice(2,this.$store.state.list.length)){
      this.content.push(item.value);
    }
  },
  deactivated(){
    this.content=[];
  }
}
</script>

<style scoped>
  .backup-content{
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

  .backup-content > div{
    padding-top: 9px;
  }

  .backup-content > button{
    background-color: #fff;
    border: 1px solid blue;
    outline: none;
    color: blue;
    height: 36px;
    border-radius: 3px;
    margin-top: 20%;
  }

  .success{
    width: 40%;
    background-color: rgba(150, 146, 146, 0.4);
    border-radius: 4px;
    position: fixed;
    left: 29%;
    top: 32%;
    padding-bottom: 9px;
    color: #fff;
  }
</style>