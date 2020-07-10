<template>
    <router-link :to="{ path: '/list/detail', query: { index: index}}"> 
    <div :class="['weather-item',flag?'weather-item-orage':'weather-item-blue']">
        <slot name="check"></slot>
        <slot name="content"></slot>        
        <span></span>
        <slot name="icon"></slot>
    </div>
    </router-link>
</template>

<script>

export default {
    name:'ListItem',
    props:{
        flag:Boolean,
        index:Number
    },
    data(){
        return {
        }
    }
}
</script>

<style lang="less">
.weather-item{
    width:50%;
    height: 80px;
    margin: auto;
    margin-top: 18px;
    border-radius: 5px;
    line-height: 40px;
    padding: 0 10px;
    span{
        margin:0 20px;
    }
}
.weather-item-blue{
    background: #d2edfa;
    border:1px solid #8a9df5;
}
.weather-item-orage{
    background: #fdddb9;
    border:1px solid #da9465;
}
.icon{
    height:18px;
}
</style>
