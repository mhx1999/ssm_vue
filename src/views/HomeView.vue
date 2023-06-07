<template>
  <div>
<!--增加按钮和搜索框-->

  <div style="margin: 10px 5px">
    <el-button type="primary" @click="add">新增</el-button>
    <el-button>其他</el-button>
  </div>
<div style="margin: 10px 5px">
  <el-input v-model="search" style="width: 30%" placeholder="请输入关键字" />
  <el-button style="margin-left: 10px" type="primary">查找</el-button>
</div>


    <el-table :data="tableData" stripe style="width: 100%">
     <el-table-column prop="id" label="ID" sortable></el-table-column>
      <el-table-column prop="name" label="家居名" sortable></el-table-column>
      <el-table-column prop="maker" label="厂商" ></el-table-column>
      <el-table-column prop="price" label="价格" ></el-table-column>
      <el-table-column prop="sales" label="销量" ></el-table-column>
      <el-table-column prop="stock" label="库存" ></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template #default>
        <el-button  type="text" >编辑</el-button>
        <el-button  type="text" >删除</el-button>

</template>
    </el-table-column>
    </el-table>

    <el-dialog title="提示" v-model="dialogVisible" wideth="30%">
      <el-form :model="form" label-width="120px">
        <el-form-item label="家居名">
          <el-input v-model="form.name" style="width: 80%"/>
        </el-form-item>
        <el-form-item label="厂商">
          <el-input v-model="form.maker" style="width: 80%"/>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price" style="width: 80%"/>
        </el-form-item>
        <el-form-item label="销量">
          <el-input v-model="form.sales" style="width: 80%"/>
        </el-form-item>
        <el-form-item label="库存">
          <el-input v-model="form.stock" style="width: 80%"/>
        </el-form-item>
      </el-form>
<template #footer>
  <span class="dialog-footer">
    <el-button @click="dialogVisible =false">取消</el-button>
    <el-button type="primary" @click="save">确定</el-button>
  </span>
</template>







    </el-dialog>




  </div>
</template>












<script>

import request from "@/utils/request";

export default {
  name: 'HomeView',
  components: {

  },
  data(){

    return{
      search:'',
      dialogVisible:false,
      form:{},
      tableData: [

      ]
    }
  },
  created() {
    this.list();
  },
  methods:{
    add(){
      this.dialogVisible = true
      this.form = {}
    }
    ,
    save(){
      request.post("/api/save",this.form).then(res=>{

        console.log(res)
        this.dialogVisible =false
        this.list()
      })

    }
    ,
    //编写list方法，请求返回家居信息

    list(){
      request.get("/api/furns").then(res =>{

        console.log("res=",res)
        this.tableData = res.extend.furnList
      })


    }

  }

}
</script>
