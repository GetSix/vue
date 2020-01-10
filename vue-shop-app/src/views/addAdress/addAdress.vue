<template>
  <div class="orderHandlebox">
    <van-nav-bar title="添加地址" left-text="返回" left-arrow @click-left="onClickLeft" />
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
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Tab, Tabs } from "vant";
import { AddressEdit } from "vant";

Vue.use(AddressEdit);
Vue.use(Tab).use(Tabs);
Vue.use(NavBar);
export default {
  name: "address",
  components: {},
  data() {
    return {
      areaList,
      searchResult: []
    };
  },

  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
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