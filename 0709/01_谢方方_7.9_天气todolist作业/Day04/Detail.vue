<template>
    <div>
        <Button type="primary" @click="back">back</Button>
        
        <h1 class="content">这是详情页，对应：{{this.$route.query.index}}</h1>
    </div>
</template>

<script>

export default {
    name:'Detail',
    props:{
        flag:Boolean
    },
    data(){
        return {
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    margin:auto;
}
</style>
