<template>
  <div class="home">
    <div class="head">
        <van-sticky>
            <van-search shape="round" placeholder="请输入商品名称" v-model="value" />
        </van-sticky>
      <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px;">
        <van-swipe-item><img  src="https://img.ddimg.mobi/0ec4a32cbd84b1575892960355.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://img.ddimg.mobi/d3d83d40395221575808767181.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://img.ddimg.mobi/b7efb94de888d1575820057576.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://img.ddimg.mobi/eb669d9799b8f1575907727553.jpg" alt=""></van-swipe-item>
      </van-swipe>
      </div>

    <van-row type="flex" justify="center">
      <van-col span="9">  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACp0lEQVRYR+1VTU7bYBSc5yRSWDU3AE7QsKlkNg0SWRdO0JBwADhB4QSFfeOaE0DXjlSzIVI3JCdojpCuGsk/Uz0bF8eJbSLa0kW8i/K99803b2ae4IU/eeH7sQawZuD/YqB132lUZ5VrAVqruoOA69eDQ3fHnq5SO8fA/rB7JpAPAMcAVmnUAOQ1wfOBaZ09GwAhewPzk/vURvvD45aAXwHaIO1snbP7+TavV4aB4xYQtnyEtmvak9UB5FQQI28j2Fs2HmkNO1tVGO/zLhuY1nkZkEcGFk5ekWiI4F3eeKSgOOrmmP1Sp6RGcKtijEUsb3WUft0fVWeVCUj6G+F2lgWJlV9t5jNQroUEQPLK32ImRhRMQTZFpAH9Dbq+hJfJiEtfV0a//p8F0P7WaTKoKBOvltWTnCZsRAAe7bf0+K1jWoW5kAVQBDq5i+TpYNe6+OcAlB0ElXsAV47Z78yNQB1Ro2x6GxynxaJFXg2TvJQrYkB7KiNpW7eHPQKMmF2ahEkQtYfdDomPkYCij7ZXD0+zQJYBiF9qXAMSAVABohocOW/s0f5dbyKCTXVYLgCSDUNwTeAHCE3FphapzQZmfy895yyAyFk/je8KnMQXPRtlwYP4ajPjRm3qIdjO2wU2KE0ImqgEO4pam7SHXTf2N+fyXoAtQDoKDqCrtSI4SISWFjqJGwgamhXKdA6Ax/elg6jYLYvaT++UxcDj2KuH8xqIY7n6MDOeKG0AjxzTspXW2sy415mGxKGIFGxLbRxtVdsxraOIgbveTRLJgOFqQqqWcoNoPkw4SYnp0tntn5QFVHvYHUUrmoyAxkLm2DGtudQtTMIIhF85e2BiTMLW8Ci7XP+PGatcEDgAMRWB69WDk4Vd8JRmf/PMH9kFzwG4BrBm4MUZ+AXCIKXldoPblAAAAABJRU5ErkJggg==" alt="">
          <span style="font-size:12px;">
            最快29分钟送达
          </span></van-col>
      <van-col span="7"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADrElEQVRYR8VXzW7aQBD+xiZSKlVq3qCJ1HvhUsVcQlU4hz5BCfReeILQJyi510CeoMnZVKEXkHoJuVcqeYNEqpRK2J5q139re02gl+zJ0s7OfDPzzY8JT3zoie1jKwDvZp0mgY8IVAOhnALPWIB4wcQXk8PR5aaObQSgMW+3AJwCtL+JYma+c8mvTK3x8jH5tQAaP1tluOYo6y0zbol4ycBUGCCgBmAPoNeJQT5xrOH4vwGE4R4R0Z5QwsA9wAMX/rjIs9q8tV9ioynkJ9Xh4DHjIfi8WH3+sUbgK+XmfLXrdaeV8d0mSlUZoQvgUwKf6yKSS4EIO7vGVew5c29Tb3TgGvP2FKAjeWd6FefNeKHK5QEoDzhjvD5rd8kgdg7tM50x3b1IpUH4Fsjz0rGGB4UAArbTSIoyLidVW+ZTHElIz7wOFY0da3iiKmrMO4JwHwK+0NuJ9VUSVL6ddQYgfAru+PPEGvaju1QE6rPOkggvBeFceGWVbLXr1l7pr7kk4EUWRNo47t1db1/lS/ptOgoxgJSHjDOnanezYZb88MypCgIgoSP0HPdkerVsnoWe+rzdJ9Cp+PYZ779X7QvxnQBQwqQji5qKNIgwHig2LiREie7A/B1QIXEwARCST4R/Ytmy9tUjwrjzEDQaH/4rQmkA8p5LH9j4w3C7Boxf4n71jG90JRulGIyFU7Ur6QjM24ugk/EPxxqKzpY6jfg+8phT95QaK3m2SzIqFeZYtnReiUAn1KgHEKMPzQrh6LH6LSPMuJ1U7dzcUKthawABk0vxBPTZL5tEX4RBj7lnkBE3GHfXXehSoFaLBkDUsfQRyKZEbdfZus/KxgRen4KkZUboVEVqGQVEXpcCHkyqw14edOcuKOHEyZgDso2GIVXrNFJSn0eP47Ir5ICQyDpR1Gf0jQg4dyxbLCHxCXo6q81Jmf98AyCelD7TIGo0cfgL+kyqFatlsoJ3sG6j2YYDahPKVkh6Fqh7gNIsdKTaBkB91rkgwnGYvNSmtHYcA5ybehGYVGvVzHlt6DVNLgdA1vuDuRBTMURcCEISSxAus2QkxE0GkGjxukGlXUqzU08sn2R6vSJD2RTJ3RDmKFxWg+uCKBVuxfnRK6t/vG7vDyvlGKC4goJllprqgqICXruWh+kYJwRSnjIWTEnppbyNxfjHatdvrltmN/oxCRjv9+PlsqjXKoYZRr/I640joM0tG00iyF2RQZKEBJaDiBkXVPKnm3IlePvE58kB/AMzNRo/Tu+74QAAAABJRU5ErkJggg==" alt="">
       <span style="font-size:12px;">
             0元配送费
          </span></van-col>
      <van-col span="6"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACuklEQVRYR+1XQW7aUBB9zyYSWTU9QblBYFMJNnVVWDc9QQjuvuQEyQ1K9oWQE5S9qUI2WOqmcIJyg5BVIoE91ffHaWI+2BQpkar8DZIZ/3nzZubNmHjmw2f2j40A1H7Wi2Fg71OkCLII9asOOQJkIODEsoOx97Y7yhqYEYDzq763c8t9IR0CBQiLILSzrEcwAmUUgQvD0WxXxoNSd5p8fQlAzW8MAL4z+5GxCCfRxbAGc8wnyi6HXAEIHQWUlALAfdP7Iuj1K+1PD/8zAHBFG8gVhFEUAmvSL38bZA1e2VX9zw4kLBIsgOLEoLxy+5HPlQCShps4N9nWfB3YC4AXBv5/Bj4M3QNCzgU8+lFp9+KOeJIuqA3dFogvkYqIHPcrndaTAFDSnbuzvxNwTM7Vs60YiGklceyVO92HQqMGlMytS5J7AtzQDhzTMNoKQM1v1AGeL6Jr9SudYx3V3+eAjGf50DENnK0ZWHIWTzqwrscGzrxKu7lOrrdi4L6QIrrtHok32i9uCGkm05IEEo33O/s60yyo+u6UwKtZPnhtolNfZqn22oMd1rMsH2oyEnKp0uSVO4/2iqVpWB26KsKPgBylRZZ1Qlb9xinBEwAXXrmt07Y4poVEF5xg5FXapaxOVtlFLXpr/dZdwvfJvcK4klWH7kTlOSkm/wKm5ruqbQ9N9Kv7zADuc6YKbRl1ViDVYaNJ8mtkbwclU72s3IoTPb5xPTyU5XX1tHYtfyxA6M13g6NVQhOz4vj1Qg72eSzLacWc+l0QyTDRVa0pIlMQrXk+PEsCWRTbCclIkJRGADxIW2ZTAajLoqjEbun2jCbdlERPYF3oQgoPEauipuJilg+aaWytLMJVRaYFJTxd891wJbBO06JeqwNZKlwxsiN2U4CDRRS9GYPWoNyNPlQ2OZlSsMmFm9o+O4A/MHydMIPpgfEAAAAASUVORK5CYII=" alt="">
       <span style="font-size:12px;">
           安心退
          </span>
      </van-col>
    </van-row>
    </div>
    <div class="banner">
      <img src="http://518taole.7-orange.cn/homead2.gif" alt="">
    </div>
      <van-grid square :column-num="5">
      <van-grid-item 
        v-for="value in list"
        :key="value.id"
      >
      <img :src="value.img" alt="">
      <p>{{ value.text }}</p>
      </van-grid-item>
      </van-grid>
      <div class="member-warp">
        <div class="member">
          <span class="left" >加入会员·每年预计节省806元</span>
          <span class="right">5折开卡></span>
        </div>
      </div>
      <div class="title">
        限时抢购
      </div>
      <van-count-down :time="3000000000">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div class="more">更多</div>
      <div>
        
      </div>
</div>

</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      value:'',
      list:[{
        id:1,
        img:'https://img.ddimg.mobi/faed0c89b1ac61561979943620.jpg',
        text:'安心蔬菜'
      },{
        id:2,
        img:'https://img.ddimg.mobi/a79822f496ec71561980537120.jpg',
        text:'豆制品'
      },{
        id:3,
        img:'https://img.ddimg.mobi/febc9219e5f061561980283162.jpg',
        text:'水果'
      },{
        id:4,
        img:'https://img.ddimg.mobi/57742da7f00ab1562725189267.jpg',
        text:'肉禽蛋'
      },{
        id:5,
        img:'https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg',
        text:'海鲜水产'
      },{
        id:6,
        img:'https://img.ddimg.mobi/a19a8501bf4041561980956934.jpg',
        text:'乳品烘焙'
      },{
        id:7,
        img:'https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg',
        text:'营养早餐'
      },{
        id:8,
        img:'https://img.ddimg.mobi/cc39ecee3cee51564386403745.jpg',
        text:'叮咚心选'
      },{
        id:9,
        img:'https://img.ddimg.mobi/67260446df1451561980456552.jpg',
        text:'米面粮油'
      },{
        id:10,
        img:'https://img.ddimg.mobi/17964fae5012d1561980650167.jpg',
        text:'调味品'
      }],
    }
  },
}
</script>
<style scoped>
  .head{
    background: url('http://518taole.7-orange.cn/backImage.png') no-repeat;
    height: 300px;
  }
  .swipe{
    margin-left: 10px;
    margin-right: 10px;
  }
  .van-swipe-item img{
    width: 100%;
    height: 100%;
  }
  .van-col{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .banner img{
    width:100%;
    height:100%;
  }
  .van-grid-item {
    font-size: 14px;
  }
  .van-grid-item img{
    width: 30px;
    height: 30px;
    margin-top: 15px;
  }
  .member-warp{
    padding: 0 15px;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .member-warp .member{
    background-color: #3BBa63;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin: 20px auto;
  }
  .member span{
    line-height: 35px;
    font-size: 14px;
    color: white;
  }
  .member .left{
    margin-right: 80px;
  }
  .title{
    display: inline-block;
    border-left: 4px #3cb963 solid;
    padding-left: 0.3125rem;
    height: 1.3125rem;
    line-height: 1.3125rem;
    vertical-align: middle;
    font-size: 1.1875rem;
    float: left;
    margin-left: 15px;
  }
  .van-count-down{
    float: left;
    margin-left: 30px
  }
  .item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #000;
}
.more{
  color: #3cb963;
  float: right;
  margin-right: 15px;
}
</style>
