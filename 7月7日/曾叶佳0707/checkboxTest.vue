<template>
  <!-- <div id="zyjtest">
    <div>checkbox复选框属性</div>
      <input type="checkbox" v-model="fruit" value ="香蕉" >香蕉
      <input type="checkbox" v-model="fruit" value ="苹果" >苹果
      <input type="checkbox" v-model="fruit" value ="西瓜" >西瓜
    <div>您选择的水果是{{fruit}}</div>
  </div> -->
  <div id="zyjtest">
    <div>checkbox复选框属性</div>
      <input type="checkbox" v-model="fruit" value ="香蕉" >香蕉
      <input type="checkbox" v-model="fruit" value ="苹果" >苹果
      <input type="checkbox" v-model="fruit" value ="西瓜" >西瓜
    <div>您选择的水果是{{fruit}}</div>
  </div>
</template>

<script>

export default {
  name: 'ZyjTest',
  data () {
    return {
      fruit: []
    }
  }
}
</script>

<style>

</style>
