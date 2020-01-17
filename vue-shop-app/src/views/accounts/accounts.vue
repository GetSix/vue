<template>
    <div class="goods">
       <van-sticky>
              <van-nav-bar title="填写订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
       </van-sticky>
        <!-- 收货地址 -->
        <van-contact-card v-show="this.name == ''?isName:!isName"  @click='toAddress()'/>
        <van-contact-card v-show="this.name == ''?!isName:isName"  type="edit" :name="name" :tel="tel" @click='toAddress()'/>
        <!-- 发货时间 -->
       <div class="van-cell" @click="show = true">
        <div class="top"><span style="float:left; margin-bottom:2px;">送达时间</span><br><br>
        <span style="color:#999;">超过十分钟可获得积分补偿</span>
        </div>
        <div class="bottom"><span class="time">{{ time }}</span><van-icon name="arrow" /></div>
       </div>
       <van-popup v-model="show" position='bottom' :style="{ height: '60%' }">

      <van-tree-select :active-id.sync="activeId" height="55vw" :items="items" :main-active-index.sync="activeIndex">
  <template slot="content">
    <van-datetime-picker v-if="activeIndex === 0" v-model="currentTime" @change=' nowTime' type="time" :min-hour="0" :max-hour="23"/>
    <van-datetime-picker v-if="activeIndex === 1" v-model="currentTime" @change=' tomTime' type="time" :min-hour="0" :max-hour="23"/>
  </template>
</van-tree-select>
  </van-popup>

    <div class="list" @click="detaLists">
        <div class="list_l">
          <ul>
            <li v-for="(item, index) in cartList" :key="index">
              <img :src="item.product.coverImg" alt="">
            </li>
          </ul>
        </div>
        <div class="list_r">
            <span style="margin-right:10px;">{{ cartList.length }}</span>
            <van-icon name="arrow" />
        </div>
    </div>
    <div style="padding: 16px 16px 8px; color: #969799; font-size: 14px; line-height: 16px;
    text-align: left;">
      支付方式
    </div>
    <van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="微信" clickable @click="radio = '1'">
      <van-icon name="wechat" style="float:right; right:20px;" color='#07c160' size="35"/>
      <van-radio slot="right-icon" name="1" />
    </van-cell>
    <van-cell  title="支付宝" clickable @click="radio = '2'">
      <van-icon color='#1989fa' style="float:right; right:20px;" name="alipay" size="35"/>
      <van-radio slot="right-icon" name="2" />
    </van-cell>
    <van-cell title="花呗" clickable @click="radio = '3'">
      <img src="../../img/hb.png" style="float:right; margin-right:20px;" alt="">
      <van-radio slot="right-icon" name="3" />
    </van-cell>
      </van-cell-group>
    </van-radio-group>
    <!-- 优惠券单元格 -->
<van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true"/>
<!-- 优惠券列表 -->
<van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
<van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons" @change="onChange" @exchange="onExchange"/>
</van-popup>
<van-field v-model="value" rows="1" autosize label="备注" type="textarea"
  placeholder="请输入备注，选填项目"/>
<div class="van-cell" >
  <div class="top"><span style="float:left; margin-bottom:2px;">商品金额</span>
  </div>
  <div class="bottom"><span class="time">¥{{ price.toFixed(2) }}</span></div>
</div>
<div class="van-cell" style="margin-bottom:70px;">
  <div class="top"><span style="float:left; margin-bottom:2px;">配送费</span>
  </div>
  <div class="bottom"><span class="time">0.00</span></div>
</div>

<!-- <footer style="position: absolute; width:100%; height:50px; z-index: 9999;"> -->
   <van-sticky>
      <van-submit-bar 
      :price="(price-ap)*100"
      button-text="提交订单"
      @submit="onSubmit"
      />
   </van-sticky>
<!-- </footer> -->


</div>
</template>
<script>
import axios from 'axios';

const coupon = {
  available: 0,
  condition: '无使用门槛\n最多优惠10元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1579089068,
  endAt: 1579521068,
  valueDesc: '1.5',
  unitDesc: '元'
};
const coupon1 = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 350,
  name: '优惠券名称',
  startAt: 1579175468,
  endAt: 1579362668,
  valueDesc: '3.5',
  unitDesc: '元'
};
const coupon2 = {
  available: 2,
  condition: '无使用门槛\n最多优惠18元',
  reason: '',
  value: 450,
  name: '优惠券名称',
  startAt: 1579175468,
  endAt: 1579535468,
  valueDesc: '4.5',
  unitDesc: '元'
};


export default {
   data() {
    return {
       activeId: 1,
      activeIndex: 0,
      items: [{ text: '今天' }, { text: '明天' }],
      currentTime: '12:00',
      date: '',
      show:false,
      name:'',
      tel:'',
      id:'1',
      time:'请选择送达时间',
      cartList:[],
      radio:'2',
       chosenCoupon: -1,
      coupons: [coupon,coupon1,coupon2],
      disabledCoupons: [coupon],
      showList:false,
      value:'',
      price:0,
      priceList:[],
      ap:'',
      isName: true,
      data:{},
      orderDetails:[],
      order:{},
    };
  },
created() {
  this.to();
  this.list();
},
  methods: {
    list(){
      console.log(this.$store.state.cartList);
      for(let i=0; i< this.$store.state.cartList.length; i++){
        let obj = this.$store.state.cartList[i];
          if(obj.isSel == true){
            console.log(obj);
            this.cartList.push(obj);
            this.price +=  obj.quantity * obj.product.price;
            console.log(this.price);
            //订单详情商品的对象
             this.order = {
                quantity: obj.quantity,
                product: obj._id,
                price:obj.product.price,
            }
          this.orderDetails.push(this.order)
      }
      }
      console.log(this.cartList);
      // console.log( this.$store.state.orderList);
      console.log( this.orderDetails);
    },
        //返回点击事件
    onClickLeft() {
      this.$router.push({name:'cart'});
    },
    toAddress(){
      this.$router.push({name:'address'});
    },
    to(){
      console.log(this.$route.query.id);
      this.edit = true;
      this.id = this.$route.query.id;
      axios.get('http://192.168.16.89:3009/api/v1/addresses/'+this.id,
      {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          })
      .then(res =>{
        console.log(res);
        console.log(res.data.receiver);
        this.name = res.data.receiver;
        this.tel = res.data.mobile;
        console.log(this.name, this.tel);
        this.$store.state.person = res;
        console.log(this.$store.state.person);
        //订单详情地址对象
        this.data = {
            receiver:this.$store.state.person.data.receiver,
            regions:this.$store. state.person.data.regions,
            address:this.$store.state.person.data.address,
            orderDetails:this.orderDetails,
        }
        console.log(this.data);
      })
    },
    //今天收货时间
     nowTime(){
          console.log('今天：'+this.currentTime);
          this.time = '今天：'+this.currentTime;
       },
    //明天收货时间
    tomTime(){
      console.log('明天：'+this.currentTime);
      this.time = '明天：'+this.currentTime;
    },
    //取商品清单页
    detaLists(){
        this.$router.push({name:'detaList'})
    },
    coupon(){
      this.$router.push({name:'discount'})
    },


    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      console.log(this.chosenCoupon);

      this.coupons.forEach(v => {
        // console.log(v)
        if(v.available == index){
             console.log(v)
            // this.price  = this.price - v.value/100;
            // this.price.toFixed(2);
            //  this.price=parseInt(this.price - v.value/100)
           
            this.ap = v.value/100
            console.log(this.ap)
        }
    });
    
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },

    //提交订单事件
    onSubmit(){
      if(this.name == ''){
         this.$toast('请选择联系人');
      }else{
          console.log(this.$store.state.person.data.receiver);
          console.log(this.$store.state.orderList);
          console.log(localStorage.getItem("token"));
          axios.post('http://192.168.16.89:3009/api/v1/orders',
          this.data,
          {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
            }
          })
          .then(res =>{
            console.log(res);
            this.$toast('订单提交成功');
            console.log(this.price-this.ap);
            
             this.$store.state.price =this.price-this.ap;
            this.$router.push({name:'orderHandle'});
          })
      }
    }


    }
}

</script>
<style  scoped>
.van-cell {
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 30px;
    text-align: left;
}
.top{
  width: 55%;
  line-height: 14px;
}
.bottom{
float: right;
width: 45%;
text-align: right;

}
.time{
  margin-right: 10px;
  color:#999;
}
.list{
  height: 80px;
  width: 100%;
  text-align: left;
  overflow: hidden;
}
.list_l{
  width: 75%;
  display: inline-block;
  text-align: left;
  line-height: 80px;
  overflow: hidden;
}

.list_l ul li{
  float: left;
}
.list_l ul li img{
  width:58px ;
  height: 58px;
}
.list_r{
  width: 20%;
  display: inline-block;
  line-height: 80px;
  float: right;
  text-align: center;
}
</style>