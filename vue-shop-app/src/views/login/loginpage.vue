<template>
  <van-overlay class="box" :show="show" @click="show=false">
    <div class="wrapper" @click.stop>
      <div class="block">
        <img class="topimg" src="../../img/normal.0447fe9b (1).png" alt />
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
                <van-button slot="button" @click="sendYZM" size="small" type="primary">
                  <p class="sengyzm" v-if="!isSendYZ">发送验证码</p>
                  <p class="senddjs" v-else style="line-height:0; display:flex;">
                    <span>剩余</span>
                    <van-count-down class="djs" style="color:#ffffff" :time="60000" format="ss" />
                  </p>
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

          <!-- 注册 -->
          <van-tab style="padding:0 20px;" :title="'注册'">
            <van-cell-group name="2">
              <van-uploader :max-count="1" v-model="imgUrl" :after-read="loadImgEnd" />
              <van-field
                v-model="zcphone"
                required
                label="手机号"
                placeholder="请输入手机号"
                :error-message="errormessage3"
              />
              <van-field
                v-model="zcnickName"
                required
                label="昵称"
                placeholder="请输入昵称"
                :error-message="errormessageNC"
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
import Vue from "vue";
import { Toast } from "vant";
import { CountDown } from "vant";
import { Dialog } from "vant";

// 全局注册
Vue.use(Dialog);
Vue.use(CountDown);
Vue.use(Toast);
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
      zcnickName: "",
      phone: "",
      user: "立即登录",
      password: "",
      errormessage1: "",
      errormessage2: "",
      errormessage3: "",
      errormessage4: "",
      errormessagepw: "",
      errormessageNC: "",
      checked: true,
      sendYZ: false,
      yanzheng: "",
      isSendYZ: false,
      nickName: "",
      avatar: "",
      imgUrl: []
    };
  },
  methods: {
    sendYZM() {
      let random = Math.ceil(Math.random() * 100000 + 9999);
      this.isSendYZ = !this.isSendYZ;
      Dialog.confirm({
        message: "验证码" + random
      })
        .then(() => {
          this.yanzheng = random;
        })
        .catch(() => {
          this.isSendYZ = false;
        });
    },
    islogined() {
      if (localStorage.getItem("username")) {
      }
    },
    goUser() {
      console.log(111);
      this.$router.push({ name: "user" });
    },
    loadImgEnd(file) {
      console.log(file);
      const formData = new FormData();
      formData.append("file", file.file);
      axios
        .post(
          "http://api.cat-shop.penkuoer.com:3009/api/v1/common/file_upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data" // 设置请求头传递二进制文件
            }
          }
        )
        .then(res => {
          this.avatar = res.data.info;
          console.log(res);
        });
    },
    register() {
      let test = /^1[3456789]\d{9}$/;
      if (test.test(parseInt(this.zcphone))) {
        if (/^[\w]{6,12}$/.test(this.zcpassword)) {
          if (this.checked) {
            if (this.zcnickName != "") {
              axios
                .post("http://api.cat-shop.penkuoer.com/api/v1/auth/reg", {
                  userName: this.zcphone,
                  password: this.zcpassword,
                  nickName: this.zcnickName,
                  avatar: this.avatar
                  // "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124649906,4117816182&fm=26&gp=0.jpg"
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
            } else {
              this.errormessageNC = "昵称不能为空";
            }
          } else {
            Toast("请勾选用户协议");
          }
        } else {
          this.errormessage4 = "密码格式错误";
        }
      } else {
        this.errormessage3 = "手机号格式错误";
      }
    },
    login() {
      this.isSendYZ = false;
      if (this.yanzheng) {
        axios
          .post("http://api.cat-shop.penkuoer.com/api/v1/auth/login", {
            userName: this.phone,
            password: this.password
          })
          .then(res => {
            if (res.data.code == "success") {
              this.$router.push({ name: "home" });
              console.log(res.data.token);
              localStorage.setItem("token", res.data.token);
            } else if (res.data.code == "error") {
              console.log(res);
              if (res.data.message == "user not found") {
                this.errormessage1 = "手机号错误";
              } else {
                this.errormessagepw = "密码错误";
              }
              // if(res.data.){
              // }
            }
          });
      } else {
        this.errormessage2 = "请输入验证码";
      }
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
.box {
  background: url("../../img/back2.a864ff79.jpg");
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
.sengyzm {
  line-height: 0px;
}
.senddjs {
  display: flex;
  justify-content: center;
}
.djs {
  line-height: 0;
}
.block {
  position: relative;
  overflow: visible;
}
.topimg {
  width: 80px;
  position: absolute;
  top: -50px;
  left: 130px;
}
</style>