<template>
  <div>
      <Select v-model="checkedValue" @change="handleChange"></Select>
      <!-- <Select v-model="checkedValue"></Select> -->
      <p>您选择的了：{{checkedValue}}</p>
  </div>
</template>

<script>
import Select from "./select.vue";
export default {
    data(){
        return {
            data:[],
            newData: [],
            checkedValue: []
        }
    },
    components:{
        Select
    },
    methods:{
        handleChange(val){
            console.log(val)
            // this.newData = this.data.concat(val)
            // return this.newData;
            // console.log(this.data.concat(val))
        }
    }

}
</script>

<style>

</style>