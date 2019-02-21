<template>
  <footer class="footer-platform-left">
    <img class="img" :src="imgLogo" alt="">
  </footer>
</template>
<script>
import { ossPrefix } from './../config'
export default {
  data () {
    return {
      imgLogo: `${ossPrefix}platform/logo-he-plus.png`,
      imgLeague: `${ossPrefix}platform/logo-league.png`
    }
  }
}
</script>
<style scoped lang="scss">
  .footer-platform-left {
    display: block;
    position: absolute;
    bottom: 2vw;
    left: 2vw;
    .img {
      height: 10vw;
      width: auto;
    }
  }
</style>