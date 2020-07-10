<template>
    <div>
        <!-- 日期 -->
        <span class="date-span align-left">
            <slot name="dateSlot">
                <!-- <span>
                    <span>{{item.date}}</span>
                    <span>{{item.week}}</span>
                </span> -->
            </slot>
        </span>
        <!-- 天气 -->
        <span class="weather-span align-left">
            <slot name="weatherSlot">
                <!-- <span>
                    <span>{{item.weather}},{{item.lowest}}~{{item.highest}}</span>
                    <!-- <span></span> -->
                <!-- </span> --> -->
            </slot>
        </span>
        <!-- 温度区间 -->
        <span class="tips-span align-left">
            <slot name="tipsSlot">
                <!-- <span>
                    <span>{{item.tips}}</span>
                </span> -->
            </slot>
        </span>
        <!-- 天气图片 -->
        <span class="img-span">
            <slot name="imgSlot"></slot>
        </span>  
    </div>
    
</template>
<script>
    export default{
        name:"Item",
        data(){
            return {
                
            }
        }
    }
</script>
<style>
    .align-left{
        text-align: left;
    }
    .date-span,.weather-span,.tips-span,.img-span{
        display: block;
        padding: 0px 5px;
        margin: 5px 0px;
        float: left;
    }
    .date-span{
        width: 20%;
    
    }
    .weather-span{
        width: 25%;
    }
    .img-span{
        width: 10%;
        text-align: center;
    }
    .tips-span{
        width: 40%;
    
    }
    
    
    
</style>