<template>
    <div>
        <label v-for="(f,i) in fruits" :key="i">
            <input type="checkbox" :value="f.name" v-model="checks"  class="checkbox"/>
            {{f.name}}
        </label>
        <div>您选择了{{checks}}</div>
    </div>
</template>

<script>

export default {
    name:'FruitsCheck',
    data(){
        return {
            fruits:[
                {id:1, name:"葡萄" },
                {id:2, name:"哈密瓜"},
                {id:3, name:"西瓜" }
            ],
            checks:[]
        }
    }
}
</script>

<style>

</style>
