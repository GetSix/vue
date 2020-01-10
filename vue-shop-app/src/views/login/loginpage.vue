<template>
  <van-overlay :show="show" @click="show=false">
    <div class="wrapper" @click.stop>
      <div class="block">
        <van-nav-bar title="登录页">
          <van-icon name="cross" slot="right" @click="goUser" />
        </van-nav-bar>
        <van-tabs v-model="active" animated>
          <van-tab style="padding:0 20px" :title="'登录'">
            <van-cell-group name="1">
              <van-field
                v-model="phone"
                required
                label="手机号"
                placeholder="请输入手机号"
                :error-message="errormessage1"
              ></van-field>
              <van-field
                v-model="password"
                required
                label="密码"
                placeholder="请输入密码"
                :error-message="errormessagepw"
              ></van-field>
              <van-field
                v-model="yanzheng"
                required
                label="短信验证码"
                placeholder="请输入短信验证码"
                :error-message="errormessage2"
              >
                <van-button slot="button" size="small" type="primary">
                  发送验证码
                  <van-count-down v-if="sendYZ" :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
                </van-button>
              </van-field>
            </van-cell-group>
            <van-button type="info" size="large" @click="login()">登录</van-button>
            <van-divider
              :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
            >其他登录方式</van-divider>
            <van-grid clickable :column-num="2">
              <van-grid-item icon="alipay" text="支付宝" to="/" />
              <van-grid-item icon="chat" text="微信" url="/vant/mobile.html" />
            </van-grid>
          </van-tab>

          <van-tab style="padding:0 20px;" :title="'注册'">
            <van-cell-group name="2">
              <van-field
                v-model="zcphone"
                required
                label="手机号"
                placeholder="请输入手机号"
                :error-message="errormessage3"
              />
              <van-field
                v-model="zcpassword"
                required
                label="密码"
                placeholder="请输入密码"
                :error-message="errormessage4"
              />
            </van-cell-group>
            <van-button type="info" size="large" @click="register()">注册</van-button>
            <p style="display:flex;">
              <van-checkbox v-model="checked" @click="checked=!checked" shape="square"></van-checkbox>同意
              <a href="#">用户协议</a>、
              <a href="#">隐私策略</a>
            </p>
          </van-tab>

          <!-- <van-tab class="zc" v-for="index in 2" :title="'选项 ' + index">注册 {{ index }}</van-tab> -->
        </van-tabs>
        <!-- <div class="selcart">
          <div class="dl">登录</div>
          <div class="zc">注册</div>
        </div>-->
      </div>
    </div>
  </van-overlay>
</template>
<script>
import axios from "axios";
export default {
  name: "loginpage",
  components: {},
  data() {
    return {
      active: "",
      show: true,
      zcphone: "",
      zcpassword: "",
      phone: "",
      user: "立即登录",
      password: "",
      errormessage1: "",
      errormessage2: "",
      errormessage3: "",
      errormessage4: "",
      errormessagepw: "",
      checked: true,
      sendYZ: false,
      yanzheng: ""
    };
  },
  methods: {
    islogined() {
      if (localStorage.getItem("username")) {
      }
    },
    goUser() {
      console.log(111);
      this.$router.push({ name: "user" });
    },
    register() {
      axios
        .post("http://api.cat-shop.penkuoer.com/api/v1/auth/reg", {
          userName: this.zcphone,
          password: this.zcpassword,
          nickName: "石宽宽",
          avatar:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1111759211,550942899&fm=26&gp=0.jpg"
        })
        .then(res => {
          console.log(res);
          if (res.data.code == "success") {
            this.active = 0;
            this.phone = this.zcphone;
            this.password = this.zcpassword;
            this.zcphone = "";
            this.zcpassword = "";
          } else {
            this.errormessage3 = "手机号已存在";
          }
        });
    },
    login() {
      axios
        .post("http://api.cat-shop.penkuoer.com/api/v1/auth/login", {
          userName: this.phone,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.code == "success") {
            this.$router.push({ name: "home" });
            console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
            this.logined();
          }
        });
    },
    logined() {
      console.log(localStorage.getItem("token"));
      axios
        .get("http://api.cat-shop.penkuoer.com/api/v1/users/info", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(resed => {
          console.log(111, resed);
        });
    }
  }
};
</script>
<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 330px;
  /* height: 400px; */
  overflow: hidden;
  padding-top: 20px;
  background-color: #fff;
  border-radius: 20px;
}
/* .selcart {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-right: 100px;
  padding-left: 100px;
  display: flex;
  justify-content: space-between;
} */
</style>