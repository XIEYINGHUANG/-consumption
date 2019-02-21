<template>
  <footer class="footer-platform-right">
    <img class="img" :src="imgLeague" alt="">
  </footer>
</template>
<script>
import { ossPrefix } from './../config'
export default {
  data () {
    return {
      imgLeague: `${ossPrefix}platform/logo-league.png`
    }
  }
}
</script>
<style scoped lang="scss">
  .footer-platform-right {
    display: block;
    position: absolute;
    bottom: 2vw;
    right: 2vw;
    .img {
      height: 10vw;
      width: auto;
    }
  }
</style>