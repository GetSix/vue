<template>
  <router-link :to="{name:'PIM'}">
    <div class="login">
      <div class="left">
        <img :src="avatar" />
        <p>{{nickName}}</p>
      </div>
      <van-icon class="right" name="arrow"></van-icon>
    </div>
  </router-link>
</template>
<script>
import axios from "axios";
export default {
  name: "islogined",
  props: {},
  data() {
    return {
      nickName: "立即登录",
      avatar:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1111759211,550942899&fm=26&gp=0.jpg"
    };
  },
  created() {
    this.logined();
  },
  methods: {
    logined() {
      if (localStorage.getItem("token")) {
        axios
          .get("http://api.cat-shop.penkuoer.com/api/v1/users/info", {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          })
          .then(resed => {
            // console.log(resed);
            this.nickName = resed.data.nickName;
            this.avatar =
              "http://api.cat-shop.penkuoer.com" + resed.data.avatar;
            // console.log(resed.data.avatar);
            localStorage.setItem(
              "avatar",
              "http://api.cat-shop.penkuoer.com" + resed.data.avatar
            );
            localStorage.setItem("nickName", resed.data.nickName);
            localStorage.setItem("phone", resed.data.userName);
          });
      } else {
        this.$router.push({ name: "loginpage" });
        this.nickName = "立即登录";
        this.avatar =
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1111759211,550942899&fm=26&gp=0.jpg";
      }
    }
  }
};
</script>
<style scope>
.login {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left {
  flex: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
.left img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: 10px;
}
.left p {
  font-size: 15px;
  color: #ffffff;
}
.right {
  flex: 5;
  text-align: right;
  margin-right: 20px;
  font-size: 15px;
  color: #cccccc;
}
</style>