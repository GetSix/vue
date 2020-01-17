<template>
  <div class="cart">
    <van-sticky>
      <van-nav-bar class="top" title="我的购物车" right-text="删除" @click-right="delCarts" />
    </van-sticky>
    <div v-if="noCartShow" class="noCart">
      <img src="../img/empty.5053d452.png" style="width:100%;" alt />
      <p>购物车空空如也</p>
      <div class="goShopBtn">
        <van-button @click="toShop" style="font-size:20px;" type="primary" size="large" round>去购物</van-button>
      </div>
    </div>
    <div class="cartslist">
      <div class="goodcart" v-for="(item,index) in cartsList" :key="index">
        <div class="img">
          <!-- <input
            class="selcheckbox"
            type="checkbox"
            v-model="item.isSel"
            @click="checkSel(item,index)"
          />-->
          <van-checkbox
            class="sincheckbox"
            @click="checkSel(item,index)"
            v-model="item.isSel"
            checked-color="#07c160"
          />
          <img :src="item.product.coverImg" alt />
        </div>
        <div class="handle">
          <p class="goodsname">{{item.product.name}}</p>
          <div class="price">
            <span>￥{{item.product.price}}</span>
            <div class="add">
              <div @click="subOne(item,index)">-</div>
              <div class="num">{{ item.quantity }}</div>
              <div @click="addOne(item,index)">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pay">
      <div class="allSel">
        <!-- <input type="checkbox" v-model="allChecked" value="111" /> -->
        <van-checkbox @click="checkAll()" v-model="allChecked" checked-color="#07c160">全选</van-checkbox>
      </div>
      <div class="payele">
        <div class="total">合计:{{totalPrice}}</div>
        <div class="payend" @click="toAccounts()">结算({{ totalNum }})</div>
      </div>
    </div>

    <!-- 猜你喜欢 -->
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">猜你喜欢</van-divider>
    <div class="goods">
      <van-grid :gutter="10" :column-num="2">
        <van-grid-item v-for="(item,index) in goodsList" :key="index">
          <div @click="toDetail(item)">
            <div class="goodimg">
              <img :src="item.coverImg" alt />
            </div>
            <div class="goodname">{{ item.name }}</div>
            <div class="gooddes">{{ item.descriptions }}</div>
          </div>
          <div class="addcart">
            <span style="color:red;">￥{{ item.price }}</span>
            <div class="shoppingcart" @click="addCart(item)">
              <van-icon size="20" color="#FFFFFF" name="shopping-cart-o" />
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
import { Toast } from "vant";
Vue.use(Toast);
// 全局注册
Vue.use(Dialog);
import axios from "axios";
export default {
  name: "cart",
  components: {},
  data() {
    return {
      totalNum: 0,
      totalPrice: 0,
      noCartShow: false,
      cartsList: [],
      goodsList: [],
      isSel: [],
      checked: false,
      allChecked: false
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.showgoods();
      this.showCarts();
    }
    this.isLogin();
  },
  methods: {
    toShop() {
      this.$router.push({
        name: "home"
      });
    },
    goodsLength() {
      this.$store.state.num = this.cartsList.length;
      if (this.cartsList.length == 0) {
        this.noCartShow = true;
      } else {
        this.noCartShow = false;
      }
    },
    toAccounts() {
      //将购车的数据赋值给 this.$store.state.assountsList
      this.$store.state.accountsList = this.cartsList;
      this.$store.state.accountsList.find(item => {
        //判断长度不为0 时跳转到结账页
        if (item.isSel === true) {
          console.log(this.cartsList);
           this.$store.state.cartList = this.cartsList;
            console.log(this.$store.state.cartList);
          return this.$router.push({ name: "accounts" });
        }
      });
    },
    isLogin() {
      if (localStorage.getItem("token")) {
      } else {
        this.$router.push({ name: "loginpage" });
      }
    },
    delCarts() {
      let saveList = [];
      let delList = [];
      Dialog.confirm({
        message: "是否删除该商品"
      })
        .then(() => {
          // on confirm
          this.cartsList.forEach(delitem => {
            if (delitem.isSel == true) {
              axios
                .delete(
                  "http://192.168.16.89:3009/api/v1/shop_carts/" + delitem._id,
                  {
                    headers: {
                      authorization: "Bearer " + localStorage.getItem("token")
                    }
                  }
                )
                .then(res => {
                  this.showCarts();
                  this.totalPrice = 0;
                  this.totalNum = 0;
                  this.allChecked = false;
                  this.goodsLength();
                });
            }
          });
          this.goodsLength();
          Toast.success("删除成功");
        })
        .catch(() => {
          Toast.success("已取消");
        });
    },
    showCarts() {
      axios
        .get("http://192.168.16.89:3009/api/v1/shop_carts", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res);
          this.cartsList = res.data;
          this.cartsList.forEach(item => {
            item.isSel = false;
          });
          this.guessYouLike();
          this.goodsLength();
        });
    },
    guessYouLike() {
      let youLike = [];
      this.cartsList.forEach(item => {
        youLike.push(item.product.productCategory);
      });
      let likeGoodId = this.findMost(youLike);
      this.showgoods(likeGoodId);
    },
    showgoods(id) {
      axios
        .get("http://192.168.16.89:3009/api/v1/products", {
          params: {
            product_category: id
          }
        })
        .then(res => {
          this.goodsList = res.data.products;
        });
    },
    findMost(arr) {
      if (!arr.length) return;
      if (arr.length === 1) return arr;
      let res = {};
      let maxName,
        maxNum = 0;
      // 遍历数组
      arr.forEach(item => {
        res[item] ? (res[item] += 1) : (res[item] = 1);
      });
      // 遍历 res
      for (let r in res) {
        if (res[r] > maxNum) {
          maxNum = res[r];
          maxName = r;
        }
      }
      return maxName;
    },

    addCart(gooditem) {
      axios
        .post(
          "http://192.168.16.89:3009/api/v1/shop_carts",
          { product: gooditem._id, isSel: true },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }

          // headers: { authorization: "Bearer " + localStorage.getItem("token") }
        )
        .then(res => {
          console.log(res);
          Toast.success("加入购物车成功");
          this.showCarts();
        });
    },
    checkAll() {
      this.allChecked = !this.allChecked;
      this.cartsList.forEach(item => {
        item.isSel = this.allChecked;
      });

      this.totalPrice = 0;
      this.cartsList.forEach(item => {
        if (this.allChecked) {
          this.totalPrice += item.product.price * item.quantity;
        }
      });
      this.totalPrice = parseInt(this.totalPrice * 100) / 100;
      if (this.allChecked) {
        // this.totalNum = this.cartsList.length;
        // this.allNum();
        this.totalNum = 0;
        this.cartsList.forEach(item => {
          this.totalNum += item.quantity;
        });
      } else {
        this.totalNum = 0;
      }
    },
    checkSel(item, index) {
      this.cartsList[index].isSel = !item.isSel;
      if (this.cartsList.every(item => item.isSel == true)) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }
      this.allPrice(item, index);
      this.allNum(item, index);
    },
    addOne(item, index) {
      this.cartsList[index].quantity++;
      this.allPrice(item, index);
      this.allNum(item, index);
      // this.cartsList[index].quantity
      axios
        .post(
          "http://192.168.16.89:3009/api/v1/shop_carts",
          {
            product: item.product._id,
            quantity: 1,
            isSel: true
          },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }

          // headers: { authorization: "Bearer " + localStorage.getItem("token") }
        )
        .then(res => {
          // this.showCarts();
        });
    },

    subOne(item, index) {
      this.cartsList[index].quantity--;
      this.allPrice(item, index);
      // this.allNum(item, index);
      if (this.cartsList[index].quantity == 0) {
        Dialog.confirm({
          message: "是否删除该商品"
        })
          .then(() => {
            // on confirm
            axios
              .delete(
                "http://192.168.16.89:3009/api/v1/shop_carts/" + item._id,
                {
                  headers: {
                    authorization: "Bearer " + localStorage.getItem("token")
                  }
                }
              )
              .then(res => {
                Toast.success("删除成功");
                this.cartsList.splice(index, 1);
                this.allPrice(item, index);
                this.allNum(item, index);
                this.guessYouLike();
                this.goodsLength();
              });
          })
          .catch(() => {
            item.quantity = 1;
            this.allPrice(item, index);
            this.allNum(item, index);
          });
      } else {
        axios
          .post(
            "http://192.168.16.89:3009/api/v1/shop_carts",
            {
              product: item.product._id,
              quantity: -1
            },
            {
              headers: {
                authorization: "Bearer " + localStorage.getItem("token")
              }
            }

            // headers: { authorization: "Bearer " + localStorage.getItem("token") }
          )
          .then(res => {
            // this.showCarts();
            this.allNum(item, index);
          });
      }
    },

    allPrice(item, index) {
      this.totalPrice = 0;
      this.cartsList.forEach(item => {
        if (item.isSel) {
          this.totalPrice += item.product.price * item.quantity;
          // this.totalPrice = Math.round(this.totalPrice * 100) / 100;
        }
      });
      this.totalPrice = parseInt(this.totalPrice * 100) / 100;
    },
    allNum(item, index) {
      this.totalNum = 0;
      this.cartsList.forEach(itemnum => {
        if (itemnum.isSel == true) {
          this.totalNum += parseInt(itemnum.quantity);
        }
      });
    },
    toDetail(xq) {
      this.$router.push({
        name: "details",
        query: {
          _id: xq._id
        }
      });
      localStorage.setItem("id", xq._id);
    }
  }
};
</script>

<style scoped>
.cart {
  width: 100%;
  box-sizing: border-box;
  background: #e2e2d9;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
}
.cartslist {
  flex: 1;
  overflow-y: auto;
}
.cart .goodcart {
  width: 100%;
  height: 120px;
  background: #ffffff;
  display: flex;
  margin-top: 10px;
}
.cart .goodcart .sincheckbox {
  margin-left: 10px;
}
.cart .goodcart .img {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
}
.cart .goodcart .img img {
  height: 60%;
  margin: 0 auto;
}
.cart .goodcart .handle {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.cart .goodcart .handle p {
  text-align: left;
}
.cart .goodcart .handle .price {
  display: flex;
  justify-content: space-between;
}
.cart .goodcart .handle .price .add {
  padding-right: 5px;
  display: flex;
}
.cart .goodcart .handle .price .add div {
  width: 20px;
  height: 20px;
}
.cart .goodcart .handle .price .add .num {
  background: #f5f5f5;
  width: 30px;
}
.cart .pay {
  height: 60px;
  width: 100%;
  background: #f5f5f5;
  /* background: rgba(27, 192, 35, 0.493); */
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  bottom: 50px;
  left: 0;
  z-index: 100;
}
.pay .payele {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay .payele .payend {
  width: 100px;
  height: 40px;
  background: red;
  border-radius: 30px;
  line-height: 40px;
  color: #f5f5f5;
}
.goods {
  position: relative;
  z-index: 1;
}
.goods .goodimg {
  width: 100%;
}
.goods .goodimg img {
  width: 100%;
}
.goods .addcart {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods .addcart .shoppingcart {
  width: 30px;
  height: 30px;
  line-height: 40px;
  color: #f5f5f5;
  background: rgb(154, 245, 112);
  border-radius: 50%;
}
.goodname {
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
}
.gooddes {
  font-size: 12px;
  color: #808883;
  text-align: left;
  line-height: 20px;
}
.selcheckbox {
  border-radius: 50%;
}
.goShopBtn {
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
}
</style>