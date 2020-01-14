<template>
  <div class="box">
    <van-nav-bar
      title="修改地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
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
import axios from "axios";
import areaList from "../../../public/data/area";
import store from "../../store/index";
export default {
  name: "addressEdit",
  data() {
    return {
      //   address: "",
      areaList,
      searchResult: [],
      addressInfo: {
        id: 0,
        name: "",
        tel: 0,
        province: "",
        city: "",
        county: "",
        addressDetail: "",
        areaCode: "",
        postalCode: "411200",
        isDefault: true
      }
    };
  },
  created() {
    this.showAddress();
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "address"
      });
    },
    onClickRight() {
      Toast("按钮");
    },
    showAddress() {
      axios
        .get(
          "http://192.168.16.29:3009/api/v1/addresses/" + this.$route.query.id,
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(AddressRes => {
          for (var key in areaList.county_list) {
            if (
              areaList.county_list[key] == AddressRes.data.regions.split("-")[2]
            ) {
              this.addressInfo.areaCode = key;
            }
          }
          //   console.log(
          //     this.addressInfo.areaCode,
          //     AddressRes.data.regions.split("-")[2]
          //   )
          this.addressInfo.name = AddressRes.data.receiver;
          this.addressInfo.id = this.$route.query.index + 1;
          this.addressInfo.tel = AddressRes.data.mobile;
          this.addressInfo.province = AddressRes.data.regions.split("-")[0];
          this.addressInfo.city = AddressRes.data.regions.split("-")[1];
          this.addressInfo.county = AddressRes.data.regions.split("-")[2];
          this.addressInfo.addressDetail = AddressRes.data.address;
          //   this.addressInfo.areaCode = this.addressInfo.areaCode;
          //   county_list
          //   this.addressInfo.addressDetail = AddressRes.data.address;
          //   console.log(this.$store.state.postalCode);
        });
    },
    onSave(content) {
      console.log(this.$route.query.id);
      axios
        .put(
          "http://192.168.16.29:3009/api/v1/addresses/" + this.$route.query.id,

          {
            receiver: content.name,
            mobile: content.tel,
            regions:
              content.province + "-" + content.city + "-" + content.county,
            address: content.addressDetail,
            idDefault: content.isDefault
          },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
          this.$router.push({
            name: "address"
          });
          //   this.showAddress();
          //   this.show = false;
        });
    },
    onDelete() {
      console.log(this.$route.query.id);
      axios
        .delete(
          "http://192.168.16.29:3009/api/v1/addresses/" + this.$route.query.id,
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
          this.$router.push({
            name: "address"
          });
        });
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
<style scope>
.box {
  /* background: rgb(189, 134, 33); */
  height: 620px;
}
</style>