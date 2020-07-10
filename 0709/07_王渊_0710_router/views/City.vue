<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <span v-if="loginFlag"><span class="user">你好，{{usr}},</span><i-button @click="deleteUser">注销</i-button></span>                  
                <i-button @click="toLogin" v-else>登陆</i-button>                 

            </div>
        </div>
        <div class="layout-header">
            
        </div>
        <div class="layout-main">
            <h2>热门城市</h2>

            <i-button v-for="city in hotCities" :key="city.id" @click="jumpToDetial(city.name)">{{city.name}}</i-button>
        </div>
        
    </div>
    
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'City',
        data () {
            return {
                cityList: [],
                hotCities: [],
                loginFlag: false,
                city: '',
                usr: ''
            }
        },
        mounted() {
            let user = JSON.parse(localStorage.getItem('user'))
            // debugger
            if(!user){
                this.loginFlag = false
            }else{
                this.loginFlag = true
                this.usr = user
            }
            console.log(user,'login')
            this.getCityInfo()
        },
        methods: {
           getCityInfo () {
            axios.get('/static/city.json').then((res) => {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data // 城市数据
                    this.hotCities = data.hotCities
                }
            })      
            },
            jumpToDetial (cityName) {
                // if(!this.loginFlag){
                //     this.city = cityName
                //     this.toLogin()
                // } else {
                    this.$router.push({
                    name:'Detail',
                    params: {
                        cityName: cityName
                    }
                })
                // }
                
            },
            toLogin() { // 直接点击登陆
                this.$router.push({
                    name:'Login',
                    params: {
                        cityName: this.city
                    }
                })
            },
            deleteUser() {
                localStorage.removeItem('user')
                this.loginFlag = false
            }
        }
    }
</script>

<style lang="less">
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    
    .layout-header{
        height: 10px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main .user{
        color: white;
        margin-right: 20px;
    }
    .layout-main {
            height: 500px;
    }
</style>