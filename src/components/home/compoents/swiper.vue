<template>
  <div class="swiper">
    <mt-swipe :auto="4000" class="my_swiper">
        <mt-swipe-item>
          <img class="img" src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5faa00f98b35e5dd8421ad8d17afcc8a/5bafa40f4bfbfbedbb0cd6d476f0f736aec31fc7.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4126691748,1758161833&fm=26&gp=0.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1108492928,178943807&fm=26&gp=0.jpg" alt="">
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'homeSwiper',
  data () {
    return {

    }
  },
  components:{
      "mtSwipe":Swipe,
      "mtSwipeItem":SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my_swiper{
    height: 150px;
}
.img{
  width: 100%;
}
</style>
