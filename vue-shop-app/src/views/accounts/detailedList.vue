<template>
    <div class='detailedList'>
       <van-sticky>
              <van-nav-bar title="购物清单" left-text="返回" left-arrow @click-left="onClickLeft"/>
       </van-sticky>
       <div class="listitle">
        <span>商品</span>
        <span class="total" >{{ list.length }}</span>
       </div>
           <ul style="margin-bottom:60px;">
               <li class="goodsList" v-for="(item,index) in list" :key="index">
                <div class="listItem">
                    <img :src="item.product.coverImg" alt="">
                </div>
                <div class="textDetail">
                    <p class="name">{{ item.product.name }}</p>
                    <span class="subParam">单价:¥{{ item.product.price}}</span>
                    <span class="subParam">数量:{{ item.quantity}}</span>
                </div>
                <div class="goodPrice">
                    ¥{{ item.quantity*item.product.price }}
                </div>
               </li>
           </ul>


    </div>
</template>
<script>
export default {
    created() {
    console.log(this.$store.state.cartList);
    this.showCart();
},
    data() {
        return {
            list:[],
        }
    },
    methods: {
        //返回点击事件
        onClickLeft() {
        this.$router.push({name:'accounts'});
        },
        showCart(){
            for(let i=0; i<this.$store.state.cartList.length; i++){
                if(this.$store.state.cartList[i].isSel == true){
                    this.list.push(this.$store.state.cartList[i]);
                }
            }
        },
    },
}
</script>
<style scoped>
ul li{
    list-style: none;
}
.listitle{
    padding-left: 8px;
    margin-top: 10px;
    height: 24px;
    line-height: 24px;
    width: 100%;
    background-color: white;
    border-bottom: solid 1px #e8e9e8;
    font-size: 14px;
    text-align: left;
    padding-left: 8px;
}
.total{
    padding-right: 32px;
    font-size: 14px;
    float: right;
}
.goodsList{
    display: flex;
    height: 48px;
    width: 100%;
    background-color: white;
    border-bottom: solid 1px #e8e9e8;
}
.listItem{
    height: 48px;
    width: 10%;
}
.textDetail{
    height: 48px;
    width: 70%;
    padding-left: 35px;
    text-align: left;
}
img{
    width: 50px;
    height: 45px;
    padding-left: 8px;
}
.name{
    font-size: 14px;
    padding: 3px 0;
    padding-left: 8px;
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0px;
}
.subParam{
    font-size: 12px;
    color:#999;
    padding-left: 8px;
}
.goodPrice{
    padding-top: 3px;
    font-size: 12px;
    line-height: 48px;
}
</style>