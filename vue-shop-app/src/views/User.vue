<template>
  <div class="user">
    <van-sticky>
      <header>
        <p class="me">我的</p>
        <islogined v-if="islogin"></islogined>
        <Login v-else></Login>
        <router-view></router-view>
      </header>
    </van-sticky>

    <section>
      <div class="orderform">
        <router-link :to="{name:'orderHandle'}">
          <div class="myorder">
            <van-icon class="ordericon" name="label" color="#3bba63"></van-icon>
            <p>我的订单</p>
          </div>
        </router-link>
        <div class="allorder">
          <p>查看全部订单</p>
          <van-icon class="allordericon" name="arrow"></van-icon>
        </div>
      </div>

      <div class="funicon">
        <router-link :to="{name:'orderHandle',query:{index:0}}">
          <div class="pay">
            <van-icon class="payicon" name="cart-circle-o"></van-icon>
            <p>待支付</p>
          </div>
        </router-link>
        <router-link :to="{name:'orderHandle',query:{index:1}}">
          <div class="pay">
            <van-icon class="payicon" name="point-gift-o"></van-icon>
            <p>代收货</p>
          </div>
        </router-link>
        <router-link :to="{name:'orderHandle',query:{index:2}}">
          <div class="pay">
            <van-icon class="payicon" name="smile-comment-o"></van-icon>
            <p>待评价</p>
          </div>
        </router-link>
        <router-link :to="{name:'orderHandle',query:{index:3}}">
          <div class="pay">
            <van-icon class="payicon" name="cash-back-record"></van-icon>
            <p>售后/退款</p>
          </div>
        </router-link>
      </div>

      <div class="orderform coupons">
        <router-link :to="{name:'discount'}">
          <div class="myorder">
            <van-icon class="ordericon" name="gold-coin" color="#3bba63"></van-icon>
            <p>我的优惠券</p>
          </div>
        </router-link>
        <div class="allorder">
          <p>2</p>
          <van-icon class="allordericon" name="arrow"></van-icon>
        </div>
      </div>
      <div class="orderform">
        <router-link :to="{name:'address'}">
          <div class="myorder">
            <van-icon class="ordericon" name="todo-list" color="#3bba63"></van-icon>
            <p>我的收货地址</p>
          </div>
        </router-link>

        <div class="allorder">
          <van-icon class="allordericon" name="arrow"></van-icon>
        </div>
      </div>
      <router-link :to="{name:'greencart'}">
        <div class="orderform greencart">
          <div class="myorder">
            <van-icon class="ordericon" name="gold-coin" color="#3bba63"></van-icon>
            <p>我的绿卡</p>
            <div>NEW</div>
          </div>
          <div class="allorder">
            <p>2</p>
            <van-icon class="allordericon" name="arrow"></van-icon>
          </div>
        </div>
      </router-link>
      <div class="orderform coupons">
        <div class="myorder">
          <van-icon class="ordericon" name="phone" color="#3bba63"></van-icon>
          <p>联系客服</p>
        </div>
        <div class="allorder">
          <p>客服时间 07:00-22:00</p>
          <van-icon class="allordericon" name="arrow"></van-icon>
        </div>
      </div>
      <div class="orderform coupons">
        <div class="myorder">
          <van-icon class="ordericon" name="comment-circle" color="#3bba63"></van-icon>
          <p>意见反馈</p>
        </div>
        <div class="allorder">
          <van-icon class="allordericon" name="arrow"></van-icon>
        </div>
      </div>
      <div class="orderform coupons">
        <div class="myorder">
          <van-icon class="ordericon" name="underway" color="#3bba63"></van-icon>
          <p>语言切换</p>
        </div>
        <div class="allorder">
          <van-icon class="allordericon" name="arrow"></van-icon>
        </div>
      </div>
      <p style="font-size:12px;">当前版本1.3.0</p>
    </section>
  </div>
</template>
<script>
import Login from "../components/login/login";
import islogined from "../components/login/islogined";
export default {
  path: "/User",
  name: "user",
  components: {
    Login,
    islogined
  },
  data() {
    return {
      islogin: false
    };
  },
  created() {
    this.isLogin();
  },
  methods: {
    isLogin() {
      if (localStorage.getItem("token")) {
        this.islogin = true;
      } else {
        this.islogin = false;
        // this.$router.push({
        //   name: "loginpage"
        // });
      }
    }
  }
};

// ？？？？？
// window.onload = function() {
//   var html = document.querySelector("html");
//   html.style.fontSize = (html.offsetWidth / 750) * 100 + "px";
//   addEventListener(
//     "resize",
//     function() {
//       html.style.fontSize = (html.offsetWidth / 750) * 100 + "px";
//     },
//     false
//   );
// };
</script>

<style scoped>
a {
  color: #000000;
}
.user {
  width: 100%;
  background: #3bba63;
  display: flex;
  flex-direction: column;
  /* overflow-x: auto; */
}
.user header {
  width: 100%;
  height: 150px;
  background: #3bba63;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user header .me {
  font-size: 20px;
  color: aliceblue;
  line-height: 0;
}
.user section {
  background: #dfdfdf;
  flex: 1;
  /* height: 4rem; */
  overflow-x: auto;
  padding-bottom: 50px;
}
.user section .orderform {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
}
.user section .orderform .myorder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user section .orderform .myorder p {
  font-size: 15px;
}
.user section .orderform .myorder .ordericon {
  font-size: 30px;
  margin-left: 15px;
}
.user section .orderform .allorder {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.user section .orderform .allorder .allordericon {
  color: #cccccc;
  font-size: 15px;
  margin-right: 20px;
  margin-left: 5px;
}
.user section .orderform .allorder p {
  color: #cccccc;
  font-size: 15px;
}
.funicon {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
  margin-bottom: 10px;
}
.funicon .pay {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.funicon .pay p {
  font-size: 15px;
  line-height: 0;
}
.funicon .pay .payicon {
  font-size: 40px;
}
.user section .coupons {
  margin-top: 10px;
  border: 0;
  margin: 0;
  /* margin-top: 0.2rem; */
}
.user section .greencart {
  margin-top: 10px;
  margin-bottom: 10px;
}
.user section .greencart .myorder div {
  color: #ffffff;
  background: red;
  font-size: 15px;
  border-radius: 10px;
  padding: 5px;
}
.par-type ::-webkit-scrollbar {
  display: none;
}
</style>