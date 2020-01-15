<template>
  <div class="orderHandlebox">
    <van-sticky>
      <van-nav-bar title="添加地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <div @click="toAccount(chosenAddressId)">
      <van-address-list
        v-model="chosenAddressId"
        :list="addressList"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>

    <van-popup v-model="show" round position="bottom" get-container="#app">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
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
  data() {
    return {
      areaList,
      searchResult: [],
      myareaList: [],
      chosenAddressId: "1",
      show: false,
      addressList: [],
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
    this.areaList = areaList;
    this.showAddress();
  },

  methods: {
    toAccount(chosenAddressId) {
      console.log("111");
      console.log(chosenAddressId);
      let id = this.addressList[parseInt(chosenAddressId)]._id;
      this.$router.push({
        name: "accounts",
        query: {
          id: id
        }
      });
    },
    onClickLeft() {
      this.$router.push({
        name: "accounts"
      });
    },
    onAdd() {
      this.show = true;
    },
    onEdit(item, index) {
      console.log(item);
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
            address: content.addressDetail,
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
    showAddress() {
      console.log(this.$store.state.mmm);
      axios
        .get("http://192.168.16.29:3009/api/v1/addresses", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(showAddressRes => {
          console.log(showAddressRes);
          // showAddressRes.data.addresses.forEach(ele => {

          // });
          this.addressList = showAddressRes.data.addresses;
          for (let i = 0; i < showAddressRes.data.addresses.length; i++) {
            this.addressList[i].id = i;
            this.addressList[i].name =
              showAddressRes.data.addresses[i].receiver;
            this.addressList[i].tel = showAddressRes.data.addresses[i].mobile;
            this.addressList[i].address =
              showAddressRes.data.addresses[i].address;
            // this.addressList[i].areaCode = content[i].areaCode
          }
          console.log(this.addressList);
          // this.addressList = showAddressRes.data.addresses;
        });
    },
    onDelete() {
      console.log(this.searchResult);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [areaList];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>