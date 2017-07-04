<template>
  <div class="left-nav">
   <ul>
        <li>
            <i class="icon iconfont icon-wodezichan"></i>
            <div>收银</div>
        </li>

        <li>
            <i class="icon iconfont icon-dianpu"></i>
            <div>店铺</div>
        </li>

        <li>
            <i class="icon iconfont icon-31quanbushangpin"></i>
            <div>商品</div>
        </li>

         <li>
            <i class="icon iconfont icon-huiyuanqia"></i>
            <div>会员</div>
        </li>


        <li>
            <i class="icon iconfont icon-zuanshi"></i>
            <div>统计</div>
        </li>
        <li>
            <i class="icon iconfont icon-shezhi"></i>
            <div>设置</div>
        </li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
    }
  }
}
</script>
<style>
    .left-nav{
        color: #fff;
        background-color: #1D8CE0;
        font-size: 10px;
        height: 100%;
        width: 5%;
        float: left
    }
    .iconfont{
        font-size: 24px
    }
    .left-nav ul{
        margin: 0;
        padding: 0;
    }

    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
        margin: 5px 0;
    }
</style>