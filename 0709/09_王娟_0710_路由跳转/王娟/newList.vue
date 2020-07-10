<template>
    <div>
        <!-- ============== 区域选择 ================ -->
        <div class="search-div">
            
            <span class="tip-span">请选择您要查询的城市</span>
            <!-- 省份 -->
            <select class="province-select" name="" id=""  @change="selectProvince">
                <option value="" v-for="(pro,index) in provinces" :key=index :value="pro">{{pro}}</option>
            </select>
            <!-- 城市 -->
            <select class="city-select" name="" id="" @change="selectCity">
                <option value="" v-for="(city,index) in currentCities" :key=index :value="city.name">{{city.name}}</option>
            </select>
            <!-- 用户名 -->
            <span v-if="isLogin" class="welcome-user-span">您好，{{currentUsr}}</span>
            <Button type="success"  v-if="isLogin" @click="exit()">退出</Button>
            <!-- =========登录弹出框 =========== -->
            <Button type="primary"  @click="logModal = true" v-if="!isLogin">登录</Button>
            <!-- 登录框 -->
            <Modal
                v-model="logModal"
                title="登录界面"
                width="400"
                :closable="false"
                :mask-closable="false"
                ok-text="登录"
                @on-ok="log"
                @on-cancel="cancel">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <!-- <FormItem>
                        <Button type="warning" @click="handleSubmit('formInline')">登　录</Button>
                    </FormItem> -->
                </Form>
                <div slot="footer">
                    <Button type="primary" @click="log()">登录</Button>
                    <Button  @click="hideModel('logModal')" >取消</Button>
                </div>
             </Modal>
            <Button type="success"  v-if="!isLogin" @click="regist()">注册</Button>
           
            
            <!-- <button class="search-btn" @click="searchWeather">搜索</button> -->
        </div>
        <!-- ============= 天气预报 =========== -->
        <div class="weather-list-div " id="table-div">
            <Table :columns="tableHead" size="small" :data="newsList">
                <template slot-scope="{ row }" slot="name">
                    <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="warning" size="small" style="margin-right: 5px" @click="show(index)">查看详情</Button>
                    <!-- <Button type="error" size="small" @click="remove(index)">Delete</Button> -->
                </template>

            </Table>
        </div>
    </div>
</template>
<script>
    import Item from './item'
    import axios from 'axios'
    export default{
        name:"NewList",
        components:{
            "item":Item
        },
        created(){
            this.initSelect();
        },
        data(){
            return {
                scroll:null,
                isLogin:window.sessionStorage.getItem("isLogin"),
                currentUsr:window.sessionStorage.getItem("user"),
                provinces:[],     //省份列表
                currentCities:[], //省份对应的城市列表
                currentPro:"北京市",
                currentDistrict:"北京市",
                newsList:[],  //未来一周天气情况
                logModal: false,
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
                },
                // 表格数据
                tableHead:[
                    {
                        title:'日期',
                        key:"date"
                    },
                    {
                        title:'星期',
                        key:'week'
                    },
                    {
                        title:'天气',
                        key:'weather'
                    },
                    // {
                    //     title:'最低温度',
                    //     key:'lowest'
                    // },
                    // {
                    //     title:'最高温度',
                    //     key:'highest'
                    // },
                    // {
                    //     title:'建议',
                    //     key:'tips'
                    // },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }

                ]
            }
        },
        computed: {
            getTempArea:function(low,high){
                return `${low}℃~${high}℃`
            }
        },
        
        methods: {
            //初始化下拉列表
            initSelect(){
                const pro = new Promise((resolve,reject)=>{
                   this.getProvinces();
                   resolve();
                });
                pro.then((res)=>{
                    this.getCities(this.currentPro);
                    this.searchWeather(this.currentDistrict);
                });
            },
            // 选择省份
            selectProvince(e){
                this.getCities(e.target.value);
            },
            // 选择城市
            selectCity(e){
                this.currentDistrict = e.target.value;
                this.searchWeather(this.currentDistrict);
            },
            // 获取省份
            getProvinces(){
                // 请求本地数据
                axios.get("../../static/province.json").then(res => {   
                    let provinceList = res["data"].provinceList;
                    this.provinces =provinceList;
                    this.currentPro = provinceList[0];
                })
            },
            // 获取指定省份下的城市列表
            getCities(pro){
                console.log(this.currentPro);
                axios.get(`https://restapi.amap.com/v3/config/district?keywords=${pro}`,{
                    params:{
                        key:"2fb1821c3d0aba96b60c173f4df84c08",
                        subdistrict:2, //返回下一级行政区；
                        extension:"base"
                    }
                })
                .then(res=>{
                    let temp =  res["data"].districts;
                    if(temp.length!=0)
                    {
                         this.currentCities = res["data"].districts[0].districts;
                         this.currentDistrict = this.currentCities[0].name;
                    }else{  //直辖市
                        this.currentCities = ["data"].districts;
                        this.currentDistrict = pro;
                    }
                   
                    this.searchWeather(this.currentDistrict);
                }).catch(function(err){
                    console.log(err)
                })
            },
            // 查询天气
            searchWeather(){
                axios.get(`http://api.tianapi.com/txapi/tianqi/index?city=${this.currentDistrict}`,{
                    params:{
                        key:"765b7cc79d9c596dbd686d890cb65d9c"
                    }
                }).then(res=>{
                    this.newsList = res["data"].newslist;
                    console.log(this.newsList);
                    
            }).catch(function(err){
                console.log(error);
            })},
            // ========== 登录 =========
            log () {
                if(this.formInline.user == 'W_Juan' && this.formInline.password == '666666')
                {
                    window.sessionStorage.setItem("user",this.formInline.user);
                    window.sessionStorage.setItem("isLogin",true);
                    this.$Message["success"]({background:true,content:"登录成功"});
                    console.log("log,"+window.sessionStorage.getItem("isLogin"));
                    this.isLogin = true;
                    this.logModal = false;
                    this.currentUsr = this.formInline.user;
                    // this.$Message["success"].info('登录成功');
                }else{
                    window.sessionStorage.setItem("isLog",true);
                    this.$Message["warning"]({background:true,content:"用户名或密码输入错误"});
                }
            },
            regist(){
                this.$Modal.confirm({
                        title: '友情提示',
                        content: '<p>功能开发中，敬请期待……</p>',
                        okText: 'OK',
                        cancelText: 'Cancel'
                    });
            },
            cancel () {
                    this.logModal = false;
            },
            show(index){   //显示详情页面
                console.log(this.newsList[index]);
                this.$router.push({
                    name:"Detail",  //或name:"Detail"
                    params:this.newsList[index]
                    }
                )
                // this.$router.replace("/detail")
            },
            exit(){
                window.sessionStorage.setItem("isLogin",false);
                this.isLogin = window.sessionStorage.getItem("isLogin");
                console.log(this.isLogin);
            }
    }
}
</script>
<style>
    /* 登录界面 */
    .ivu-modal-body{
        display: flex;
        flex-direction: column;
    }
    .ivu-form-inline .ivu-form-item
    {
        display: flex;
        justify-content: center;
    }

    /* 设置字体图标 */
    .iconfont{
        font-size: 20px;
        font-weight: bold;
        color:orange
    
    }
    .tip-span,.welcome-user-span{
        color: white;
        padding: 6px;
        background: #f90;
        border: 1px solid #f90;
        border-radius: 5px;
    }
    .ivu-table-row{
        cursor: pointer;
    }
    /* 设置select */
    .province-select,.city-select{
        min-width: 100px;
        padding: 6px 6px;
        border-radius: 5px;
    }
    /* 天气显示情况 */
    .weather-list-div{
        width: 40%;
        margin:20px auto;
        height: 1200px;
    }
    .item{
        border-bottom: 1px solid gray;
        display: inline-block;
        width: 70%;
        margin: 0 auto;
    }
    
</style>
