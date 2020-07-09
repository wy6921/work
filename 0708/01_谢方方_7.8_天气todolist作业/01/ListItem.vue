<template>
    <div :class="['weather-item',flag?'weather-item-orage':'weather-item-blue']">
        <slot name="check"></slot>
        <slot name="content"></slot>        
        <span> ---- </span>
        <slot name="icon"></slot>
    </div>
</template>

<script>

export default {
    name:'ListItem',
    props:{
        flag:Boolean
    },
    data(){
        return {
        }
    }
}
</script>

<style>
.weather-item{
    width:50%;
    height: 40px;
    margin: auto;
    margin-top: 8px;
    border-radius: 5px;
    line-height: 40px;
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
