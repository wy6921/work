<template>
  <div id="citylist">
    <!-- <img src="./assets/logo.png"> -->

    <h1 style="margin:30px;">城市空气质量信息监察平台</h1>

    <div class="lists">
    <Table stripe :columns="columns1" :data="myData"></Table>
    </div>
    <!-- <AxiosTest></AxiosTest> -->

    <Button @click="exit" type="primary">{{exitMsg}}</Button>
  </div>
</template>




<script>

import Item from './Item'
// import AxiosTest from './components/AxiosTest'

export default {
  name: 'CityList',
  components: {
    'Item': Item
    // 'AxiosTest':AxiosTest
  },
 beforeRouteLeave (to, from, next) {
            //if(this.$route.query.status===true){
            if(window.localStorage.status){
                next()
            }else{
                if(confirm('请先登录') === true){
                    next(),
                    this.$router.push({path:'/login'})
                }else{
                    next(false)
                }
            }
  },
  data () {
    return {
      exitMsg:'退出登录',
      value:'等待输入……',
      myData:[],
      columns1: [
                    {
                        title: '城市',
                        key: 'city'
                    },
                    {
                        title: '实时温度',
                        key: 'temp'
                    },
                    {
                        title: '天气状况',
                        key: 'weather'
                    },
                    {
                        title:'能见度',
                        key:'wisib'
                    },
                    {
                        title:'湿度',
                        key:'humidity'
                    },
                    {
                        title:'更新时间',
                        key:'uptime'
                    },
                    {
                        title:'操作',
                        key:'',
                        render:(h,params)=>{
                            return h('Button',{
                                props:{
                                    type:'primary',
                                    size:'small'
                                },
                                style:{
                                    marginRight:'5px'
                                },
                                on:{
                                    click:()=>{
                                        this.$router.push({path:'/myrouter'})
                                    }
                                }
                            },'详情')
                        }

                    }
                ],
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
    }
  },
  methods:{
      handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            exit(){
                this.exitMsg='已退出登录';
                localStorage.clear();  // 清除用户登录状态
            },
            getButtonStatus(){
                if(window.localStorage.status){
                    this.exitMsg='退出登录'
                }
            }
  },
  created () {   
      this.$axios({
      method: 'get',
      url:  '//api.help.bj.cn/apis/weather/?id=101060101'
    }).then((response) => {
      this.myData.push(response.data),
      console.log(this.myData)
    }).catch((error) => {
      console.log(error)
    }),

    this.$axios({
      method: 'get',
      url:  '//api.help.bj.cn/apis/weather/?id=101050210'
    }).then((response) => {
      this.myData.push(response.data),
      console.log(this.myData)
    }).catch((error) => {
      console.log(error)
    }),

    this.$axios({
      method: 'get',
      url:  '//api.help.bj.cn/apis/weather/?id=101120201'
    }).then((response) => {
      this.myData.push(response.data),
      console.log(this.myData)
    }).catch((error) => {
      console.log(error)
    }),

    this.$axios({
      method: 'get',
      url:  '//api.help.bj.cn/apis/weather/?id=101200403'
    }).then((response) => {
      this.myData.push(response.data),
      console.log(this.myData)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style lang='less' scope>

.lists{
    margin:10px 200px 30px;
}
.ivu-table{
    font-size: 18px;
}

</style>


