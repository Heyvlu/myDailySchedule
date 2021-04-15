<template>
  <div class="home">
    <home-title/>
    <home-body/>
  </div>
</template>

<script>
import HomeTitle from './childComps/HomeTitle.vue'
import HomeBody from './childComps/HomeBody.vue'

export default {
  name: 'Home',
  components: {
    HomeTitle,
    HomeBody
  }
}
</script>

<style scoped>
  .home{
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding-top: 30px;
    /* padding-left: 3px; */
    padding-bottom: 35px;
    background: rgb(250, 248, 223);
  }

</style>
