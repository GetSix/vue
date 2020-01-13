<template>
    <div class="eat">
        <van-sticky>
          <van-search shape="round" placeholder="请输入商品名称" v-model="value" />
          <div style=" width:100%; height:45px; margin-top:-2px;  background-color:#fff; ">
              <div class="todayMenu">今日菜单</div>
          </div>
        </van-sticky>
      <div class="todayMenuWrapper">
        <div class="menuList">
          <ul>
            <li class="menuItem" v-for="item in 10" :key="item">家常菜</li>
          </ul>
        </div>
         <div class="menuAll" @click="show=!show">
          <div v-show="!show">
               全部
          <van-icon name="arrow-down" />
          </div>
          <div v-show="show">
               收起
          <van-icon name="arrow-up" />
          </div>
        </div>
      </div>
      <div class="allMenuWrapper">
          <div class="menuLists" v-if="show">
            <div class="menuWrapper">
              <ul class="contentTip"></ul>
              <span class="menuCategoryTitle">菜单分类</span>
              <ul class="contentTip">
                <li class="item" v-for="item in 40" :key="item">家常菜</li>
              </ul>
            </div>
          </div>

        <div v-if="!show" style="margin-bottom:65px;">
        <van-grid :border="false" :column-num="2" >
          <van-grid-item v-for="item in menu" :key="item.id">
            <van-image :radius=20  :src="item.img" />
            <h3>{{item.title}}</h3>
            <div class="head">
              <van-image round width="35px" height="35px" :src="item.head"/>
              <span>{{item.text}}</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>

      </div>
      

    </div>
</template>
<script>
export default {
  name: 'eat',
  data() {
    return {
      value:'',
      show:false,
      menu:[{
        id:1,
        img:'https://img.ddimg.mobi/recipe/e4ac24825c1151569395541515.jpg?width=1600&height=1070',
        title:'松鼠桂鱼|挑战自己',
        head:'http://img.ddimg.mobi/recipe/90c6caa84d9251561628540222.png',
        text:'叮咚买菜',
      },{
        id:2,
        img:'http://img.ddimg.mobi/recipe/0d788bb4244681550475160522.jpg?width=700&height=523',
        title:'十个步骤教你吃螃蟹',
        head:'http://img.ddimg.mobi/recipe/1902cbe97c6711550022999492.jpg',
        text:'肖艾米',
      },{
        id:3,
        img:'http://img.ddimg.mobi/recipe/8f904e6310e8f1551947565427.jpg?width=1248&height=936',
        title:'葱油鲈鱼',
        head:'http://img.ddimg.mobi/recipe/ec44af48c47f51550645288982.jpg',
        text:'卡米拉',
      },{
        id:4,
        img:'http://ddimg.ddxq.mobi/3969b80b4145c8bfaa28853134b93a87.jpg?width=600&height=456',
        title:'红烧冬瓜',
        head:'https://img.ddimg.mobi/recipe/4f29af68700381528874870762.jpg',
        text:'下山虎虎',
      },{
        id:5,
        img:'http://ddimg.ddxq.mobi/e09a7e74816a57e2c0b264b522455376.jpg?width=450&height=312',
        title:'肉丝炒素鸡',
        head:'https://img.ddimg.mobi/recipe/5c9f6fcd799ed1528879181375.jpg',
        text:'圆猪猪',
      },{
        id:6,
        img:'http://img.ddimg.mobi/recipe/836e791f9bf1547868145897.jpg?width=600&height=450',
        title:'胡萝卜烧牛腩',
        head:'http://img.ddimg.mobi/recipe/029838c089c61545120045386.jpg',
        text:'菊娜JUJU',
      },{
        id:7,
        img:'http://ddimg.ddxq.mobi/8b25b7d20fd0555aca7a57e27c7ae043.jpg?width=640&height=640',
        title:'快手蚝汁鲍鱼',
        head:'https://img.ddimg.mobi/recipe/72f31dcefb3361533292137669.jpg',
        text:'堂妈小厨',
      },{
        id:8,
        img:'http://ddimg.ddxq.mobi/302ca9d562262cc8d80af6b4b5598fda.jpg?width=466&height=700',
        title:'快手白灼金针菇',
        head:'https://img.ddimg.mobi/recipe/4e33e00b3ed6e1532503295917.jpg',
        text:'月亮晶晶',
      },{
        id:9,
        img:'http://ddimg.ddxq.mobi/b75251b8105561529629585310.jpg?width=450&height=337',
        title:'美极盐酥虾',
        head:'https://img.ddimg.mobi/recipe/5c9f6fcd799ed1528879181375.jpg',
        text:'圆猪猪',
      },{
        id:10,
        img:'http://img.ddimg.mobi/recipe/749b6aa73794c1551753585336.jpg?width=600&height=450',
        title:'小炒牛肉丝',
        head:'http://img.ddimg.mobi/recipe/029838c089c61545120045386.jpg',
        text:'菊娜JUJU',
      },{
        id:11,
        img:'http://ddimg.ddxq.mobi/4030d7ed6a748fea49d8b024ea051702.jpg?width=660&height=440',
        title:'原味松饼',
        head:'https://img.ddimg.mobi/recipe/0e433b02e6dcb1539252833208.jpg',
        text:'肖先生的餐桌',
      },{
        id:12,
        img:'http://img.ddimg.mobi/recipe/6c5e5171079771545106465510.jpg?width=660&height=440',
        title:'芦笋口蘑',
        head:'https://img.ddimg.mobi/recipe/d5444c83277df1531389425582.png',
        text:'橙小酱',
      },{
        id:13,
        img:'http://ddimg.ddxq.mobi/0a0a9887aac4d3280c51ad8d56854e64.jpg?width=600&height=555',
        title:'葱油酥饼',
        head:'https://img.ddimg.mobi/recipe/60125b4b42a681531389233500.png',
        text:'烟火间',
      },{
        id:14,
        img:'https://img.ddimg.mobi/recipe/dd7702f442aff1561101095198.jpg?width=783&height=438',
        title:'鸡爪蟹煲',
        head:'http://img.ddimg.mobi/recipe/d570c494c421c1550545237691.jpg',
        text:'美姐姐的小资生活',
      },{
        id:15,
        img:'http://ddimg.ddxq.mobi/6bcf7d05a46761530525277127.jpg?width=610&height=458',
        title:'黄金玉米烙',
        head:'https://img.ddimg.mobi/recipe/4b6c4ff3761bf1528874302007.jpg',
        text:'玉池桃红',
      },{
        id:16,
        img:'https://img.ddimg.mobi/recipe/7cd00a244dd3f1568172596362.jpg?width=1000&height=663',
        title:'葱香干锅茶树菇',
        head:'http://img.ddimg.mobi/recipe/bedce03fb7e11565581743424.jpg',
        text:'小美的美食',
      },{
        id:17,
        img:'http://img.ddimg.mobi/recipe/230249efa9a6d1554111413551.jpg?width=1200&height=800',
        title:'红烧带鱼|meggy跳舞的苹果',
        head:'http://img.ddimg.mobi/recipe/e7b6dc20acf361552287976801.jpg',
        text:'meggy跳舞的苹果',
      },{
        id:18,
        img:'http://ddimg.ddxq.mobi/1a400b5307a391526612801728.png?width=644&height=483',
        title:'白灼秋葵',
        head:'https://img.ddimg.mobi/recipe/23cf8844041251558333821129.jpg',
        text:'兔高兴',
      }],
    }
  },
  components: {
  },
}
</script>
<style scoped>
/* 让menuList滚动条隐藏起来  */
 ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }

.todayMenu{
    display: inline-block;
    border-left: 4px #3cb963 solid;
    padding-left: 8px;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    font-size: 18px;
    float: left;
    margin-left: 15px;
    margin-bottom: 10px;
}
.todayMenuWrapper{
    width: 100%;
    height: 35px;
    white-space: nowrap;
    border-bottom: solid 1px #e8e9e8;
    overflow: hidden;
    position: fixed;
    z-index: 999;
    top: 85px;
    background-color: white;
}
 .menuList{
    width: 80%;
    overflow: hidden;
    overflow-x: auto;
    display: flex;
    flex-flow: row wrap;
}
.menuItem{
  margin-right: 5px;
    display: inline-block;
    font-size: 14px;
    padding: 8px;
    border: 1px solid #dedede;
    border-radius: 20px;
    padding: 5px;
}
 .menuAll{
    position: absolute;
    top: 0;
    right: 0;
    line-height: 35px;
    margin-right: 10px;
    font-size: 14px;
    color: gray;
}

.menuLists{
    width: 100%;
    background-color: white;
    overflow: auto;
}
.allMenuWrapper{
  margin-top: 15px;
  width: 100%;
  overflow-y: hidden;
}
.contentTip{
  padding: 8px;
    display: flex;
    flex-flow: row wrap;
}
.menuCategoryTitle{
  font-size: 16px;
    color: grey;
    float: left;
    width: 100%;
}
.contentTip{
    padding: 8px;
    display: flex;
    flex-flow: row wrap;
}
.item{
    text-align: center;
    margin-right: 10px;
    margin-top: 8px;
    width: 50px;
    line-height: 32px;
    height: 32px;
    font-size: 14px;
    border-radius: 15px;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid #dedede;
}
h3{
  width: 100%;
  text-align: left;
}
.head{
  height:35px;
 width:100%;
 text-align: left;
}
.head span{
  margin-left: 10px;
  color: #999;
  font-size: 18px;
}
</style>