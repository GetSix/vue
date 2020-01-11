<template>
  <div class="cart">
<<<<<<< HEAD
    <h1>购物车页</h1>
    <div style="overflow:hidden; height:1000px; width=100px;">
	<div style="overflow:auto; height:1000px; wideth=120px;">
    111
	</div>
</div>

=======
    <van-sticky>
      <van-nav-bar class="top" title="我的购物车" right-text="删除" @click-right="onClickRight" />
    </van-sticky>
    <div class="cartslist">
      <div class="goodcart" v-for="(item,index) in goodsList" :key="index">
        <div class="img">
          <van-checkbox class="sincheckbox" v-model="item.isSel" checked-color="#07c160"></van-checkbox>
          <img :src="item.coverImg" alt />
        </div>
        <div class="handle">
          <p class="goodsname">{{item.goodsName}}</p>
          <div class="price">
            <span>￥{{item.goodsPrice}}</span>
            <div class="add">
              <div>-</div>
              <div class="num">1</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pay">
      <div class="allSel">
        <van-checkbox v-model="allChecked" checked-color="#07c160">全选</van-checkbox>
      </div>
      <div class="payele">
        <div class="total">合计:{{totalPrice}}</div>
        <div class="payend">结算({{ totalNum }})</div>
      </div>
    </div>
>>>>>>> skk
  </div>
</template>

<script>
export default {
  name: "cart",
  components: {},
  data() {
    return {
      totalNum: 0,
      totalPrice: 0,
      goodsList: [
        {
          goodsName: "111",
          coverImg:
            "http://img.ddimg.mobi/product/01687313250c81568173312616.jpg!deliver.product.list",
          goodsPrice: "22",
          isSel: true
        },
        {
          goodsName: "222",
          coverImg:
            "http://img.ddimg.mobi/product/4d143e2d8ccee1568048072835.png!deliver.product.list",
          goodsPrice: "12",
          isSel: true
        },
        {
          goodsName: "333",
          coverImg:
            "http://img.ddimg.mobi/product/bf6a208d90c831564757264390.JPG!deliver.product.list",
          goodsPrice: "54",
          isSel: true
        },
        {
          goodsName: "444",
          coverImg:
            "http://img.ddimg.mobi/product/1c11c28151c2c1564712874504.jpg!deliver.product.list",
          goodsPrice: "63",
          isSel: true
        },
        {
          goodsName: "444",
          coverImg:
            "http://img.ddimg.mobi/product/1c11c28151c2c1564712874504.jpg!deliver.product.list",
          goodsPrice: "63",
          isSel: true
        }
      ],
      checked: true,
      allChecked: true
    };
  },
  methods: {
    onClickRight() {
      console.log("删除");
    }
  }
};
</script>

<style scope>
.cart {
  width: 100%;
  background: #f5f5ff;
  display: flex;
  flex-direction: column;
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
.pay {
  height: 60px;
  width: 100%;
  background: #f5f5f5;
  position: fixed;
  bottom: 55px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.pay .payele {
  width: 150px;
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
</style>