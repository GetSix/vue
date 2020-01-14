<template>
    <div class="goods">
        <van-nav-bar title="填写定单" left-text="返回" left-arrow @click-left="onClickLeft"/>
        <!-- 收货地址 -->
        <van-contact-card @click='toAddress()'></van-contact-card>



</div>
</template>
<script>
export default {
   data() {
    return {
      
    };
  },

  methods: {
        //返回点击事件
    onClickLeft() {
      this.$router.push({name:'cart'});
    },
    toAddress(){
      this.$router.push({name:'address'});
    }
  },


}

</script>
