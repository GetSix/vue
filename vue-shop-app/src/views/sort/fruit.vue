<template>
  <div class="sort-item">
    <van-tabs>
      <van-tab v-for="p in category" :title="p.name" :key="p._id">{{p.name}}</van-tab>
    </van-tabs>
    <van-card
    v-for="item in list"
      @click='detail(item._id)'
      v-show='item.productCategory.name==cname'
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
        <van-icon name="cart-circle-o" size='25' color='#3bba63' @click.stop="addCart(item.pid)" />
      </div>
    </van-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      category:[],
      cname:''
    }
  },
  created() {
     this.cname=localStorage.getItem('cname')
      axios.get('http://192.168.16.89:3009/api/v1/product_categories').then(res=>{
       console.log(res.data.categories)
       this.category=res.data.categories
       
     })
    axios.get("http://192.168.16.89:3009/api/v1/products",{
      params:{
        per:80
      }
    }).then(res => {
      // console.log(res.data.products)
      this.list = res.data.products;
      // console.log(this.list);
    });
     axios.get('http://192.168.16.89:3009/api/v1/product_categories').then(res=>{
       console.log(res.data.categories)
       this.category=res.data.categories
       
     })
  },
  methods: {
    detail(id){
      axios.get('http://192.168.16.89:3009/api/v1/products/'+id).then(res=>{
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