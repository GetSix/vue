<template>
  <div style="background:#f5f5f5; height:100%;">
    <van-nav-bar
      style="margin-bottom:10px;"
      title="个人中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="headimg">
      <div class="text">头像</div>
      <div class="img">
        <img :src="avatar" alt />
      </div>
    </div>
    <van-cell class="cellcon" title="昵称" is-link :value="nickName" />
    <van-cell class="cellcon" title="性别" is-link value="内容" />
    <van-cell class="cellcon" title="生日" :value="date" is-link @click="show = true" />
    <van-calendar v-model="show" is-link @confirm="onConfirm" />
    <van-cell class="cellcon" title="手机号" is-link :value="phone" />

    <van-button @click="logout" style="margin-top:10px;" type="default" size="large">退出登录</van-button>
  </div>
</template>
<script>
export default {
  name: "PIM",
  porps: {},
  data() {
    return {
      date: "",
      nickName: "",
      avatar: "",
      phone: "",
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "user" });
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "user" });
    },
    loadData() {
      this.nickName = localStorage.getItem("nickName");
      this.avatar = localStorage.getItem("avatar");
      this.phone = localStorage.getItem("phone");
    }
  }
};
</script>
<style scope>
.cellcon {
  text-align: left;
}
.headimg {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 17px;
}
.headimg img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>