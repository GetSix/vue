<template>
  <div class="orderHandlebox">
    <van-sticky>
      <van-nav-bar title="添加地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @select="toAccount"
      @add="onAdd"
      @edit="onEdit"
    />

    <van-popup v-model="show" round position="bottom" get-container="#app">
      <!-- <div hidden="hidden">{{addressInfo.addressDetail=$store.state.addAddress}}</div> -->
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        :address-info="this.$store.state.addressInfo"
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      >
        <div class="addresslocation" @click="toLocation()">
          <van-icon name="location"></van-icon>
        </div>
      </van-address-edit>
      <router-view></router-view>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Tab, Tabs } from "vant";
import { AddressEdit } from "vant";
import axios from "axios";
import areaList from "../../../public/data/area";
import store from "../../store/index";
Vue.use(AddressEdit);
Vue.use(Tab).use(Tabs);
Vue.use(NavBar);
export default {
  name: "address",
  components: {},
  activated: function() {
    // this.getCase();
    // console.log("111", this.$store.state.addAddress);
    // this.addressInfo.addressDetail = this.$store.state.addAddress;
  },
  watch: {
    //   "addressInfo.addressDetail": function() {
    //     this.addressInfo.addressDetail = this.$store.state.addAddress;
    //   }
  },
  computed: {
    // addressInfo: function() {
    //   this.addressInfo.addressDetail = this.$store.state.addAddress;
    // return {
    //   addressDetail: this.$store.state.addAddress
    // };
    // }
  },
  data() {
    return {
      areaList,
      searchResult: [], //vant默认对象 没用
      myareaList: [], //vant 默认对象  没用
      chosenAddressId: "1",
      show: false,
      addressList: [],
      // addressInfo: {
      //   addressDetail: ""
      // },
      disabledList: [
        {
          id: "3",
          name: "丁小飞",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  // http://192.168.16.39:9528
  created() {
    this.areaList = areaList; //areaList 为导入的area.js里的地址数据
    this.showAddress(); //组件初始化的时候展示地址列表
    // this.addressInfo.addressDetail = localStorage.getItem("userLocation");
  },

  methods: {
    // 跳转到支付页
    toAccount(item, index) {
      let id = this.addressList[parseInt(index)]._id; //index为vant插件里面事件的默认参数
      this.$router.push({
        name: "accounts",
        query: {
          id: id
        }
      });
    },

    // 跳转到支付页
    onClickLeft() {
      this.$router.push({
        name: "accounts"
      });
    },

    // 跳转到地理定位页
    toLocation() {
      this.$router.push({
        name: "addressMap"
      });
    },

    // 点击新增地址时让弹出框显示
    onAdd() {
      this.show = true;
    },

    // 跳转到编辑页
    onEdit(item, index) {
      // console.log(item);
      this.$router.push({
        name: "addressEdit",
        query: {
          id: item._id,
          index: index
        }
      });
    },

    // 保存收货地址
    // vant插件  content vant默认参数获取地址栏输入信息
    onSave(content) {
      console.log(content);
      axios
        .post(
          "http://192.168.16.29:3009/api/v1/addresses",
          {
            receiver: content.name,
            mobile: content.tel,
            regions:
              content.province + "-" + content.city + "-" + content.county,
            address: localStorage.getItem("userLocation"),
            isDefault: content.isDefault
          },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
          this.showAddress();
          this.show = false;
        });
    },

    // 展示所有已保存的地址
    showAddress() {
      axios
        .get("http://192.168.16.29:3009/api/v1/addresses", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(showAddressRes => {
          this.addressList = showAddressRes.data.addresses;
          // 先把请求到的数据存到addressList里面

          // 再利用for循环为addressList添加id，name，等vant组件要求要用到的属性
          // 属性值还是请求到的数据里面的内容
          for (let i = 0; i < showAddressRes.data.addresses.length; i++) {
            this.addressList[i].id = i;
            this.addressList[i].name =
              showAddressRes.data.addresses[i].receiver;
            this.addressList[i].tel = showAddressRes.data.addresses[i].mobile;
            this.addressList[i].address =
              showAddressRes.data.addresses[i].address;
            // this.addressList[i].areaCode = content[i].areaCode
          }
          // console.log(this.addressList);
          // this.addressList = showAddressRes.data.addresses;
        });
    },
    onDelete() {
      // console.log(this.searchResult);
    }
  }
};
</script>
<style scoped>
.addresslocation {
  position: absolute;
  top: 155px;
  left: 330px;
  color: rgb(253, 62, 62);
  font-size: 20px;
}
.van-address-list__bottom {
  position: fixed;
  top: 550px;
  left: 0;
  height: 100%;
}
</style>
