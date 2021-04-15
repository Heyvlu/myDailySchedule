<template>
  <div class="body">
    <div class="header">
      <div><label for="head">请写下新的任务计划:</label></div>
      <input type="text" id="head" placeholder="新的任务计划" ref="headInput" @blur="blur" @input="change">
    </div>
    <div class="text">正在进行：</div>
    <div>
      <div v-for="(item,index) in this.$store.state.list" :key="index" class="middle" 
            :id="'ccc'+index" v-show="!item.success">
        <finish @click.native="finishClick(index)" class="finishStyle"/>
        <div :id="'aaa'+index" class="value">{{item.value}}</div>
        <delete @click.native="deleteItemOne(index)" class="deleteStyle"/>
      </div>
    </div>
    <div class="text">已完成：</div>
    <div class="footer">
      <div v-for="(item,index) in this.$store.state.list" :id="'ddd'+index"
       :key="index" class="item" v-show="item.success">
        <finish :message="message" @click.native="revokeClick(index)" class="finishStyle"/>
        <div :id="'bbb'+index" class="value">{{item.value}}</div>
        <delete @click.native="deleteItemTwo(index)" class="deleteStyle"/>
      </div>
    </div>
  </div>
</template>

<script>
import Delete from 'components/common/Delete'
import Finish from 'components/common/Finish'

export default {
  name:"HomeBody",
  components:{
    Delete,
    Finish
  },
  data(){
    return {
      listItem:'',
      message:"撤销",
      flag:0
    }
  },
  methods:{
    change(){
      this.listItem=this.$refs.headInput.value;
      if(this.flag == 0){
        this.$store.commit("submitClick",this.listItem);
      }else{
        this.$store.commit("change",this.listItem);
      }
      this.flag+=1;
    },
    blur(){
      this.flag=0;
      this.$refs.headInput.value='';
    },
    divTouch(){
       for(let i=0;i<this.$store.state.list.length;i++){
          //获取到节点 
        var touch = document.getElementById('aaa'+i);
        // console.log(touch);
        //定义变量 
        var startIndex, endIndex, touchIndex, tranX, tranBack,startY,touchY,tranY;
        //touchstart事件
        touch.addEventListener('touchstart', (event)=> {
            // event.preventDefault();
            // console.log('start' + event.changedTouches[0].pageX);
            startIndex = event.changedTouches[0].pageX;//获取到刚开始的X轴上的值
            startY=event.changedTouches[0].pageY;
        });
        //touchmove事件
        touch.addEventListener('touchmove', (event)=> {
            touchIndex = event.changedTouches[0].pageX; //获取到移动时不断改变的X轴上的值
            touchY=event.changedTouches[0].pageY;
            tranY = touchY - startY;
            tranX = touchIndex - startIndex;//移动过程中X轴上的差值
            if(Math.abs(tranX) > Math.abs(tranY)){
              event.preventDefault();
            }
            // console.log(tranX);
            // 在一定区域里面移动，这里限制在一定区域内移动，图标不超过规定的区域
            if (tranX > 50) {
                tranX = 50;
            } else if (tranX < -50) {
                tranX = -50;
            }
            //移动元素
            document.getElementById('ccc'+i).style.transform=`translate3d(${tranX}px,0,0)`;
            
        });
        //touchend事件 
        touch.addEventListener('touchend', (event)=> {
            // event.preventDefault();
            //获取最终触摸的X轴（手指离开屏幕时获取的）    
            endIndex = event.changedTouches[0].pageX;
            tranBack = endIndex - startIndex;
            // console.log(tranBack);
          if(Math.abs(tranBack)<30){
            document.getElementById('ccc'+i).style.transform=`translate3d(0,0,0)`;
          }
        });
      }
    },
    finishClick(index){
      this.$store.commit("finishClick",index);
      document.getElementById('ddd'+index).style.transform=`translateX(0)`;
    },
    revokeClick(index){
      this.$store.commit("revokeClick",index);
      document.getElementById('ccc'+index).style.transform=`translateX(0)`;
    },
    deleteItemOne(index){
      this.$store.commit("deleteItem",index);
      document.getElementById('ccc'+index).style.transform=`translateX(0)`;
    },
    deleteItemTwo(index){
      this.$store.commit("deleteItem",index);
      document.getElementById('ddd'+index).style.transform=`translateX(0)`;
    },
    divTouchBottom(){
       for(let i=0;i<this.$store.state.list.length;i++){
          //获取到节点 
        var touch = document.getElementById('bbb'+i);
        // console.log(touch);
        //定义变量 
        var startIndex, endIndex, touchIndex, tranX, tranBack,startY,touchY,tranY;
        //touchstart事件
        touch.addEventListener('touchstart', (event)=> {
            // event.preventDefault();
            // console.log('start' + event.changedTouches[0].pageX);
            startIndex = event.changedTouches[0].pageX;//获取到刚开始的X轴上的值
            startY=event.changedTouches[0].pageY;
        });
        //touchmove事件
        touch.addEventListener('touchmove', (event)=> {
            touchIndex = event.changedTouches[0].pageX; //获取到移动时不断改变的X轴上的值
            touchY=event.changedTouches[0].pageY;
            tranY = touchY - startY;
            tranX = touchIndex - startIndex;//移动过程中X轴上的差值
            if(Math.abs(tranX) > Math.abs(tranY)){
              event.preventDefault();
            }
            // console.log(tranX);
            // 在一定区域里面移动，这里限制在一定区域内移动，图标不超过规定的区域
            if (tranX > 50) {
                tranX = 50;
            } else if (tranX < -50) {
                tranX = -50;
            }
            //移动元素
            document.getElementById('ddd'+i).style.transform=`translate3d(${tranX}px,0,0)`;
            
        });
        //touchend事件 
        touch.addEventListener('touchend', (event)=> {
            // event.preventDefault();
            //获取最终触摸的X轴（手指离开屏幕时获取的）    
            endIndex = event.changedTouches[0].pageX;
            tranBack = endIndex - startIndex;
            // console.log(tranBack);
          if(Math.abs(tranBack)<30){
            document.getElementById('ddd'+i).style.transform=`translate3d(0,0,0)`;
          }
        });
      }
    },
  },
  mounted(){
    this.divTouch();
    this.divTouchBottom();
  },
  updated(){
    this.divTouch();
    this.divTouchBottom();
  }
}
</script>

<style scoped>
  .body{
    padding-top: 70px;
    height: 100%;
    text-align: center;
    overflow: hidden;
  }

  .header > div > label{
    font-size: 18px;
  }

  .header > input{
    width: 78%;
    background: rgb(250, 248, 223);
    outline: none;
    border: none;
    box-shadow: 0 1px rgb(206, 39, 39);
    font-size: 15px;
  }

  .submitPosition{
    /* float: right; */
    padding-top: 4px;
    transform: translateX(-65px);
  }

  .text{
    padding-top: 30px;
    height: 30px;
    margin-bottom: 5px;
    font-weight: 680;
  }

  .middle{
    background: rgb(250, 162, 243);
    width: 90%;
    margin: 0 5% 9px 5%;
    border-radius: 5px;
    box-shadow: 0 3px rgba(110, 110, 110, 0.1);
    display: flex;
    min-height: 40px;
    text-align: left;
    align-items: center;
  }

  .middle > div{
    padding: 4px 3px;
  }

  .value{
    min-width: 90%;
  }

  .item{
    background: rgb(167, 248, 167);
    width: 90%;
    margin: 0 5% 9px 5%;
    border-radius: 5px;
    box-shadow: 0 3px rgba(156, 155, 155, .2);
    display: flex;
    text-align: left;
    align-items: center;
    min-height: 40px;
  }

  .item > div{
    padding: 4px 3px;
  }
</style>