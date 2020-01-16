<template class="orderHandle">
  <div class="orderHandlebox">
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" animated>
      <van-tab title="待支付">
        <img style="width:100%; height:100%;" src="../../img/noData.1c06e1e1.jpeg" alt />
        <div class="order">
            
        </div>
      </van-tab>
      <van-tab title="待收货">
        <img style="width:100%; height:100%;" src="../../img/noData.1c06e1e1.jpeg" alt />
      </van-tab>
      <van-tab title="待评价">
        <img style="width:100%; height:100%;" src="../../img/noData.1c06e1e1.jpeg" alt />
      </van-tab>
      <van-tab title="售后/退款">
        <img style="width:100%; height:100%;" src="../../img/noData.1c06e1e1.jpeg" alt />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
Vue.use(NavBar);
export default {
  name: "orderHandle",
  data() {
    return {
      active: 0
    };
  },
  created() {
    // console.log(111);
    this.skipHandle();
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "user"
      });
    },
    skipHandle() {
      // console.log(this.$route.query.index);
      this.active = this.$route.query.index;
    }
  }
};
</script>
<style scope>
.orderHandle {
  width: 100%;
  height: 100%;
  background: #faf7f7;
  display: flex;
  overflow: hidden;
}
.orderHandlebox {
  width: 100%;
  height: 700px;
  flex: 1;
  overflow: hidden;
  background: #faf7f7;
}
</style>