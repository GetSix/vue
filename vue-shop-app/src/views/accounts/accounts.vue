<template>
    <div class="goods">
        <van-nav-bar title="填写定单" left-text="返回" left-arrow @click-left="onClickLeft"/>
        <!-- 收货地址 -->
        <van-contact-card
        :name="name"
        :tel="tel"
         @click='toAddress()'></van-contact-card>
        <!-- 发货时间 -->
       <div class="van-cell">
        <p class="top"><span style="float:left; margin-bottom:2px;">送达时间</span><br><br>
        <span style="color:#999;">超过十分钟可获得积分补偿</span>
        </p>
        <p></p>
        <p class="bottom" @click="show = true"><span class="time">请选择送达时间</span><van-icon name="arrow" /></p>
       </div>
       <van-popup v-model="show" position='bottom' :style="{ height: '80%' }">
      </van-popup>
</div>
</template>
<script>

export default {
   data() {
    return {
       date: '',
      show:false,
      name:'',
      tel:'',
      
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
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }

}

</script>
<style  scoped>
.van-cell {
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 30px;
    background-color: #fff;
}
.top{
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 14px;
}
.bottom{
float: right;
margin-left: 90px;
}
.time{
  margin-right: 10px;
  color:#999;
}
</style>