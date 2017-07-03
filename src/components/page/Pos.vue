<template>
  <div class="hello">
    <!--
      使用element-ui 布局  一行 两列
    -->
      <el-row>
        <el-col :span='7'  class="pos-order" id="order-list">
          <!--订单栏-->
          <el-tabs >
                <el-tab-pane label="点餐" name="first">
                  <!--点餐-->
                     <el-table border style="width:100%" :data="tableData">
                          <el-table-column prop="goodsName" label="商品名称" ></el-table-column>
                          <el-table-column prop="count" label="数量" width='80'></el-table-column>
                          <el-table-column prop="price" label="金额" width='70'></el-table-column>
                          <!--
                            fixed="right" 固定显示
                          -->
                          <el-table-column  label="操作" width='100' fixed="right"> 
                              <template scope="scope">
                                  <el-button type="text" size="small">删除</el-button>
                                  <el-button type="text" size="small">增加</el-button>
                             </template>
                          </el-table-column>
                      </el-table>
                  <div class="btn">
                    <el-button type="warning" >挂单</el-button>
                    <el-button type="danger" >删除</el-button>
                    <el-button type="success" >结账</el-button>
                </div>     
                
                  </el-tab-pane>
                <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
                <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
                 
          </el-tabs>
          </el-col>
        <el-col :span='17' class="pos-goods">商品栏</el-col>
     </el-row> 

  </div>
</template>

<script>
export default {
  name: 'pos',
  data(){
    return {
        tableData: [{
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
          goodsName: '甜筒',
          price: 8,
          count:1
        }]
    }
  },
  // element 是虚拟dom   解决高度不能100%
  // mounted 生命周期 表示 dom加载 完成后
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*高不能 100%*/
  .pos-order{
    background-color: #f9fafc;
    border-right: 1px solid #C0CCDA;
  }
  .btn{
    margin-top: 10px;
  }
</style>
