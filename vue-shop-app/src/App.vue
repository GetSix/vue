<template>
  <div id="app">
    <router-view />

    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/sort/tuijian" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/eat" icon="star-o">吃什么</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item :to="{name:'user'}" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

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
