<template>
  <div class="coupon-card" @click="toCouponBoard">
    <div class="inner">
      <div class="pad-to-coupons">
        <span class="text" v-text="text"></span>
        <img src="@/assets/img-go.png" class="btn-go" />
      </div>
      <div class="pad-right">
        <img :src="img" alt="">
      </div>
    </div>
    <div class="diable-mask" v-if="!isActive">
      敬请期待 !
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    img: {
      type: String
    },
    text: {
      type: String
    },
    link: {
      type: String
    }
  },
  methods: {
    toCouponBoard () {
      if (this.isActive) {
        this.$router.push(this.link)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.coupon-card {
  width: 86vw;
  box-sizing: border-box;
  height: 100px;
  position: relative;
  margin: 0 auto 3vw;
  border-radius: 10px;
  background:linear-gradient(-45deg,rgba(139,44,98,1),rgba(205,57,133,1));
  padding: 5px;
  .inner {
    display: block;
    height: 100%;
    width: 100%;
    border: 1px solid #FB6DB9;
    border-radius: 8px;
  }
  .pad-to-coupons {
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    .btn-go {
      height: 4.2vw;
      width: auto;
      margin-top: 1vw;
    }
  }
  .pad-right {
    width: 50%;
    height: 100%;
    float: right;
    img {
      height: 100%;
      width: auto;
    }
  }
  .diable-mask {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: rgba(255,255,255,.7);
    justify-content: center;
    align-items: center;
    color: #4F012B;
    border-radius: 10px;
  }
}
</style>
