<template>
  <div class="sort">
    <header>
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </header>
    <div class="main">
      <van-sidebar v-model="activeKey" >
        <!-- <router-link :to="{name:'tuijian',query:{}}"><van-sidebar-item title="推荐" /></router-link>
        <router-link :to="{name:'vegetable'}"><van-sidebar-item title="安心蔬菜" /></router-link>
        <router-link :to="{name:'douzhipin'}"><van-sidebar-item title="豆制品" /></router-link>
        <router-link :to="{name:'fruit'}"><van-sidebar-item title="新鲜水果" /></router-link>
        <router-link :to="{name:'egg'}"><van-sidebar-item title="肉禽蛋" /></router-link>
        <router-link :to="{name:'fish'}"><van-sidebar-item title="海鲜水产" /></router-link>

        <router-link :to="{name:'milk'}"><van-sidebar-item title="乳制烘焙" /></router-link>
        <router-link :to="{name:'breakfast'}"><van-sidebar-item title="营养早餐" /></router-link>
        <router-link :to="{name:'dingdong'}"><van-sidebar-item title="叮咚心选" /></router-link>
        <router-link :to="{name:'rice'}"><van-sidebar-item title="米面粮油" /></router-link>
        <router-link :to="{name:'tiaoweipin'}"><van-sidebar-item title="调味品" /></router-link>
        <router-link :to="{name:'fastfood'}"><van-sidebar-item title="方便速食" /></router-link>
        <router-link :to="{name:'drink'}"><van-sidebar-item title="酒水饮料" /></router-link>
        <router-link :to="{name:'snacks'}"><van-sidebar-item title="休闲零食" /></router-link>
        <router-link :to="{name:'kuaishoucai'}"><van-sidebar-item title="快手菜" /></router-link>
        <router-link :to="{name:'ngbh'}"><van-sidebar-item title="南干北货" /></router-link>
        <router-link :to="{name:'baby'}"><van-sidebar-item title="宝宝餐" /></router-link>
        <router-link :to="{name:'chicken'}"><van-sidebar-item title="厨房用品" /></router-link> -->
          <router-link  :to="{name:item.name,query:{}}" :key="item._id" v-for="item in category" ><van-sidebar-item :title="item.name" @click="to(item._id,item.name)" /></router-link>
      </van-sidebar>
     <div class="right">
       <router-view></router-view>
     </div>
    </div>
    
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "sort",
  data() {
    return {
      value: "",
      activeKey: 0,
      category:[]
    };
  },
  components: {},
  created() {
    axios.get('http://192.168.16.39:3009/api/v1/product_categories',{params:{
      per:10
    }}).then(res=>{
       console.log(res.data.categories)
       this.category=res.data.categories
       this.fromHome();
     })
     
  },
  methods: {
     to(id,cname){
       localStorage.setItem('cname',cname)
      //  this.category=res.data.categories
      
     
     },
     fromHome(){
       this.activeKey = this.$route.query.index;
       this.to("cname",this.category[this.activeKey].name);
       this.$router.push({name:this.category[this.activeKey].name})
     }
  },
};


</script>
<style scoped>
header
.sort {
  display: flex;
  flex-direction: column;
  flex:1;
  
}
.main {
  overflow: hidden;
  display: flex;
  flex: 1;
 height:34.9225rem;
}
.van-sidebar {
  float: left;
  overflow-y: auto;
  width:25%;
   
}

.right{
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
