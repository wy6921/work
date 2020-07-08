<template>
  <div>
    <label>
      <input type="checkbox" v-model="checkedValue" value="香蕉" @change="handleChange"/>香蕉
    </label>
    <label>
      <input type="checkbox" v-model="checkedValue" value="苹果" @change="handleChange"/>苹果
    </label>
    <label>
      <input type="checkbox" v-model="checkedValue" value="西瓜" @change="handleChange" />西瓜
    </label>
    <!-- <div>{{checkedValue}}</div> -->
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  model: {
      props: 'checkedValue',
      event: 'change'
  },

  data() {
    return {
      checkedValue:[]      
    
    };
  },
  mounted(){
      console.log(this.checkedValue)
  },
  methods: {
      handleChange(){
        //   this.checkedValue.push(event.target.value)
        //   console.log(this.checkedValue);
        this.$emit('change',this.checkedValue)
      }
  },
//   watch:{
//       checkedValue(){
//           this.$emit('change',this.checkedValue)
//       }
//   }
};
</script>

<style>
</style>