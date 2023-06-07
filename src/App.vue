<template>
  <div>
<!--引入header组件-->
    <Header/>
  <!-- 主体 -->
        <div style="display: flex">
          <!-- 侧边栏 -->
          <Aside/>
          <!-- 内容区域，表格 ,通过路由来展示-->
          <router-view style="flex: 1"/>
        </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
export  default {
  name :"Latout",
  components:{
    Header,
    Aside
  }
}
</script>
<style>

</style>
