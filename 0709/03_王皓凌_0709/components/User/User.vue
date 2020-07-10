<template>
  <el-card class="box-card">
<!--添加-->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">

      <el-form :model="form" >
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="name" :rules="[
      { required: true,message: '用户名不能为空'},{ min: 3, max: 8, message:'请输入3~8位的用户名', trigger:'blur'}]">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth"prop="key" :rules="[
      { required: true,message: '密码不能为空'}]">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="mail" :rules="[
      { required: true,message: '邮箱不能为空'},{ type: 'email', message: '请输入正确的邮箱地址'}]">
          <el-input v-model="form.mail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth" prop="tel" :rules="[
      { required: true,message: '手机不能为空'},{ required: true, message:'请输入手机号码'},
        { min: 11, max: 11, message:'请输入11位手机号码', trigger:'blur'},
        {pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
        message:'请输入正确的手机号码'}]">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="adduser()">确 定</el-button>
      </div>
    </el-dialog>

<!--    修改-->
    <el-dialog title="修改用户信息" :visible.sync="userinfoxiugai">

      <el-form :model="form" >
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="name" :rules="[
      { required: true,message: '用户名不能为空'},{ min: 3, max: 8, message:'请输入3~8位的用户名', trigger:'blur'}]">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="mail" :rules="[
      { required: true,message: '邮箱不能为空'},{ type: 'email', message: '请输入正确的邮箱地址'}]">
          <el-input v-model="form.mail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth" prop="tel" :rules="[
      { required: true,message: '手机不能为空'},{ required: true, message:'请输入手机号码'},
        { min: 11, max: 11, message:'请输入11位手机号码', trigger:'blur'},
        {pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
        message:'请输入正确的手机号码'}]">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userinfoxiugai = false">取 消</el-button>
        <el-button type="primary" @click="edit1()">确 定</el-button>
      </div>
    </el-dialog>
<!--修改角色-->
    <el-dialog title="用户角色·" :visible.sync="rolevisable">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.role" placeholder="请选择活动区域">
            <el-option label="主管" value="主管"></el-option>
            <el-option label="副主管" value="副主管"></el-option>
            <el-option label="HR" value="HR"></el-option>
            <el-option label="会计" value="会计"></el-option>
            <el-option label="财务" value="财务"></el-option>
            <el-option label="IT" value="IT"></el-option>
            <el-option label="项目经理" value="项目经理"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="rolevisable = false">取 消</el-button>
        <el-button type="primary" @click="xiugairole()">确 定</el-button>
      </div>
    </el-dialog>
    <!--头部-->
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
<!--内容-->
    <div class="text item">
      <el-input v-model="query" placeholder="请输入内容" style="width: 50%">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="success" @click="dialogFormVisible = true">添加用户</el-button>

    </div>

    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="index"
          prop="index"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="mail"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色">
        </el-table-column>
        <el-table-column
          label="用户状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.staus"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="act"
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" plain type="primary" icon="el-icon-edit" @click="edit(scope.row.id)" circle></el-button>
<!--            编辑功能-->
            <el-button size="mini" plain type="success" icon="el-icon-check" @click="role(scope.row.id)" circle></el-button>
<!--            确认功能-->
            <el-button size="mini" plain type="danger" icon="el-icon-delete" @click="del(scope.row.id)" circle></el-button>
<!--            删除功能-->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>

  </el-card>

</template>

<script>
  export default {
    name: "User",
    created() {
      this.$message({
        message: '列表加载成功',
        type: 'success'
      });
    },
    methods:{
      addDate(){
         var nowDate = new Date();
        let date = {
          year: nowDate.getFullYear(),
          month: nowDate.getMonth() + 1,
          date: nowDate.getDate(),
        }
        this.form.date = date.year + '-' + 0 + date.month + '-' + 0 + date.date;

      },
      role(s){
        this.rolevisable=true
        this.form=this.tableData[s]
        this.userid=s
      },
      adduser(){
        this.addDate()
        this.form.id=this.tableData.length
        this.dialogFormVisible=false
        this.tableData.push(this.form)
        this.form={
          id:'',
            name: '',
            key:'',
            tel:'',
            mail:'',
            date:'',
            staus:''
        }
      },
      edit(s){
        this.userinfoxiugai=true
        this.userid=s
      },
      xiugairole(){
        this.tableData[this.userid].role=this.form.role
        this.userinfoxiugai=false
        this.form={
          id:'',
          name: '',
          key:'',
          tel:'',
          mail:'',
          date:'',
          staus:''
        }
        this.rolevisable = false
      },
      edit1(){
        this.addDate()
        this.tableData[this.userid]=this.form
        this.userinfoxiugai=false
        this.form={
          id:'',
          name: '',
          key:'',
          tel:'',
          mail:'',
          date:'',
          staus:''
        }
      },
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
      },
      del(s) {
        this.$confirm('此操作将永久删除该文用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          console.log(s)
          this.tableData.splice(s, 1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    data(){
      return{
        userid:'',
        rolevisable:false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        userinfoxiugai:false,
        formLabelWidth: '120px',
        form: {
          id:'',
          name: '',
          key:'',
          tel:'',
          mail:'',
          date:'',
          staus:'',
          role:''
        },
        currentPage:1,
        query:'',
        tableData: [{
          id:'0',
          date: '2016-05-02',
          name: '王小虎',
          tel: '15208012092',
          mail:'1171798741@qq.com',
          staus:true,
          role:''
        },
          {
            id:'1',
            date: '2016-05-02',
            name: '王小虎',
            tel: '15208012092',
            mail:'1171798741@qq.com',
            staus:false,
            role:''
          },
          {
            id:'2',
            date: '2016-05-02',
            name: '王小虎',
            tel: '15208012092',
            mail:'1171798741@qq.com',
            staus:true,
            role:''
          },
          {
            id:'3',
            date: '2016-05-02',
            name: '王小虎',
            tel: '15208012092',
            mail:'1171798741@qq.com',
            staus:true,
            role:''
          },
          {
            id:'4',
            date: '2016-05-02',
            name: '王小虎',
            tel: '15208012092',
            mail:'1171798741@qq.com',
            staus:true,
            role:''
          },
          {
            id:'5',
            date: '2016-05-02',
            name: '王小虎',
            tel: '15208012092',
            mail:'1171798741@qq.com',
            staus:true,
            role:''
          },
          {
            id:'6',
            date: '2016-05-02',
            name: '王小虎',
            tel: '15208012092',
            mail:'1171798741@qq.com',
            staus:true,
            role:''
          },
          ]
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>