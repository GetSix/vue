<template>
    <div class="eat">
      <van-sticky>
          <van-search shape="round" placeholder="请输入商品名称" v-model="value" />
          <div style=" width:100%; height:45px; background-color:#fff; ">
              <div class="todayMenu">今日菜单</div>
          </div>
      </van-sticky>
      <div class="todayMenuWrapper">
        <div class="menuList">
          <ul>
            <li class="menuItem" v-for="item in 10" :key="item">家常菜</li>
          </ul>
        </div>
         <div class="menuAll">
          全部
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div class="allMenuWrapper">
          <div class="menuLists">
            <div class="menuWrapper">
              <ul class="contentTip"></ul>
              <span class="menuCategoryTitle">菜单分类</span>
              <ul class="contentTip">
                <li class="item" v-for="item in 40" :key="item">家常菜</li>
              </ul>
          </div>

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
    }
  },
  components: {
  },
}
</script>
<style scoped>
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
    margin-right: 0.9rem;
    font-size: 0.6rem;
    color: gray;
}

.menuLists{
    width: 100%;
    background-color: white;
    overflow: auto;
}
.allMenuWrapper{
  margin-top: 15px;
  height: 450px;
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
    padding-left: 8px;
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
    width: 3.3rem;
    line-height: 1.5rem;
    height: 1.5rem;
    font-size: 0.6rem;
    border-radius: 1rem;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid #dedede;
}
</style>