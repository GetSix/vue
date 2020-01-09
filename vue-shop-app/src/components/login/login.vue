<template>
  <div class="login">
    <div class="left">
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1111759211,550942899&fm=26&gp=0.jpg"
      />
      <p>立即登录</p>
    </div>
    <van-icon class="right" name="arrow"></van-icon>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {}
};
</script>

<style scope>
.login {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.left {
  flex: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
.left img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.left p {
  font-size: 0.4rem;
  color: red;
}
.right {
  flex: 5;
}
</style>