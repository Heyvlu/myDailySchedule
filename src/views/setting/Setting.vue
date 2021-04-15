<template>
  <div class="setting">
    <div class="navBar">
      <img src="~assets/img/back.svg" @click="back"/>
      <span class="backups" @click="backupsClick" :class="{'active':isActive}">备份</span>
      <span class="reward" @click="rewardClick" :class="{'active':!isActive}">打赏</span>
    </div>
    <backups v-show="isActive"/>
    <pay v-show="!isActive"/>
    <famous-quotes/>
  </div>
</template>

<script>
import Pay from './childComps/Pay';
import Backups from './childComps/Backups';
import FamousQuotes from './childComps/FamousQuotes';

export default {
  name:"Setting",
  components:{
    Pay,
    Backups,
    FamousQuotes
  },
  data(){
    return{
      isActive:true
    }
  },
  methods:{
    back(){
      this.$router.back();
    },
    backupsClick(){
      if(this.isActive==false){
        this.isActive=!this.isActive;
      }
    },
    rewardClick(){
      if(this.isActive==true){
        this.isActive=!this.isActive;
      }
    }
  }
}
</script>

<style scoped>
  .setting{
    height: 100vh;
    width: 100vw;
    background: rgb(250, 248, 223);
  }

  .navBar{
    height: 44px;
    background-color: rgb(252, 210, 232);
    box-shadow: 0 1px rgba(126, 128, 126, .1);
    font-size: 18px;
    display:flex;
  }

  .navBar > img{
    width: 26px;
    position: fixed;
    top: 7px;
    left: 8px;
  }

  .backups{
    padding-left: 37%;
    padding-top: 9px;
  }

  .reward{
    padding-left: 5%;
    padding-top: 9px;
  }

  .active{
    color: red;
  }
</style>