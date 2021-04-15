import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  list:[{value:"嗨，小可爱！向左滑动可以点击删除计划，向右滑动可以点击完成计划哦",success:false},{value:"相信自己，你是最棒的！",success:true}]
}

export default new Vuex.Store({
  state,
  mutations: {
    submitClick(state,payload){
      let obj={};
      obj.value=payload;
      obj.success=false;
      this.state.list.push(obj);
    },
    change(state,payload){
      this.state.list[this.state.list.length-1].value=payload;
      if(payload == ''){
        this.state.list.splice(this.state.list.length-1,1);
      }
    },
    finishClick(state,index){
      this.state.list[index].success=true;
    },
    revokeClick(state,index){
      this.state.list[index].success=false;
    },
    deleteItem(state,index){
      this.state.list.splice(index,1);
    }
  },
  actions: {
  },
  modules: {
  }
})
