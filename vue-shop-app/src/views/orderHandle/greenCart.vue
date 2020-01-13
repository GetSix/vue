<template>
  <div class="greencart">
    <h1>绿卡</h1>
    <button @click="back">返回</button>
  </div>
</template>
<script>
export default {
  name: "greencart",
  methods: {
    back() {
      this.$router.push({ name: "user" });
    }
  }
};
</script>