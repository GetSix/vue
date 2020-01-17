<template>
  <div id="app">
    <router-view />

    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/sort/tuijian" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/eat" icon="star-o">吃什么</van-tabbar-item>
      <van-tabbar-item
        to="/cart"
        icon="cart-o"
        :info="this.$store.state.num == 0 ?'':this.$store.state.num  "
      >购物车</van-tabbar-item>
      <van-tabbar-item :to="{name:'user'}" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.num = store.num;
    axios
      .get("http://192.168.16.89:3009/api/v1/shop_carts", {
        headers: {
          authorization: " Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.list = [...res.data];
        console.log(this.list);
        console.log(res.data.length);
        this.num = res.data.length;
        // console.log(res.data.products.length);
      });
  },

  created() {
    var store = require("store");

    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("storedata")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("storedata"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
    // 兼容iphone手机
    window.addEventListener("pagehide", () => {
      sessionStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
