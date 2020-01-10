<template>
  <div class="details">
    <header>
      <van-sticky>
        <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
      </van-sticky>
    </header>
    <section class="main">
      <div class="pimg">
        <img :src="img" alt style="width:100%;display:block;" />
      </div>
      <div class="info" style="position:relative">
        <van-card :price="price" :desc="desc" :title="name" :origin-price="price" />
        <span
          style="position:absolute;right:1rem;top:4.6rem; font-size:14px; color:#e25450;"
        >已售:999</span>
      </div>
      <div class="info-b" style="position:relative;">
        <van-icon name="cluster-o" style="position:absolute; left:1rem;top:0.2rem;" />
        <p style="text-indent:-3rem;">此商品按500g/份计价,如实收少于500g将退还差价</p>
        <van-divider />
      </div>
      <div class="info-bb" style="position:relative;">
        <van-icon name="underway-o" style="position:absolute; left:1rem;top:0.2rem;" />
        <p style="text-align:left;text-indent:2rem;">最快29分钟内送达</p>
        <van-divider />
      </div>
      <p style="height:1rem;background:#ddd;"></p>
      <div class="info-bbb">
        <p>规格</p>
        <van-divider />
        <p style="font-size:0.6rem;color:#808080;">
          <span>保存条件</span>
          <span style="margin-left:3rem;">冷藏</span>
        </p>
        <van-divider />
        <p style="font-size:0.6rem;color:#808080;">
          <span>保质期</span>
          <span style="margin-left:3rem;">15天</span>
        </p>
        <van-divider />
      </div>
      <p style="height:1rem;background:#ddd;"></p>
      <div class="pimg-b">
        <img :src="img" alt style="width:100%;display:block;" />
        <img
          style="width:100%;display:block;"
          src="https://img.ddimg.mobi/3f280ff77ab3d1571213379189.jpg?width=750&height=1869"
          alt
        />
      </div>
    </section>
    <footer style="position:fixed;z-index:999">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"  />
        <van-goods-action-icon icon="cart-o" @click="toCart" text="购物车" info="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
        <van-goods-action-button type="warning" @click="addCart(id)" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" @click="show=true" />
      </van-goods-action>
      <van-sku
  v-model="show"
  :custom-stepper-config="customStepperConfig"
   :sku="sku"
    :goods="goods"
/>
    </footer>
  </div>
</template>
<script>
import axios from "axios"
import { toast } from'../../js/toast'
export default {
  data() {
    return {
      id: "",
      img: "",
      name: "",
      desc: "",
      price: "",
       show: false,
      sku: {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      v: [
        {
          id: '30349', // skuValueId：规格值 id
          name: '红色', // skuValueName：规格值名称
          imgUrl: 'https://img.yzcdn.cn/2.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
          previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
        },
        {
          id: '1215',
          name: '蓝色',
          imgUrl: 'https://img.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
        }
      ],
      k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 2259, // skuId，下单时后端需要
      price: 100, // 价格（单位分）
      s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
      s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      stock_num: 110 // 当前 sku 组合对应的库存
    }
  ],
  price: '1.00', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
  messages: [
    {
      // 商品留言
      datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
      multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
      name: '留言', // 留言名称
      type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
      required: '1', // 是否必填 '1' 表示必填
      placeholder: '' // 可选值，占位文本
    }
  ],
  hide_stock: false // 是否隐藏剩余库存
},
     goods: {
  // 商品标题
  title: '测试商品',
  // 默认商品 sku 缩略图
  picture: 'https://img.yzcdn.cn/1.jpg'
},
      messageConfig: {
        // 数据结构见下方文档
      },
      messageConfig: {
  // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
  uploadImg: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
    });
  },
  // 最大上传体积 (MB)
  uploadMaxSize: 3,
  // placeholder 配置
  placeholderMap: {
    text: 'xxx',
    tel: 'xxx',
  
  }
}
    };
  },
  created() {
    this.id = localStorage.getItem("id");
    console.log(this.id);
    axios
      .get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        params: {
          id: this.id
        }
      })
      .then(res => {
        console.log(res.data.data);
        this.id = res.data.data.pid;
        
        this.name = res.data.data.pname;
        this.desc = res.data.data.pdesc;
        this.price = res.data.data.pprice;
        if(res.data.data.pimg){
            this.img = res.data.data.pimg;
        } else {
            this.img='https://img.yzcdn.cn/vant/cat.jpeg'
        }
         
      });
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    addCart(id) {
        console.log(id)
       toast('添加购物车成功');
 
    },
    toCart(){
        this.$router.push({
            name:'cart'
        })
    }
 
  }
};
</script>
<style scoped>
.pimg {
  border-bottom: 1px #ccc solid;
}
.info {
  text-align: left;
  background: #fff;
  border-bottom: #ccc 1px solid;
}
.van-card__price-integer,
.van-card__price-currency,
.van-card__price-decimal {
  color: #e25450;
}
.van-card__price-integer {
  font-size: 0.9rem;
}
.van-card__price-currency,
.van-card__price-decimal {
  font-size: 0.9rem;
}
.info-b,
.info-bb {
  font-size: 0.6rem;
  height: 2rem;
  color: grey;
  background: #fff;
}
.info-bbb {
  margin-top: 1rem;
  /* background: #ddd; */
  text-align: left;
  text-indent: 1rem;
}
.info-bbb p:nth-of-type(1) {
  /* padding-top: 1rem; */
  font-size: 1rem;
  color: black;
  margin: 0;
}
</style>