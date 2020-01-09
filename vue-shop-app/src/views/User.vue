<template>
  <div class="user">
    <header>
      <p class="me">我的</p>
      <Login></Login>
    </header>
    <section>
      <div>111</div>
    </section>
  </div>
</template>
<script>
import Login from "../components/login/login";
export default {
  name: "user",
  components: {
    Login
  }
};

// ？？？？？
window.onload = function() {
  var html = document.querySelector("html");
  html.style.fontSize = (html.offsetWidth / 750) * 100 + "px";
  addEventListener(
    "resize",
    function() {
      html.style.fontSize = (html.offsetWidth / 750) * 100 + "px";
    },
    false
  );
};
</script>

<style scope>
.user {
  width: 100%;
  flex: 1;
  /* background: #3bba63; */
  display: flex;
  flex-direction: column;
}
.user header {
  width: 100%;
  height: 3rem;
  background: #3bba63;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user header .me {
  font-size: 0.5rem;
  color: aliceblue;
  line-height: 0;
}
section {
  background: red;
}
</style>