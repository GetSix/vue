<template>
  <div id="app">
    <router-view />

    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/sort/tuijian" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/eat" icon="star-o">吃什么</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o" :info="num">购物车</van-tabbar-item>
      <van-tabbar-item :to="{name:'user'}" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      num:0,
    }
  },
  created() {
   axios.get("http://192.168.16.29:3009/api/v1/shop_carts",{
     headers:{
       authorization: " Bearer " +localStorage.getItem("token")
     }
   })
    .then(res =>{
      console.log(res);
       console.log(res.data.length);
      this.num = res.data.length;
      // console.log(res.data.products.length);
    });
  },
 
}
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
