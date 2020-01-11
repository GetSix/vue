<template>
  <div class="sort-item">
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
    <van-card
    v-for="item in list"
      @click='detail(item._id)'
      :key="item._id"
      :price="item.price"
      :desc="item.descriptions"
      :title="item.name"
      :thumb="item.coverImg"
      :origin-price="item.price"
      style="text-align:left;"
    >
    <p>{{item.descriptions}}</p>
      <div slot="footer">
        <van-button size="mini" style="background:#3bba63;color:white; height:20px;border-radius:50%;"><van-icon name="shopping-cart-o" @click.stop="addCart(item.pid)" /></van-button>
      </div>
    </van-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios.get("http://192.168.16.39:3009/api/v1/products",{
      params:{
        per:50
      }
    }).then(res => {
      console.log(res.data.products)
      this.list = res.data.products;
      console.log(this.list);
    });
    // console.log(this.$el);
  },
  methods: {
    detail(id){
      axios.get('http://192.168.16.39:3009/api/v1/products/'+id).then(res=>{
        console.log(res.data)
        localStorage.setItem('id',id)
        this.$router.push({
          name:'details'
        })
      })
    },
    addCart(id){
      this.$toast({
        message:'添加成功'
      })
    }
  }
};
</script>
<style scoped>
/* .van-tabs {
  width: 75%;
  float: left;
} */
.van-card {
  margin-top:-3px;
}
</style>