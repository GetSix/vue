<template class="orderHandle">
  <div class="orderHandlebox">
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" animated>
      <van-tab title="待支付" style="margin-bottom:70px;">
        <img v-if="this.$store.state.cartList.length == 0?true:false" style="width:100%; height:100%;" src="../../img/noData.1c06e1e1.jpeg" alt />
        <div class="order" v-if="this.$store.state.cartList.length == 0?false:true">
            <van-card v-for='(v,i) in obj' :key='i'
            :num="v.quantity"
            :price="v.product.price"
            :desc="v.product.descriptions"
            :title="v.product.name"
            :thumb="v.product.coverImg"
            >
            </van-card>
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
    <van-submit-bar
  :price="this.$store.state.price*100"
  button-text="立即支付"
  @submit="onSubmit"
></van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Tab, Tabs } from "vant";
import Axios from 'axios';

Vue.use(Tab).use(Tabs);
Vue.use(NavBar);
export default {
  name: "orderHandle",
  data() {
    return {
      active: 0,
      obj:'',
    };
  },
  created() {
    // console.log(111);
    this.skipHandle();
    this.showCart();
    console.log(this.$store.state.cartList);
    
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
    },
    showCart(){
      Axios.get('http://192.168.16.89:3009/api/v1/orders',{
        headers:{
           authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res =>{
        console.log(res);
        this.obj = this.$store.state.cartList; 
      })
    },
    onSubmit(){
    window.location.href="https://www.alipay.com/";
      this.$toast('支付成功');
    }



  }
};
</script>
<style scope>
/* .orderHandle {
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
} */
</style>