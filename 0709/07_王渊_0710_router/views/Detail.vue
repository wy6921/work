<template>
    <div class="detail">
        <h3>{{city}}一周天气</h3>
        <Table id="mygrid" :columns="columns1" :data="itemList" stripe></Table>    
        <router-link to="/"><i-button>返回</i-button></router-link>                 

    </div>
</template>

<script>
    import trance from './components/trance.vue'

    import axios from 'axios'
    export default {
        name: 'Test',
        data () {
            return {
                columns1: [
                    {
                        title: '日期',
                        key: 'date',
                        width: '150px'
                    },
                    {
                        title: '温度',
                        key: 'real',
                        width: '80px'
                    },
                    {
                        title: '天气',
                        key: 'weather',
                        width: '150px'
                    },
                    {
                        title: '温馨提示',
                        key: 'tips',
                        width: '400px'
                    }
                ],
                itemList: [],
                city : '北京',
            }
        },
        components : {
            trance,
        },
        methods: {
            changeBox: function(e) {
             this.type = e.target.value                
            },
            getData: function () {
                axios.get('http://api.tianapi.com/txapi/tianqi/index?',{
                    params:{
                        key: '765b7cc79d9c596dbd686d890cb65d9c',
                        city: this.city
                    }}).then((res) => {                                     
                        this.itemList = res.data.newslist    
                        console.log(this.itemList)
                })
            }
        },
        activated() {// 非常重要      
            this.city = this.$route.params.cityName    
            console.log(this.city) 
        },
        mounted() {            
            this.getData()
        },
    }
</script>
<style lang="less">
    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
            margin: 30px 0;
        }
        #mygrid .ivu-table th {
            text-align: center;

        }
    }
</style>