<template>
  <div>
    <slot name="first"> </slot>
    <slot name="second"></slot>
    <slot name="last"></slot>
  </div>
</template>

<script>
export default {
  props: {
    // parentData: Array
    parentData: {type:Array}
  },

  data() {
    return {
    //  obj:{
    //    checked:false,
    //    city:'成都',
    //    weather:'晴天'
    //  }
    
    };
  },
  
  methods: {
      handleChange(){
        //   this.checkedValue.push(event.target.value)
          // console.log(this.checkedValue);
        this.$emit('change1',this.checkedValue)
      }
  },

};
</script>

<style>
</style>