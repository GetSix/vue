<template>
  <div class="box">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
export default {
  name: "addressEdit",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "address"
      });
    },
    onClickRight() {
      Toast("按钮");
    },
    showAddress() {
      // axios.get
    }
  }
};
</script>