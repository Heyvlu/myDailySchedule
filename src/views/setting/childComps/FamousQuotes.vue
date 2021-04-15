<template>
  <div class="quotes">
    <div>{{oneQuote}}</div>
  </div>
</template>

<script>
export default {
  name:"FamousQuotes",
  data(){
    return{
      quotes:[' 天分高的人如果懒惰成性，亦即不自努力以发展他的才能，则其成就也不会很大，有时反会不如天分比他低些的人。--矛盾',
          '天才出于勤奋。--高尔基',
          '应当仔细地观察，为的是理解；应当努力地理解，为的是行动。--罗曼·罗兰',
          '人不光是靠他生来就拥有一切，而是靠他从学习中所得到的一切来造就自己。--歌德',
          '不读书的人，思想就会停止。--狄德罗',
          '人生的价值，并不是用时间，而是用深度去衡量的。--列夫·托尔斯泰'],
      oneQuote:'天分高的人如果懒惰成性，亦即不自努力以发展他的才能，则其成就也不会很大，有时反会不如天分比他低些的人。--矛盾'
    }
  },
  mounted(){
    setInterval(()=>{
      let order=Math.floor(Math.random()*6);
      this.oneQuote = this.quotes[order];
    },4000)
  }
}
</script>

<style scoped>
  .quotes{
    height: auto;
    width: 80%;
    position: fixed;
    top: 70%;
    right: 5%;
    text-indent: 2em;
  }
</style>