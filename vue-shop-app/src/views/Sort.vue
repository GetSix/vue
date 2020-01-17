<template>
  <div class="sort">
    <header>
      <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    </header>
    <div class="main">
      <van-sidebar v-model="activeKey">
       
        <router-link :to="{name:item.name,query:{}}" :key="item._id" v-for="item in category">
          <van-sidebar-item :title="item.name" @click="to(item._id,item.name)" />
        </router-link>
      </van-sidebar>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      category: [],
    };
  },
  components: {},
  created() {
    axios.get('http://192.168.16.89:3009/api/v1/product_categories',{
      params:{
        per:13
      }
    }).then(res=>{
       console.log(res.data.categories)
       this.category=res.data.categories
       this.fromHome();
     }) 
  },
  methods: {
    to(id, cname) {
      localStorage.setItem("cname", cname);
      //  this.category=res.data.categories
    },
    fromHome() {
      this.activeKey = this.$route.query.index;
      this.to("cname", this.category[this.activeKey].name);
      this.$router.push({ name: this.category[this.activeKey].name });
    },
    toMap(){
      console.log('1')
      this.$router.push({
        name:'map'
      })
    }
   
  }
};
</script>
<style scoped>
header .sort {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.main {
  overflow: hidden;
  display: flex;
  flex: 1;
  height: 34.9225rem;
}
.van-sidebar {
  float: left;
  overflow-y: auto;
  width: 25%;
}

.right {
  width: 75%;
  float: right;
  /* min-height: 1rem; */
  /* background: skyblue; */
  overflow-y: auto;
}
.van-sidebar-item :hover {
  font-weight: bolder;
}
</style>
