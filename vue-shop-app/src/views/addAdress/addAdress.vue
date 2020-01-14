<template>
  <div class="orderHandlebox">
    <van-nav-bar title="添加地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-popup v-model="show" round position="bottom" get-container="#app">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        address-info
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
      list: [
        {
          id: "1",
          name: "石宽宽",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "许兆宽",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
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
  },

  methods: {
    onClickLeft() {
      this.$router.push({
        name: "user"
      });
    },
    onAdd() {
      this.show = true;
    },
    onEdit() {},
    onSave(content) {
      console.log(content);
    },
    onDelete() {
      console.log(this.searchResult);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>