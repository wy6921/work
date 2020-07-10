<template>
    <div>
        <p>复选框</p>
        <slot name="fuxuan"></slot>
        <p>选择城市</p>
        <slot name="city"></slot>
        <p>天气展示</p>
        <slot name="tianqi"></slot>
        
    </div>
</template>
<script>
    export default {
        name: 'child',
        props: {
            message: String
        },
        created() {
   
        },
    
        data() {
            return {
               
            }
        },
        methods: {

        },




    }
</script>