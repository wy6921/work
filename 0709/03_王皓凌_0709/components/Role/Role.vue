<template>

  <el-card>
    <el-dialog title="添加角色" :visible.sync="roles">
      <el-form :model="form" >
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" prop="discrption">
          <el-input v-model="form.discrption" autocomplete="off" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roles = false">取 消</el-button>
        <el-button type="primary" @click="addrole()">确 定</el-button>
      </div>
    </el-dialog>

    <!--    修改-->
    <el-dialog title="添加角色" :visible.sync="rolexiugai">
      <el-form :model="form" >
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" prop="discrption">
          <el-input v-model="form.discrption" autocomplete="off" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="rolexiugai = false">取 消</el-button>
        <el-button type="primary" @click="xiugairole()">确 定</el-button>
      </div>
    </el-dialog>
<!--    面包屑-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
<!--    添加按钮-->
    <el-button style="margin-top:20px " @click="roles=true">添加角色</el-button>
<!--    表格-->
    <el-table
      :data="roleinfo"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="discrption"
        label="角色描述"
        width="200">
      </el-table-column>

      <el-table-column

        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" plain type="primary" icon="el-icon-edit" circle @click="edit(scope.row)"></el-button>
          <el-button size="mini" plain type="danger" icon="el-icon-delete" circle @click="del(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    name: "Role",
    data(){
      return{
        userid:'',
        roles:false,
        rolexiugai:false,
        formLabelWidth: '120px',
        form:{
          id:'',
          name:'',
          discrption:'',
        },
        roleinfo:[
          {
          id:'0',
          name:'主管',
          discrption:'技术负责人',
          },
          {
            id:'1',
            name:'主管',
            discrption:'技术负责人',
          },
          {
            id:'2',
            name:'主管',
            discrption:'技术负责人',
          },
          {
            id:'3',
            name:'主管',
            discrption:'技术负责人',
          },
          {
            id:'4',
            name:'主管',
            discrption:'技术负责人',
          },
          {
            id:'5',
            name:'主管',
            discrption:'技术负责人',
          }
          ]
      }
    },
    methods:{
      addrole(){
        this.form.id=this.roleinfo.length
        this.roleinfo.push(this.form)
        this.roles=false
        this.form={
          id:'',
          name:'',
          discrption:'',
        }
      },
      xiugairole(){
        this.roleinfo[this.userid]=this.form
        this.rolexiugai=false
        this.form={
          id:'',
          name:'',
          discrption:'',
        }
      },
      edit(s){
        this.rolexiugai=true
        this.userid=s.id
      },
      del(s){
        this.roleinfo.splice(s.id,1)
      }
    }
  }
</script>

<style scoped>

</style>