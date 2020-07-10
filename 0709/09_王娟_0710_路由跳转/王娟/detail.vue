<template>
    <div>
        <h2>{{detail.area}}天气详情</h2>
        <div class="detail">
            <!-- 城市 -->
            <!-- <div class="detail-city-div detail-info-div">
                <span>城市：</span>
                <span>{{detail.city}}</span>
            </div> -->
    
            <!-- 日期 -->
            <div class="detail-data-div detail-info-div">
                <span>日期：</span>
                <span>{{detail.date}},{{detail.week}}</span>
            </div>
    
            <!-- 天气 --> 
            <div class="detail-weather-div detail-info-div">
                <span>天气：</span>
                <span>{{detail.weather}}</span>
            </div>
    
            <!-- 最低温度 -->
            <div class="detail-lowest-div detail-info-div">
                <span>最低温度：</span>
                <span>{{detail.lowest}}</span>
            </div>
    
             <!-- 最高温度 -->
             <div class="detail-lowest-div detail-info-div">
                <span>最高温度：</span>
                <span>{{detail.highest}}</span>
            </div>
    
             <!-- 湿度 -->
             <div class="detail-humidity-div detail-info-div">
                <span>最低温度：</span>
                <span>{{detail.humidity}}</span>
            </div>
            <!-- 风向 -->
            <div class="detail-wind-div detail-info-div">
                <span>风向：</span>
                <span>{{detail.wind}}</span>
            </div>
            <!-- 风力 -->
            <div class="detail-humidity-div detail-info-div">
                <span>风力：</span>
                <span>{{detail.windsc}}</span>
            </div>
            <!-- 风速 -->
            <div class="detail-windspeed-div  detail-info-div">
                <span>风速:</span>
                <span>{{detail.windspeed}}</span>
            </div>
            <!-- 建议 -->
            <div class="detail-tips-div  detail-info-div">
                <span>建议：</span>
                <span>{{detail.tips}}</span>
            </div>
        </div>
        <!-- 返回 -->
        <div class="btn-div">
            <Button type="warning" @click="goBack()">返回</Button>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Detail",
        created(){
            console.log("test");
            this.detail = this.$route.params;
            console.log(this.$route.params);
        },
        data(){
            return{
                detail:{
                    area:"北京市",
                    date:"7月10日",
                    week:"星期四",
                    weather:"晴",
                    lowest:"20",
                    highest:"30",
                    humidity:"8",
                    wind:"东南风",
                    windsc:"1-2级",
                    windspeed:"8",
                    tips:"多喝热水"

                }
            }
        },
        methods:{
            goBack(){
                this.$router.push("/newList");
                // console.log("back");
                // this.$router.go(-1);s
            }
        }
    }
</script>
<style lang="less">
    @WIDTH:400px;
    .center(){
        width: @WIDTH;
        margin:20px auto;
        padding:5px 15px;
    }
    .detail{
        .center;
        color:white;
        border: 1px solid #2db7f5;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background: #2db7f5;
        border-radius: 5px;
    }
    .detail-info-div{
        width: 50%;
        
        /* border: 1px solid gray; */
        margin:10px 0px;
        padding: 5px 0px;
    }
    .detail-tips-div{
        display: block;
        width: 100%;
        text-align: left;
    }
    .detail-city{
        padding-top: 0px;
    }
    
</style>