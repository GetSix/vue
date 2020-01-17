<template>
  <div class="home">
    <div class="head" >
      <van-sticky >
        <van-row type="flex" justify="space-around" :style="showBgColor?'background-color: white;':''">
          <!-- 获取地址 -->
            <span class="adress" @click="toMap"><van-icon style="margin:0 5px;" name="location-o" />{{location}}</span>
          
          <van-col >
            <van-search  background='none' shape="round" placeholder="请输入商品名称" v-model="value" />
          </van-col>
        </van-row>
      </van-sticky>
      <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px; margin-top:3px;">
          <van-swipe-item>
            <img src="https://img.ddimg.mobi/0ec4a32cbd84b1575892960355.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://img.ddimg.mobi/d3d83d40395221575808767181.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://img.ddimg.mobi/b7efb94de888d1575820057576.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://img.ddimg.mobi/eb669d9799b8f1575907727553.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      </div>

      <van-row type="flex" justify="center">
        <van-col span="9">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACp0lEQVRYR+1VTU7bYBSc5yRSWDU3AE7QsKlkNg0SWRdO0JBwADhB4QSFfeOaE0DXjlSzIVI3JCdojpCuGsk/Uz0bF8eJbSLa0kW8i/K99803b2ae4IU/eeH7sQawZuD/YqB132lUZ5VrAVqruoOA69eDQ3fHnq5SO8fA/rB7JpAPAMcAVmnUAOQ1wfOBaZ09GwAhewPzk/vURvvD45aAXwHaIO1snbP7+TavV4aB4xYQtnyEtmvak9UB5FQQI28j2Fs2HmkNO1tVGO/zLhuY1nkZkEcGFk5ekWiI4F3eeKSgOOrmmP1Sp6RGcKtijEUsb3WUft0fVWeVCUj6G+F2lgWJlV9t5jNQroUEQPLK32ImRhRMQTZFpAH9Dbq+hJfJiEtfV0a//p8F0P7WaTKoKBOvltWTnCZsRAAe7bf0+K1jWoW5kAVQBDq5i+TpYNe6+OcAlB0ElXsAV47Z78yNQB1Ro2x6GxynxaJFXg2TvJQrYkB7KiNpW7eHPQKMmF2ahEkQtYfdDomPkYCij7ZXD0+zQJYBiF9qXAMSAVABohocOW/s0f5dbyKCTXVYLgCSDUNwTeAHCE3FphapzQZmfy895yyAyFk/je8KnMQXPRtlwYP4ajPjRm3qIdjO2wU2KE0ImqgEO4pam7SHXTf2N+fyXoAtQDoKDqCrtSI4SISWFjqJGwgamhXKdA6Ax/elg6jYLYvaT++UxcDj2KuH8xqIY7n6MDOeKG0AjxzTspXW2sy415mGxKGIFGxLbRxtVdsxraOIgbveTRLJgOFqQqqWcoNoPkw4SYnp0tntn5QFVHvYHUUrmoyAxkLm2DGtudQtTMIIhF85e2BiTMLW8Ci7XP+PGatcEDgAMRWB69WDk4Vd8JRmf/PMH9kFzwG4BrBm4MUZ+AXCIKXldoPblAAAAABJRU5ErkJggg=="
            alt
          />
          <span style="font-size:12px;">最快29分钟送达</span>
        </van-col>
        <van-col span="7">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADrElEQVRYR8VXzW7aQBD+xiZSKlVq3qCJ1HvhUsVcQlU4hz5BCfReeILQJyi510CeoMnZVKEXkHoJuVcqeYNEqpRK2J5q139re02gl+zJ0s7OfDPzzY8JT3zoie1jKwDvZp0mgY8IVAOhnALPWIB4wcQXk8PR5aaObQSgMW+3AJwCtL+JYma+c8mvTK3x8jH5tQAaP1tluOYo6y0zbol4ycBUGCCgBmAPoNeJQT5xrOH4vwGE4R4R0Z5QwsA9wAMX/rjIs9q8tV9ioynkJ9Xh4DHjIfi8WH3+sUbgK+XmfLXrdaeV8d0mSlUZoQvgUwKf6yKSS4EIO7vGVew5c29Tb3TgGvP2FKAjeWd6FefNeKHK5QEoDzhjvD5rd8kgdg7tM50x3b1IpUH4Fsjz0rGGB4UAArbTSIoyLidVW+ZTHElIz7wOFY0da3iiKmrMO4JwHwK+0NuJ9VUSVL6ddQYgfAru+PPEGvaju1QE6rPOkggvBeFceGWVbLXr1l7pr7kk4EUWRNo47t1db1/lS/ptOgoxgJSHjDOnanezYZb88MypCgIgoSP0HPdkerVsnoWe+rzdJ9Cp+PYZ779X7QvxnQBQwqQji5qKNIgwHig2LiREie7A/B1QIXEwARCST4R/Ytmy9tUjwrjzEDQaH/4rQmkA8p5LH9j4w3C7Boxf4n71jG90JRulGIyFU7Ur6QjM24ugk/EPxxqKzpY6jfg+8phT95QaK3m2SzIqFeZYtnReiUAn1KgHEKMPzQrh6LH6LSPMuJ1U7dzcUKthawABk0vxBPTZL5tEX4RBj7lnkBE3GHfXXehSoFaLBkDUsfQRyKZEbdfZus/KxgRen4KkZUboVEVqGQVEXpcCHkyqw14edOcuKOHEyZgDso2GIVXrNFJSn0eP47Ir5ICQyDpR1Gf0jQg4dyxbLCHxCXo6q81Jmf98AyCelD7TIGo0cfgL+kyqFatlsoJ3sG6j2YYDahPKVkh6Fqh7gNIsdKTaBkB91rkgwnGYvNSmtHYcA5ybehGYVGvVzHlt6DVNLgdA1vuDuRBTMURcCEISSxAus2QkxE0GkGjxukGlXUqzU08sn2R6vSJD2RTJ3RDmKFxWg+uCKBVuxfnRK6t/vG7vDyvlGKC4goJllprqgqICXruWh+kYJwRSnjIWTEnppbyNxfjHatdvrltmN/oxCRjv9+PlsqjXKoYZRr/I640joM0tG00iyF2RQZKEBJaDiBkXVPKnm3IlePvE58kB/AMzNRo/Tu+74QAAAABJRU5ErkJggg=="
            alt
          />
          <span style="font-size:12px;">0元配送费</span>
        </van-col>
        <van-col span="6">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACuklEQVRYR+1XQW7aUBB9zyYSWTU9QblBYFMJNnVVWDc9QQjuvuQEyQ1K9oWQE5S9qUI2WOqmcIJyg5BVIoE91ffHaWI+2BQpkar8DZIZ/3nzZubNmHjmw2f2j40A1H7Wi2Fg71OkCLII9asOOQJkIODEsoOx97Y7yhqYEYDzq763c8t9IR0CBQiLILSzrEcwAmUUgQvD0WxXxoNSd5p8fQlAzW8MAL4z+5GxCCfRxbAGc8wnyi6HXAEIHQWUlALAfdP7Iuj1K+1PD/8zAHBFG8gVhFEUAmvSL38bZA1e2VX9zw4kLBIsgOLEoLxy+5HPlQCShps4N9nWfB3YC4AXBv5/Bj4M3QNCzgU8+lFp9+KOeJIuqA3dFogvkYqIHPcrndaTAFDSnbuzvxNwTM7Vs60YiGklceyVO92HQqMGlMytS5J7AtzQDhzTMNoKQM1v1AGeL6Jr9SudYx3V3+eAjGf50DENnK0ZWHIWTzqwrscGzrxKu7lOrrdi4L6QIrrtHok32i9uCGkm05IEEo33O/s60yyo+u6UwKtZPnhtolNfZqn22oMd1rMsH2oyEnKp0uSVO4/2iqVpWB26KsKPgBylRZZ1Qlb9xinBEwAXXrmt07Y4poVEF5xg5FXapaxOVtlFLXpr/dZdwvfJvcK4klWH7kTlOSkm/wKm5ruqbQ9N9Kv7zADuc6YKbRl1ViDVYaNJ8mtkbwclU72s3IoTPb5xPTyU5XX1tHYtfyxA6M13g6NVQhOz4vj1Qg72eSzLacWc+l0QyTDRVa0pIlMQrXk+PEsCWRTbCclIkJRGADxIW2ZTAajLoqjEbun2jCbdlERPYF3oQgoPEauipuJilg+aaWytLMJVRaYFJTxd891wJbBO06JeqwNZKlwxsiN2U4CDRRS9GYPWoNyNPlQ2OZlSsMmFm9o+O4A/MHydMIPpgfEAAAAASUVORK5CYII="
            alt
          />
          <span style="font-size:12px;">安心退</span>
        </van-col>
      </van-row>
    </div>
    <div class="banner">
      <img src="http://518taole.7-orange.cn/homead2.gif" alt />
    </div>

    <van-grid square :column-num="5">
      <van-grid-item
        :to="{name:'sort',query:{index:index}}"
        v-for="(value,index) in list"
        :key="index"
      >
        <img :src="value.coverImg" alt />
        <p>{{ value.name }}</p>
      </van-grid-item>
    </van-grid>

    <div class="member-warp">
      <div class="member">
        <span class="left" style="float:left;">加入会员·每年预计节省806元</span>
        <span class="right" style="float:right;">5折开卡></span>
      </div>
    </div>
    <div style="height:30px;">
      <div class="title">限时抢购</div>
      <van-count-down :time="3000000000">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div class="more">更多</div>
    </div>

    <div class="nav-warp">
      <div class="nav">
        <ul style="width:1400px; height:192px; margin-left:8px;">
          <li
            v-for="item in cart"
            :key="item._id"
            v-show="item.productCategory.name == '晚餐'"
            @click="todetail(item._id)"
          >
            <img :src="item.coverImg" alt />
            <p class="tit">{{item.name}}</p>
            <p class="price">¥{{item.price}}</p>
            <van-icon color="#3bba63" size="30" name="cart-circle-o" />
            <p class="price2">¥{{item.price}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="titleWrapper" style="margin-top: 20px; margin-bottom:10px;">
      <div class="title">特色专区</div>
    </div>
    <div class="wrapperItem">
      <div class="newItem">
        <span class="itemTitle">新品尝鲜</span>
        <p class="itemSubTitle">不时不食，又闻菱角香~~</p>
        <img
          class="itemImg"
          src="http://img.ddimg.mobi/product/1ff533e6f0fe91548468615264.jpg?imageView2/3/w/750/format/q/90"
          alt
        />
        <img
          class="itemImg"
          src="http://ddimg.ddxq.mobi/d3421059fd5ef1541779787379.jpg?imageView2/3/w/305/format/q/90"
          alt
        />
      </div>
      <div class="hotItem">
        <span class="itemTitle">十二月爆款</span>
        <p class="itemSubTitle">世界之大不过一盘番茄炒蛋</p>
        <img
          class="itemImg"
          src="https://ddimg.ddxq.mobi/be51d2b7e7cfb1541779541044.jpg?imageMogr2/thumbnail/200x200"
          alt
        />
        <img
          class="itemImg"
          src="https://ddimg.ddxq.mobi/d9570a42c1a2f1541779412213.jpg?imageMogr2/thumbnail/200x200"
          alt
        />
      </div>
      <div class="vipItem">
        <span class="itemTitle">VIP 专享</span>
        <p class="itemSubTitle">阳光玫瑰 VIP只要12.9</p>
        <img
          class="itemImg"
          src="http://img.ddimg.mobi/product/98a74efe088f81565858857802.jpg?imageView2/3/w/305/format/q/90"
          alt
        />
        <img
          class="itemImg"
          src="http://img.ddimg.mobi/product/6a422523dbab1564042389882.jpg?imageView2/3/w/305/format/q/90"
          alt
        />
      </div>
      <div class="otherItem">
        <span class="itemTitle">吃什么</span>
        <p class="itemSubTitle">童年落花生</p>
        <img class="itemImg" src="http://192.168.16.89:8081/img/peanut.7c7a8e68.jpeg" alt />
      </div>
      <div class="lowPrice">
        <span class="itemTitle">平价菜场</span>
        <p class="itemSubTitle">豆芽0.99</p>
        <img
          class="itemImg"
          src="http://ddimg.ddxq.mobi/1fac18844ddea1539673001469.jpg?imageView2/3/w/750/format/q/90"
          alt
        />
      </div>
    </div>

    <van-tabs class="all" :offset-top="50" sticky>
      <van-tab title="全部" style="margin-bottom:50px;">
        <van-grid :gutter="10" :column-num="2">
          <van-grid-item v-for=" item in cart" :key="item._id" @click="todetail(item._id)">
            <img :src="item.coverImg" alt />
            <p class="tit">{{item.name}}</p>
            <p class="desc">{{item.descriptions}}</p>
            <div class="price-warp">
              <span class="price">¥{{ item.price }}</span>
              <span class="originPrice">¥{{ item.price }}</span>
              <van-icon style="margin-left: 30px; " color="#3bba63" size="30" name="cart-circle-o" />
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="晚餐" style="margin-bottom:50px;">
        <van-grid :gutter="10" :column-num="2">
          <van-grid-item
            v-for=" item in cart"
            :key="item._id"
            v-show="item.productCategory.name == '晚餐'"
            @click="todetail(item._id)"
          >
            <img :src="item.coverImg" alt />
            <p class="tit">{{item.name}}</p>
            <p class="desc">{{item.descriptions}}</p>
            <div class="price-warp">
              <span class="price">¥{{ item.price }}</span>
              <span class="originPrice">¥{{ item.price }}</span>
              <van-icon style="margin-left: 30px; " color="#3bba63" size="30" name="cart-circle-o" />
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="人气" style="margin-bottom:50px;">
        <van-grid :gutter="10" :column-num="2">
          <van-grid-item
            v-for=" item in cart"
            v-show="item.productCategory.name == '人气'"
            :key="item._id"
            @click="todetail(item._id)"
          >
            <img :src="item.coverImg" alt />
            <p class="tit">{{item.name}}</p>
            <p class="desc">{{item.descriptions}}</p>
            <div class="price-warp">
              <span class="price">¥{{ item.price }}</span>
              <span class="originPrice">¥{{ item.price }}</span>
              <van-icon style="margin-left: 30px; " color="#3bba63" size="30" name="cart-circle-o" />
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="心选" style="margin-bottom:50px;">
        <van-grid :gutter="10" :column-num="2">
          <van-grid-item
            v-for=" item in cart"
            :key="item._id"
            v-show="item.productCategory.name == '叮咚心选'"
            @click="todetail(item._id)"
          >
            <img :src="item.coverImg" alt />
            <p class="tit">{{item.name}}</p>
            <p class="desc">{{item.descriptions}}</p>
            <div class="price-warp">
              <span class="price">¥{{ item.price }}</span>
              <span class="originPrice">¥{{ item.price }}</span>
              <van-icon style="margin-left: 30px; " color="#3bba63" size="30" name="cart-circle-o" />
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "home",
  components: {},
  created() {
    axios
      .get("http://192.168.16.89:3009/api/v1/product_categories", {
        params: { per: 13 }
      })
      .then(res => {
        console.log(res.data.categories);
        this.list = res.data.categories;
      });
    axios
      .get("http://192.168.16.89:3009/api/v1/products", {
        params: {
          per: 80
        }
      })
      .then(res => {
        console.log(res);
        this.cart = res.data.products;
      });
    this.location = localStorage.getItem("userLocation");
  },
  mounted () {
    let that = this;
    that.$nextTick(() => {
      //监听滚动事件
      window.addEventListener('scroll', that.handleScroll)
    })
  },
  data() {
    return {
      value: "",
      cart: [],
      list: [],
      location: "",
      showBgColor: false
    };
  },
  methods: {
    todetail(id) {
      localStorage.setItem("id", id);
      this.$router.push({
        name: "details"
      });
    },
    toMap() {
      this.$router.push({
        name: "map"
      });
    },
     handleScroll () {
      let that = this;
      //垂直滚动的值兼容问题
      let scrollTopE = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let screenHeight = window.screen.availHeight
      if (scrollTopE > 108) {
        // 添加搜索栏颜色
        this.showBgColor = true;
      } else {
        this.showBgColor = false;
      }
    },
  }
};
</script>
<style scoped>
/* 让nav滚动条隐藏起来  */

::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

.head {
  background: url("http://518taole.7-orange.cn/backImage.png") no-repeat;
  height: 300px;
}
.swipe {
  margin-left: 10px;
  margin-right: 10px;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.van-col {
  margin-top: 5px;
  margin-bottom: -4px;
}
.banner img {
  width: 100%;
  height: 100%;
  margin-top: 0px;
}
.van-grid-item {
  font-size: 14px;
}
.van-grid-item img {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}
.member-warp {
  padding: 0 15px;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.member-warp .member {
  background-color: #3bba63;
  width: 90%;
  height: 100%;
  border-radius: 8px;
  margin: 20px auto;
  padding: 0 5%;
}
.member span {
  line-height: 35px;
  font-size: 14px;
  color: white;
}
.title {
  display: inline-block;
  border-left: 4px #3cb963 solid;
  padding-left: 12px;
  height: 18px;
  line-height: 18px;
  vertical-align: middle;
  font-size: 16px;
  ;
  margin-left: 15px;
}
.van-count-down {
  float: left;
  margin-left: 2.5%;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #000;
}
.more {
  color: #3cb963;
  float: right;
  margin-right: 15px;
}
.nav {
  margin-top: 5px;
  width: 100%;
  overflow-x: auto;
}
.nav ul li {
  float: left;
  padding-right: 10px;
}
.nav ul li img {
  width: 116px;
  height: 116px;
}
.nav ul li .tit {
  margin: 0px;
  width: 116px;
  height: 42px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nav ul li .price {
  margin: 0px;
  width: 80px;
  height: 18px;
  font-size: 18px;
  color: #f37078;
  display: inline-block;
}

.nav ul li .price2 {
  margin: 0px;
  width: 80px;
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}
.titleWrapper {
  margin: 0 8px 0 0;
  height: 18px;
}
.wrapperItem {
  width: 95%;
  height: 195px;
  border: 1px solid #dddbc0;
  margin-left: 2.5%;
}
.newItem,
.vipItem {
  float: left;
  width: 49.8%;
  height: 97px;
  border-right: 1px solid #dddbc0;
  border-bottom: 1px solid #dddbc0;
}
.hotItem {
  float: left;
  width: 49.8%;
  height: 97px;
  border-bottom: 1px solid #dddbc0;
}
.itemTitle {
  float: left;
  font-size: 14px;
  color: orange;
  padding-left: 5px;
  padding-top: 5px;
}
.itemSubTitle {
  font-size: 14px;
  color: grey;
  text-align: left;
  padding-left: 5px;
  padding-top: 5px;
  margin-top: 20px;
  margin-bottom: 0px;
}
.itemImg {
  padding: 4px 8px 0 10px;
  width: 70px;
  height: 45px;
}
.otherItem {
  float: left;
  width: 25%;
  border-right: 1px solid #dddbc0;
  height: 97px;
}
.lowPrice {
  float: left;
  width: 24.5%;
  height: 97px;
}
.all img {
  width: 116px;
  height: 116px;
}
.all .tit {
  text-align: start;
}

.all .desc {
  margin-top: 0;
  color: #808080;
  text-align: start;
}
.all span {
  display: inline-block;
}

.all .price {
  color: #f37078;
  font-size: 18px;
}

.all .originPrice {
  padding-left: 8px;
  color: #999;
  font-size: 14px;
  text-decoration: line-through;
}
.adress {
  display: inline-block;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 80%;
    min-width: 20%;
    font-size: 14px;
    line-height: 34px;
    height: 34px;
    margin-top: 15px;
    color: #fff;
    background: rgba(000, 000, 000);
    opacity: 0.6;
    border-radius: 3.125rem;
    padding-right: 1.5rem;
  
}
</style>