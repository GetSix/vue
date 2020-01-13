<template>
  <div class="discount">
    <van-nav-bar title="我的优惠券" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-pull-refresh
      animation-duration
      success-text="加载成功"
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <van-search placeholder="请输入搜索关键词" show-action shape="round">
        <div style="color:#ee0a24;" slot="action">兑换</div>
      </van-search>
      <van-tabs v-model="active">
        <van-tab title="可用(2)">
          <div>
            <div class="van-coupon">
              <div class="van-coupon__content">
                <div class="van-coupon__head">
                  <h2 class="van-coupon__amount">
                    1.5
                    <span>元</span>
                  </h2>
                  <p class="van-coupon__condition">
                    无使用门槛
                    最多优惠1.5元
                  </p>
                </div>
                <div class="van-coupon__body">
                  <p class="van-coupon__name">优惠券</p>
                  <p class="van-coupon__valid">2019.02.02 - 2021.03.01</p>
                  <div
                    role="checkbox"
                    tabindex="0"
                    aria-checked="false"
                    class="van-checkbox van-coupon__corner"
                    size="18"
                  >
                    <div class="van-checkbox__icon van-checkbox__icon--round">
                      <i class="van-icon van-icon-success">
                        <!---->
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="van-coupon">
              <div class="van-coupon__content">
                <div class="van-coupon__head">
                  <h2 class="van-coupon__amount">
                    1.5
                    <span>元</span>
                  </h2>
                  <p class="van-coupon__condition">
                    无使用门槛
                    最多优惠1.5元
                  </p>
                </div>
                <div class="van-coupon__body">
                  <p class="van-coupon__name">优惠券</p>
                  <p class="van-coupon__valid">2019.02.02 - 2021.03.01</p>
                  <div
                    role="checkbox"
                    tabindex="0"
                    aria-checked="false"
                    class="van-checkbox van-coupon__corner"
                    size="18"
                  >
                    <div class="van-checkbox__icon van-checkbox__icon--round">
                      <i class="van-icon van-icon-success">
                        <!---->
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="不可用(0)">
          <div class="van-coupon-list__empty">
            <img src="https://img.yzcdn.cn/vant/coupon-empty.png" />
            <p>暂无优惠券</p>
          </div>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "discount",
  data() {
    return {
      count: 0,
      isLoading: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "user"
      });
    },

    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
};
</script>